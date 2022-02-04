<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        Hi! Welcome to my website. This is the home page and I don't know what to put here.
      </div>
    </div>
  </div>
  <section class="section">
    <h1 class="title">Technologies</h1>
    <h2 class="subtitle">Here is some stuff I can use</h2>
    <div class="columns is-multiline">
      <div v-for="technology in technologies" :key="technology.name" class="column is-one-fifth">
        {{technology.name}}
      </div>
    </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',
  props: {
  },
  data () {
    return {
      technologies: sourceData.technologies
    }
  }
}
</script>

<style scoped>

</style>
