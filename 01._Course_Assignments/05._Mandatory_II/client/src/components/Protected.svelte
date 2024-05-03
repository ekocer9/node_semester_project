<script>
import { onMount } from 'svelte';
export let apiUrl = '';

let protectedData = '';
let error = '';

onMount(async () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch protected data');
            }

            protectedData = await response.json();
        } catch (err) {
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
