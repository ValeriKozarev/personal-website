<template>
  <p>about page</p>

  <h2>Some Albums that I like:</h2>
  <div class="card album">{{getRandomizedAlbums().title}}</div>

  <h2>Some Books that I like:</h2>
  <div v-for="book in books" :key="book.title" class="card book">
    <div>{{book.title}}</div>
  </div>

  <h2>Some Games that I like:</h2>
  <div v-for="game in games" :key="game.title" class="card game">
    <div>{{game.title}}</div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageAbout',
  props: {
  },
  data () {
    return {
      albums: sourceData.albums,
      games: sourceData.games,
      books: sourceData.books
    }
  },
  methods: {
    getRandomizedAlbums () {
      // TODO: implement a randomized selection from array of album objects
      return this.albums[0]
    }
    // TODO: implemented randomized selection methods for other arrays
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
