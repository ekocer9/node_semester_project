<script>
  import Login from './components/Login.svelte';
  import Protected from './components/Protected.svelte';
  const loginUrl = 'http://localhost:8080/login';
  const protectedUrl = 'http://localhost:8080/protected';
</script>

<main>
  <h1>Svelte Security</h1>
  <Login apiUrl={loginUrl} />
  <Protected apiUrl={protectedUrl} />
</main>
