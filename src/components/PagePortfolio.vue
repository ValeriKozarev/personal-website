<template>
  <section class="section">
    <div class="section-header">
      <h1 class="title">Relevant Experience</h1>
      <h2 class="subtitle">
        I am a Software Engineer with experience in full-stack development and building SPAs on the web. I am currently interested in web development, accessibility, and cloud computing.
      </h2>
    </div>
    <br />
    <div class="columns is-multiline is-mobile">
      <div v-for="job in jobs" :key="job.title" class="column is-10 is-offset-1 portfolio-entry">
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
    <div class="section-header">
      <h1 class="title">Projects</h1>
      <h2 class="subtitle">
        I use personal projects as a way to learn new skills. Check out my GitHub for more things that I've made!
      </h2>
    </div>
    <br />
    <div class="columns is-multiline is-mobile">
      <div v-for="project in projects" :key="project.title" class="column is-10 is-offset-1 portfolio-entry">
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
.section-header {
  background-color: #fafafa;
  border-radius: 20px;
  padding: 2rem;
}

.portfolio-entry {
  padding: 2em 0em;
}
@media (max-width:629px) {
  .image {
    display: none
  }
}
</style>
