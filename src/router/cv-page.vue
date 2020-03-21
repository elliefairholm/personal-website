<template>
  <div class="cv-page">
    <cv-file></cv-file>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import cvFile from "@/components/container/cv-file.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "cv",
  components: {
    "cv-file": cvFile,
    "my-footer": footer
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
  position: relative;
  top: 180px;
}
</style>
