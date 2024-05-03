<script>
  import Login from './components/Login.svelte';
  const loginUrl = 'http://localhost:8080/login';
</script>

<main>
  <h1>Svelte Security</h1>
  <Login apiUrl={loginUrl} />
</main>
