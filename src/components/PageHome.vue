<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <p class="title">
            Hey, there! I'm Val. &#128075;&#127996;
          </p>
          <p class="subtitle">
            Welcome to my website. I'm a coffee lover, a tree hugger, and a musician. I'm also a Software Engineer. I am interested in learning new frameworks, developing interesting and beautiful applications, and making technology accessible to as many people as possible. Feel free to look around and get to know me!
          </p>
        </div>
        <div class="hero-pic">
          <img src="../../public/hero_pic.jpg" alt="picture of Val">
        </div>
      </div>
    </div>
  </section>

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
