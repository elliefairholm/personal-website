<template>
  <div class="cv-page">
    <div class="cv-section">
      <file :path="filePath"></file>
      <a class="download-button" href="./ellie-fairholm-cv.pdf" download>
        <cta-button text="Download CV"></cta-button>
      </a>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import file from "@/components/container/file.vue";
import ctaButton from "@/components/presentational/cta-button.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "cv",
  components: {
    file: file,
    "cta-button": ctaButton,
    "my-footer": footer
  },
  data() {
    return {
      filePath: "cv.svg"
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
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5%;
}
.download-button {
  margin-top: 5%;
  text-decoration: none;
}

@media screen and (max-width: 750px) {
  .cv-section {
    width: 100%;
  }
}
</style>
