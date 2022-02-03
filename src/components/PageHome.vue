<template>
  <p>home page</p>
  <h2>Some Albums that I like:</h2>
  <div v-for="album in albums" :key="album.title">
    <div>{{album.title}}</div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',
  props: {
  },
  data () {
    return {
      albums: sourceData.albums,
      games: sourceData.games,
      books: sourceData.books
    }
  }
}
</script>

<style scoped>

</style>
