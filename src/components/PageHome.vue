<template>
  <the-hero />

  <section class="section">
    <h2 class="title">Skills</h2>
    <h3 class="subtitle">Here are <strong>some</strong> of the technologies that I am skilled with, though this not a comprehensive list and I am comfortable learning new ones! </h3>
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
import TheHero from '@/components/TheHero'

export default {
  name: 'PageHome',
  components: {
    TheHero
  },
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
.title {
  font-size: x-large;
  font-weight: bolder;
  margin-bottom: 1.5em;
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
