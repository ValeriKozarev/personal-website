<template>
  <div class="container">
    <the-navbar />
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Val will eventually put some links here so you can connect and talk a bit more :)
        </p>
      </div>
    </footer>
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
