<script>
    import { onMount } from 'svelte';
    export let apiUrl = '';
  
    let protectedData = '';
    let error = '';
  
    onMount(async () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        try {
          const response = await fetch(`${apiUrl}/protected`, {
            headers: {
              'Authorization': `Bearer ${jwt}`
            }
          });
  
          if (!response.ok) {
            if (response.status === 401) {
              error = 'Unauthorized: Invalid token or token expired';
            } else {
              error = 'Failed to fetch protected data';
            }
            throw new Error(error);
          }
  
          protectedData = await response.json(); // Assume the server sends back JSON data
        } catch (err) {
          console.error('Error fetching protected data:', err.message);
          error = err.message || 'An error occurred while fetching data';
        }
      } else {
        error = 'No authentication token found. Please log in.';
      }
    });
  </script>
  
  {#if error}
    <p style="color: red;">{error}</p>
  {:else if protectedData}
    <div>
      <h1>Protected Data</h1>
      <pre>{JSON.stringify(protectedData, null, 2)}</pre>
    </div>
  {:else}
    <p>Loading protected data...</p>
  {/if}
  