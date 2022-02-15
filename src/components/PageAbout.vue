<template>
  <section class="section">
    <h2 class="title">About Me</h2>
    <h3 class="subtitle">There's a bit more to everyone than just their job title, don't you think?</h3>
    <div class="container has-text-centered">
      <br />
      <p>
        I am a first-generation immigrant from Bulgaria currently working as a Software Engineer in the United States. I studied Computer Science and Statistics at NC State University in Raleigh, NC. I have experience in a variety of industries and with a variety of technologies. Currently, I am really interested in front-end development and cloud computing.
      </p>
      <br />
      <p>
        I care deeply about the climate crisis, as well as the current health and wealth inequalities in the United States.
      </p>
      <br />
      <p>
        I really enjoy drinking coffee, playing guitar, and spending time in the great outdoors.
      </p>
    </div>
    <br />
  </section>

  <section class="section">
    <h2 class="title">Some of my Favorite Albums Are</h2>
    <button class="randomize" @click="getRandomAlbums">Randomize</button>
    <div class="columns is-multiline">
      <div v-for="album in albums" :key="album.title" class="column is-one-quarter">
        <div class="card album">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="getImageUrl(album)" :alt="'' + album.title + ' by ' + album.artist">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageAbout',
  props: {
  },
  data () {
    return {
      albums: this.getInitAlbums()
    }
  },
  methods: {
    getImageUrl (album) {
      return require('../assets/' + album.artwork)
    },
    getInitAlbums () {
      const shuffled = sourceData.albums.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 4)
    },
    getRandomAlbums () {
      const shuffled = sourceData.albums.sort(() => 0.5 - Math.random())
      this.albums = shuffled.slice(0, 4)
    }
  }
}
</script>

<style scoped>
.album {
  background-color: aquamarine;
}
.book {
  background-color: bisque;
}
.game {
  background-color: coral;
}
</style>
