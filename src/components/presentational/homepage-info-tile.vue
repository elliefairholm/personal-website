<template>
  <div class="homepage-info">
    <div class="profile-picture-container">
      <img class="profile-picture" src="../../assets/me.jpeg" alt="Ellie Fairholm" />
    </div>

    <div class="basic-info">
      <p>Barcelona based Full-Stack Developer specialising in Javascript.</p>
      <typewriter></typewriter>
      <p>
        Always interested in learning new technologies. In fact, I learnt Vue in less than a week, and used it for the front-end of this website. You can take a look at my github repository
        <a
          target="_blank"
          href="https://github.com/elliefairholm/personal-website"
          class="link"
        >here</a>.
        <br />
        <br />Currently mastering: Vue.js.
        <br />
        <br />I'm highly motived and always the optimist. I like facing the unknown and coming up with new solutions to challenging problems.
        <br />
        <br />Massive fan of the theatre, and can't stop tap dancing.
      </p>
    </div>
  </div>
</template>

<script>
import typewriter from "@/components/container/typewriter.vue";
export default {
  name: "homepage",
  components: {
    typewriter: typewriter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-picture-container {
  display: flex;
  align-items: center;
}

.profile-picture {
  height: 300px;
}

.homepage-info {
  display: flex;
  padding: 5% 10%;
  justify-content: space-evenly;
}

.basic-info {
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.link {
  text-decoration: none;
  color: #d11919;
}
</style>
