<template>
  <footer class="footer">
    <h2 class="footer-title">Want to connect? Find me here!</h2>
    <div class="content">
      <div class="links">
        <p>
          <a href="https://www.linkedin.com/in/valeri-kozarev/" target="#">LinkedIn</a>
          ||
          <a href="https://github.com/ValeriKozarev" target="#">GitHub</a></p>
      </div>
      <div class="vue-branding">
        <a href="https://vuejs.org/" target="#">
          <img class="image is-48x48 vue-logo" alt="Vue logo" src="../assets/logo.png">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
  }
}
</script>

<style scoped>
footer {
  padding-bottom: 4em;
}

.footer-title {
  text-align: left;
  font-size: x-large;
  color: #42b883;
  font-weight: bolder;
}

.content {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.links {
  padding-top: 1em;
  padding-left: 2em;
  text-align: left;
  flex-basis: 90%;
}

.vue-branding {
  justify-content: center;
}

.vue-logo {
  opacity: 40%;
  transition: all 0.5s ease;
}
.vue-logo:hover {
  opacity: 100%;
}
</style>
