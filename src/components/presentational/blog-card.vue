<template>
  <router-link class="blog-card-container link" @click="openBlog" :to="`/blog/${blog.title}`">
    <div class="blog-info-container">
      <p class="title">{{blog.title}}</p>
      <p class="date">{{blog.date}}</p>
    </div>
    <div class="blog-content-container">
      <p>{{blog.content}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "blog-card",
  props: {
    blog: {
      type: Object,
      required: true
    },
    openBlog: {
      type: Function,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-card-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 0;
}

.date {
  font-style: italic;
  font-size: 0.75rem;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
