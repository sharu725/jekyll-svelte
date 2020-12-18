<script>
  export let baseUrl;
</script>

<style>
  .title {
    display: flex;
    align-items: center;
  }

  .title .logo {
    margin-left: auto;
  }
  .title .home {
    text-decoration: none;
    color: inherit;
  }
</style>

<div class="title">
  <a class="home" href={`${baseUrl}/`}>
    <h1>Jekyll Svelte</h1>
  </a>
  <a class="logo" href="https://github.com/sharu725/jekyll-svelte"><img
      width="20"
      src={`${baseUrl}/assets/images/github.svg`}
      alt="github repo" /></a>
</div>
