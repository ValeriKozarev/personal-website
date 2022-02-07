<template>
  <section class="section">
    <h1 class="title">Relevant Experience</h1>
    <h2 class="subtitle">
      I am a Software Engineer with experience in full-stack development and building SPAs.
    </h2>
    <br />
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
      I have a rich catalog of personal and academic projects that I have used to learn new technologies and further develop my skillset.
    </h2>
    <br />
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
