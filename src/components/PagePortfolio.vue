<template>
  <section class="section">
    <h1 class="title">Experience</h1>
    <h2 class="subtitle">
      This my job history and other relevant experience.
    </h2>
    <div class="columns is-multiline">
      <div v-for="job in jobs" :key="job.title" class="column is-full">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
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
      These are projects I've worked on that are cool.
    </h2>
    <div class="columns is-multiline">
      <div v-for="project in projects" :key="project.title" class="column is-full">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{project.name}}</strong>
                <br>
                {{project.description}}
              </p>
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
  }
}
</script>

<style scoped>

</style>
