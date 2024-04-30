<script>
  import Login from './components/Login.svelte';
  import Protected from './components/Protected.svelte';
  const apiUrl = 'http://localhost:8080'; 
</script>

<main>
  <h1>Simple Svelte Security Example</h1>
  <Login {apiUrl} />
  <Protected {apiUrl} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: auto;
  }
</style>
