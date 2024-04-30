<script>
    import { writable } from 'svelte/store';
    
    export let apiUrl = '';
  
    let username = '';
    let password = '';
    let errorMessage = '';
    let isLoggedIn = false;
  
    export const token = writable('');
  
    async function login() {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to login');
        }
  
        const data = await response.json();
        token.set(data.token);
        localStorage.setItem('jwt', data.token);
        errorMessage = '';
        isLoggedIn = true;
      } catch (error) {
        errorMessage = error.message;
      }
    }
  
    function logout() {
      token.set('');
      localStorage.removeItem('jwt');
      isLoggedIn = false;
      username = '';
      password = '';
      errorMessage = '';
    }
  </script>
  
  <form on:submit|preventDefault={login}>
    {#if !isLoggedIn}
      <div>
        <label for="username">Username:</label>
        <input id="username" type="text" bind:value={username}>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" bind:value={password}>
      </div>
      <button type="submit">Login</button>
    {:else}
      <button type="button" on:click={logout}>Logout</button>
    {/if}
    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
  </form>