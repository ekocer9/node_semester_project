<script>
    import { writable } from 'svelte/store';
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
    import { push } from 'svelte-spa-router';

    export let apiUrl = '';
    let username = '';
    let password = '';
    let errorMessage = writable('');
    let isLoggedIn = writable(false);

    export const token = writable('');

    toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        newestOnTop: true,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };

    async function login() {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                toastr.error(data.message || 'Failed to login', 'Login Failed');
                throw new Error(data.message || 'Failed to login');
            }

            token.set(data.token);
            localStorage.setItem('jwt', data.token);
            isLoggedIn.set(true);
            toastr.success('You have logged in successfully!', 'Login Successful');
            errorMessage.set('');

            push('/protected'); // Navigate to the protected page
        } catch (error) {
            errorMessage.set(error.message);
            toastr.error(error.message, 'Login Error');
        }
    }

    function logout() {
        token.set('');
        localStorage.removeItem('jwt');
        isLoggedIn.set(false);
        username = '';
        password = '';
        errorMessage.set('');
        toastr.info('You have logged out successfully!', 'Logged Out');
    }
</script>


<form on:submit|preventDefault={login}>
  {#if !$isLoggedIn}
      <div>
          <label for="username">Username:</label>
          <input id="username" type="text" bind:value={username}>
      </div>
      <div>
          <label for="password">Password:</label>
          <input id="password" type="password" bind:value={password}>
      </div>
      <button type="submit">Login</button>
      {#if $errorMessage}
          <p style="color: red;">{$errorMessage}</p>
      {/if}
  {:else}
      <button type="button" on:click={logout}>Logout</button>
  {/if}
</form>