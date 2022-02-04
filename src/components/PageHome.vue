<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        Hi! Welcome to my website. This is the home page and I don't know what to put here.
      </div>
    </div>
  </div>
  <section class="section">
    <h1 class="title">Skills</h1>
    <h2 class="subtitle">Here are <strong>some</strong> of the technologies that I am skilled with, or at least the ones that I could find nice logos for on FontAwesome...</h2>
    <div class="columns is-multiline">
      <div v-for="technology in technologies" :key="technology.name" class="column is-one-fifth">
        <font-awesome-icon :icon="[technology.logo_type, technology.logo]" size="7x"/>
        <h3>{{technology.name}}</h3>
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
