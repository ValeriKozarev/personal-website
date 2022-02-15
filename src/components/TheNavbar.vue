<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-end">
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
.navbar {
  margin-bottom: 2rem;
}

.navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
  color: #42b883;
}

.navbar-item {
  font-size: x-large;
}

.column svg {
  font-size: 7rem;
  transition: all 0.5s;
}

.column svg:hover {
  font-size: 8rem;
  color: #42b883;
}
</style>
