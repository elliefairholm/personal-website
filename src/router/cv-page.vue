<template>
  <div class="cv-page">
    <div class="cv-section">
      <cv />
      <a href="./ellie-fairholm-cv.pdf" download>
        <cta-button text="Download CV"></cta-button>
      </a>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import cv from "../components/container/cv.vue";
import ctaButton from "@/components/presentational/cta-button.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "cv-page",
  components: {
    cv: cv,
    "cta-button": ctaButton,
    "my-footer": footer
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.cv-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 7vh;
}

.font-6rem {
  font-size: 6rem;
}

.cv-section {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
