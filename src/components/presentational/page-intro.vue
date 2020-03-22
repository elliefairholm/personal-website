<template>
  <div class="page-intro" v-html="intro">
    <p>{{intro}}</p>
  </div>
</template>

<script>
export default {
  name: "page-intro",
  props: {
    intro: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-intro >>> .link {
  text-decoration: none;
  color: maroon;
  font-weight: 500;
}

.page-intro >>> .uppercase {
  text-transform: uppercase;
}

.page-intro {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
