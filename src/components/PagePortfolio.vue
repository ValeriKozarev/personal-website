<template>
  <section class="section">
    <h1 class="title">Relevant Experience</h1>
    <h2 class="subtitle">
      I am a Software Engineer with experience in full-stack development and building SPAs. I am currently interested in web development, accessibility, and cloud computing.
    </h2>
    <br />
    <div class="columns is-multiline is-mobile">
      <div v-for="job in jobs" :key="job.title" class="column is-10 is-offset-1">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128 is-square">
              <img :src="getJobImageUrl(job)" :alt="'' + job.title + ' logo'">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{job.title}}</strong> at {{job.company}}
                <br>
                {{job.description}}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <h1 class="title">Projects</h1>
    <h2 class="subtitle">
      I use personal projects as a way to learn new skills. Check out my GitHub for more things that I've made!
    </h2>
    <br />
    <div class="columns is-multiline is-mobile">
      <div v-for="project in projects" :key="project.title" class="column is-10 is-offset-1">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128 is-square">
              <img :src="getProjectImageUrl(project)" :alt="'' + project.title + ' logo'">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{project.name}}</strong>
                <br>
                {{project.description}}
              </p>
              <a class="button" :href="project.link" target="#">Learn More!</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PagePortfolio',
  props: {
  },
  data () {
    return {
      jobs: sourceData.jobs,
      projects: sourceData.projects
    }
  },
  methods: {
    getJobImageUrl (job) {
      return require('../assets/jobs/' + job.logo)
    },
    getProjectImageUrl (project) {
      return require('../assets/projects/' + project.logo)
    }
  }
}
</script>

<style scoped>

</style>
