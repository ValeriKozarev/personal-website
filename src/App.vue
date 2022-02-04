<template>
  <div class="container">
    <the-navbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>
@import 'assets/style.css'
</style>
