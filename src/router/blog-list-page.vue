<template>
  <div class="blog-list-page">
    <div class="blog-section">
      <page-intro :intro="intro"></page-intro>
      <blog-list></blog-list>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import pageIntro from "@/components/presentational/page-intro.vue";
import blogList from "@/components/container/blog-list.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "blog",
  components: {
    "page-intro": pageIntro,
    "blog-list": blogList,
    "my-footer": footer
  },
  data() {
    return {
      intro: `Welcome to my blog! I hope you enjoy what you find. These will mainly be tech orientated posts so that I can track my personal growth as a software engineer. Each week I hope to post a 'What I learnt this week' blog. Feel free to add comments, like and/or share any of them!`
    };
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
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
  top: 76px;
}
.blog-section {
  width: 80%;
  margin-bottom: 5%;
}
</style>
