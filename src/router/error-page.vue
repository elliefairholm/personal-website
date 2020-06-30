<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="title font-4-5rem">oops, there's been an error</h1>
      <p class="information font-1-5rem">i can't seem to find the page you were looking for</p>
      <div class="go-back" @click="goBack">
        <cta-button text="go back"></cta-button>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ctaButton from "@/components/presentational/cta-button.vue";
import footer from "@/components/container/footer-bar.vue";

export default {
  name: "error",
  components: {
    "cta-button": ctaButton,
    "my-footer": footer
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.error-page {
  width: 100%;
  min-height: 93vh;
  top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.error-content {
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.title {
  color: #05386b;
  text-align: center;
  max-width: 90%;
}

.go-back {
  margin-top: 2.5%;
}

.font-4-5rem {
  font-size: 4.5rem;
}

.font-1-5rem {
  font-size: 1.5rem;
}

.information {
  max-width: 90%;
  color: #7395ae;
  text-align: center;
}
</style>
