<template>
  <div class="cv-page">
    <div class="cv-section">
      <page-intro :intro="intro"></page-intro>
      <file></file>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import pageIntro from "@/components/presentational/page-intro.vue";
import file from "@/components/container/file.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "cv",
  components: {
    "page-intro": pageIntro,
    file: file,
    "my-footer": footer
  },
  data() {
    return {
      intro: `Below you will find my CV. You can take a look at my <a target="_blank" class="link" href="https://www.linkedin.com/in/elliefairholm">linkedin</a> for more information or drop me a message using the contact page. Click <a target="_blank" class="link">here</a> if you want to download it.`
    };
  },
  methods: {
    downloadCV() {
      console.log("downaloding");
    }
  }
};
</script>

<style scoped>
.cv-page {
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 180px;
}

.cv-section {
  width: 80%;
  margin-bottom: 5%;
}
</style>
