<template>
  <div class="container">
    <the-navbar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
@import 'assets/style.css'
</style>
