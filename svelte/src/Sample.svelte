<script>
  let count = 0;
</script>

<style>
  .card {
    padding: 2rem 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background-color: white;
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: olivedrab;
  }
</style>

<section>
  <div class="card">
    <p>Count: <strong>{count}</strong></p>
    <button on:click={() => (count += 1)}>Increment</button>
    <p>This is another <em>svelte</em> component.</p>
  </div>
</section>
