<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <p class="title">
            Hey, there! I'm Val. &#128075;&#127996;
          </p>
          <p>
            Welcome to my website, feel free to look around and let me know what you think! I made this to get some experience building websites and as a way to put myself out there in a way that's a bit more engaging that a résumé. I'm currently a Software Engineer in Colorado, primarily focusing on growing my skills as a front-end developer. I'm a coffee lover, a gearhead, an amateur musician, and a nature enthusiast. I am interested in learning new technologies, developing interesting and beautiful applications, and leveraging tech to have a positive impact in the word.
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

.hero-text {
  float:left;
  width: 66%;
  text-align: center;
}

.hero-pic {
  padding-left: 2rem;
  float:right;
  width: 33%;
}

.title {
  margin-bottom: 1rem;
  font-size: larger;
}
</style>
