<template>
  <div class="contact-page">
    <h1 class="title">contact</h1>
    <div class="main-section">
      <div class="details">
        <a href="mailto:elliefairholm@gmail.com">
          <p>elliefairholm@gmail.com</p>
        </a>
        <p class="separator">|</p>
        <a href="tel:+447964900622">
          <p>+447964900622</p>
        </a>
        <p class="separator">|</p>
        <a href="http://linkedin.com/in/elliefairholm" target="_blank">
          <p>linkedin.com/in/elliefairholm</p>
        </a>
        <p class="separator">|</p>
        <a href="http://github.com/elliefairholm" target="_blank">
          <p>github.com/elliefairholm</p>
        </a>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import footer from "@/components/container/footer-bar.vue";

export default {
  name: "contact",
  components: {
    "my-footer": footer
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 93vh;
  top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.title {
  color: #05386b;
  margin-bottom: 0;
  margin-top: 2.5%;
  text-align: center;
  font-size: 3rem;
}

.main-section {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 30px;
}

.details > a > p {
  margin-left: 8px;
  margin-right: 8px;
}

.icon {
  height: 50px;
  margin: 20px;
}

.contact-form-section {
  margin-top: 2.5%;
  width: 100%;
}

@media screen and (max-width: 415px) {
  .title {
    font-size: 2.75rem;
  }

  .details {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .separator {
    display: none;
  }
}
</style>
