<template>
  <div class="blog-list-page">
    <div class="blog-section">
      <blog-intro></blog-intro>
      <blog-list></blog-list>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import blogIntro from "@/components/presentational/blog-intro.vue";
import blogList from "@/components/container/blog-list.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "blog",
  components: {
    "blog-intro": blogIntro,
    "blog-list": blogList,
    "my-footer": footer
  }
};
</script>

<style scoped>
.blog-list-page {
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 180px;
}
.blog-section {
  width: 80%;
  margin-bottom: 5%;
}
</style>
