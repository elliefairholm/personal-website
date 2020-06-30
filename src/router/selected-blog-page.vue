<template>
  <div class="selected-blog-page">
    <div class="blog-section">
      <selected-blog :title="title"></selected-blog>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import selectedBlog from "@/components/container/selected-blog.vue";
import footer from "@/components/container/footer-bar.vue";

export default {
  name: "blog",
  components: {
    "selected-blog": selectedBlog,
    "my-footer": footer
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.selected-blog-page {
  width: 100%;
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
