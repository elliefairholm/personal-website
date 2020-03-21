<template>
  <div class="selected-blog-container">{{title}}</div>
</template>

<script>
export default {
  name: "selected-blog",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
