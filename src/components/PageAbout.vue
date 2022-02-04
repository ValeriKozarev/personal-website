<template>
  <section class="section">
    <h1 class="title">About Me</h1>
    <h2 class="subtitle">
        I was born in Bulgaria. I studied Computer Science and Statistics at NC State in Raleigh, NC. Currently, I am a software engineer at ______. I have experience with and am interested in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </h2>
    <h2 class="subtitle">
      I am passionate about Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </h2>
    <h2 class="subtitle">
      I like camping, travelling and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </h2>
  </section>

  <section class="section">
    <h1 class="title">Some of my Favorite Albums Are</h1>
    <div class="columns is-multiline">
      <div v-for="album in albums" :key="album.title" class="column is-one-quarter">
        <div class="card album">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">{{ album.title }}</p>
            <p class="subtitle is-6">{{ album.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h1 class="title">Some of my Favorite Books Are</h1>
    <div class="columns is-multiline">
      <div v-for="book in books" :key="book.title" class="column is-one-quarter">
        <div class="card book">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">{{ book.title }}</p>
            <p class="subtitle is-6">{{ book.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h1 class="title">Some of my Favorite Stories Are</h1>
    <div class="columns is-multiline">
      <div v-for="game in games" :key="game.title" class="column is-one-quarter">
        <div class="card game">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">{{ game.title }}</p>
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
