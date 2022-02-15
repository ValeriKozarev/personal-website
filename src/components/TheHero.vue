<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="hero-text">
          <p class="title">
            Hey, there! I'm Val. &#128075;&#127996;
          </p>
          <p>
            Welcome to my website, feel free to look around! I made this website as a way to put myself out there and let folks get to know before deciding if they want to work with me. Here's my elevator pitch: I'm a Software Engineer, a tree hugger, and a coffee lover. I really like cars, hockey, and camping. I am interested in learning new frameworks, developing interesting and beautiful applications, and making technology accessible to as many people as possible. Want to work together? If so, please reach out!
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
