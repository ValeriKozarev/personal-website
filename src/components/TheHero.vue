<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <h1 class="hero-title">
            Hey, there! I'm Val. &#128075;&#127996;
          </h1>
          <p>
            Welcome to my website, feel free to look around and get to know me a little bit better! I originally made this website because I was interested in learning the Vue.js framework and I thought a website would be a bit more fun to read than a resume copy. I'm currently working at Alarm.com as an SE II based out of Colorado. I am also a coffee lover, an amateur musician, and a nature enthusiast. A fun fact about me is that I recently started <a href="https://www.youtube.com/watch?v=0EO_m_Vh2Zk" target="_blank">DJing</a>! I love to tackle challenging problems, learn new skills, develop interesting and beautiful applications, and lower barriers through technology.
          </p>
        </div>
        <div class="hero-pic">
          <figure class="image">
            <img src="../../public/new_pic2.jpg" alt="picture of Val">
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
  width: 250px;
  height: 375px;
  margin: auto;
  border-radius: 80px;
}

.hero-title {
  margin-bottom: 1rem;
  font-size: larger;
  font-weight: bolder;
}

</style>
