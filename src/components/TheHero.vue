<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <h1 class="hero-title">
            Hey, there! I'm Val. &#128075;&#127996;
          </h1>
          <p>
            Welcome to my website, feel free to look around and get to know me a little bit better! I originally made this website because I was interested in learning the Vue.js framework and I thought a website would be a bit more fun to read than a resume copy. I'm currently working at Alarm.com as an SE II. I love music, photography, cooking, and anything outdoorsy. A fun fact about me is that I recently started <a href="https://www.youtube.com/watch?v=0EO_m_Vh2Zk" target="_blank">DJing</a>! I love working as a software engineer because I'm really drawn to solving challenging problems, constantly learning new skills, developing interesting and beautiful applications, and lowering barriers through technology.
          </p>
        </div>
        <div class="hero-pic">
          <figure class="image">
            <img src="../../public/film_photo.jpeg" alt="picture of Val">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero',
  props: {
  }
}
</script>

<style scoped>
.hero {
  background-color: #348D6D;
  border-radius: 10px;
}

.hero-body .container {
  border-radius: 20px;
  background-color: #f5f5f5;
  padding: 2rem;
  box-shadow: 22px 22px #1C4A38;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.hero-text {
  padding: 20px;
  margin: auto;
  text-align: center;
  flex: 2 1 50rem;
  max-width: 100%;
}

.hero-pic {
  flex: 1 1 20rem;
  align-content: center;
  max-width: 100%;
}

.hero-pic img {
  padding-top: 15px;
  padding-bottom: 15px;
  margin: auto;
  border-radius: 100px;
}

.hero-title {
  margin-bottom: 1rem;
  font-size: larger;
  font-weight: bolder;
}

</style>
