<template>
  <footer class="footer">
    <span>
      <h2 class="footer-title">Want to connect?</h2>
    </span>
    <span>
      <h3 class="footer-subtitle">You can find me on <a href="https://www.linkedin.com/in/valeri-kozarev/" target="#">LinkedIn</a> and <a href="https://github.com/ValeriKozarev" target="#">GitHub</a></h3>
    </span>
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
  text-align: left;
}

.footer-title {
  font-size: x-large;
  color: #42b883;
  font-weight: bolder;
}
.footer-subtitle {
  font-size: larger;
  color: black;
  font-weight: bold;
}

a:link {
  text-decoration: none;
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
