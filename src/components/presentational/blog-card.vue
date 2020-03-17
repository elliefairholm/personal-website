<template>
  <div class="blog-card-container">
    <div class="blog-info-container">
      <p class="title">{{blog.title}}</p>
      <p class="date">{{blog.date}}</p>
    </div>
    <div class="blog-content-container">
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-card",
  props: {
    blog: {
      type: Object,
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
}

.title {
  font-size: 2rem;
  margin-bottom: 0;
}

.date {
  font-style: italic;
  font-size: 0.75rem;
}

.blog-date-container {
}

.blog-content-container {
}
</style>
