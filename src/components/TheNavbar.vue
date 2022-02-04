<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'Home'}" class="navbar-item">Home</router-link>
        <router-link :to="{name: 'About'}" class="navbar-item">About</router-link>
        <router-link :to="{name: 'Portfolio'}" class="navbar-item">Portfolio</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>

</style>
