<template>
  <div class="homepage">
    <div class="profile-picture-container">
      <img class="profile-picture" src="../../assets/me.jpeg" alt="Ellie Fairholm" />
    </div>

    <div class="basic-info">
      Barcelona based Full-Stack Developer specialising in Javascript. Experienced in Node, both relational and non-relational databases GraphQL, Anuglar, React and Typescript. Always interested in learning new technologies. In fact, I learnt Vue in less than a week, and used it for the front-end of this website.
      <br />
      <br />Currently mastering: Vue.js.
      <br />
      <br />I'm highly motived and always the optimist. I like facing the unknown and coming up with new solutions to challenging problems.
      <br />
      <br />Massive fan of the theatre, and can't stop tap dancing.
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-picture {
  height: 300px;
}

.homepage {
  display: flex;
  padding: 5% 10%;
  justify-content: space-evenly;
}

.basic-info {
  width: 60%;
  display: flex;
  text-align: center;
  align-items: center;
}
</style>
