<template>
  <div class="cv-page">
    <cv-file></cv-file>
  </div>
</template>

<script>
// @ is an alias to /src
import cvFile from "@/components/container/cv-file.vue";

export default {
  name: "cv",
  components: {
    "cv-file": cvFile
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
