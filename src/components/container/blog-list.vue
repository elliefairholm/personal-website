<template>
  <div class="blog-list-container">
    <blog-card v-for="(blog, index) in blogs" :key="index" :blog="blog" :openBlog="openBlog" />
  </div>
</template>

<script>
import blogCard from "../presentational/blog-card.vue";
export default {
  name: "contact-form",
  data() {
    return {
      blogs: [
        {
          title: "hello",
          date: "1/1/1",
          content: "This is my first blog"
        },
        {
          title: "goodbye",
          date: "2/2/2/",
          content: "This is my second blog"
        }
      ]
    };
  },
  methods: {
    openBlog(event) {
      event.preventDefault();
      console.log("i'm opening the blog");
    }
  },
  components: {
    "blog-card": blogCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
