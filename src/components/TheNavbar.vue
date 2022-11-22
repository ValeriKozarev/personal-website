<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
      @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
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
  name: 'TheNavbar',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}

.navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
  color: #348D6D;
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
  color: #348D6D;
}
</style>
