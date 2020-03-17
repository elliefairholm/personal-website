<template>
  <div class="blog-page">
    <blog-intro></blog-intro>
    <blog-list></blog-list>
  </div>
</template>

<script>
// @ is an alias to /src
import blogIntro from "@/components/presentational/blog-intro.vue";
import blogList from "@/components/container/blog-list.vue";

export default {
  name: "blog",
  components: {
    "blog-intro": blogIntro,
    "blog-list": blogList
  }
};
</script>

<style scoped>
.blog-page {
  width: 80%;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
