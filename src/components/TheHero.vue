<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <p class="hero-title">
            Hey, there! I'm Val. &#128075;&#127996;
          </p>
          <p>
            Welcome to my website, feel free to look around and get to know me a little bit better! I originally made this website because I was interested in learning the Vue.js framework and I thought a website would be a bit more fun to read than a resume copy. I'm currently an SE II at Alarm.com and I am based out of Colorado. At my job I am primarily working as a web developer with a focus on accessibility. Outside of work I am a coffee lover, a gearhead, an amateur musician, and a nature enthusiast. I am interested in learning new skills, developing interesting and beautiful applications, and lowering barriers through technology.
          </p>
        </div>
        <div class="hero-pic">
          <figure class="image">
            <img src="../../public/hero_pic.jpg" alt="picture of Val">
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
  background-color: #42b883;
  border-radius: 10px;
}

.hero-body .container {
  border-radius: 20px;
  background-color: #f5f5f5;
  padding: 2rem;
  box-shadow: 22px 22px #1F3D0C;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.hero-text {
  text-align: center;
  flex: 1 0 65%;
  max-width: 100%;
}

.hero-pic {
  margin-top: 1em;
  margin-left: 2em;
  flex: 1 0 30%;
  align-content: center;
  max-width: 100%;
}

.hero-pic img{
  display: block;
  max-width: 100%;
  height: auto;
}

.hero-title {
  margin-bottom: 1rem;
  font-size: larger;
  font-weight: bolder;
}

</style>
