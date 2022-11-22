<template>
  <section class="section">
    <h1 class="title">About Me</h1>
    <h2 class="subtitle">There's a bit more to everyone than just their job title, don't you think?</h2>
    <div class="container has-text-centered">
      <br />
      <p>
        I am currently an SE II at Alarm.com and I am based out of Denver, CO. I am originally from Bulgaria, though I went to school in the United States. I studied Computer Science and Statistics at NC State University in Raleigh, NC and graduated Summa Cum Laude in 2020. In my professional career thus far I have worked in a variety of industries and with a variety of technologies. One of my favorite parts about software engineering is the flexibility and variety that comes with the role. I enjoy being able to work from anywhere in the world with talented people and to constantly be challenged with new and interesting problems. There a lot of brilliant and creative individuals out there that create incredible things through their programming skills, and I find the act of creating something novel to be really exciting and motivating. Currently, I'm really interested in front-end development and the cloud computing space so I'm taking steps to develop my skills in those areas!
      </p>
      <br />
      <p>
        I believe that work/life balance is critical in leading a happy and fulfilling life, and it is something that I place a lot of importance on. Outside of work I really enjoy playing guitar, camping and hiking, and cooking. I'm an aspiring gearhead that enjoys learning about cars and motorcycles. I'm also a huge fan of traveling and learning about other cultures. On ocassion I like working on fun projects that bring together multiple hobbies such as building a SmartMirror or making mods for games that I like to play. A fun fact about me is that I won a national championship in ultimate frisbee when I was in high school!
      </p>
    </div>
    <br />
  </section>

  <section class="section">
    <div class="recommendations">
      <h2 class="title">Want some music recommendations?</h2>
      <button class="button" @click="getRandomAlbums">Click Me for More!</button>
    </div>
    <div class="columns is-multiline">
      <div v-for="album in albums" :key="album.title" class="column is-one-quarter">
        <div class="card album">
          <div class="card-image">
            <figure class="image is-square">
              <a :href=album.link target="_blank"><img :src="getImageUrl(album)" :alt="'Album art for ' + album.title + ' by ' + album.artist"></a>
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
      return require('../assets/albums/' + album.artwork)
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

@media (min-width: 769px) {
  .album {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: all 0.5s linear;
  }
  .album:hover {
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    filter: grayscale(0%);
  }
}

.recommendations {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}

.recommendations .button {
  margin-left: 2em;
}

@media (max-width:768px) {
  .recommendations .button {
    margin-left: 0em;
    margin-bottom: 2em;
    width: 100%
  }
}
</style>
