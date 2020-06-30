<template>
  <div class="homepage">
    <walle class="walle-container" />
    <div class="main-content">
      <h1 class="title">hi, i'm ellie</h1>
      <typewriter
        class="typing center"
        typingSentence="i'm a full-stack developer specialising in javascript"
      />
    </div>
    <my-footer class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import walle from "@/components/container/walle.vue";
import typewriter from "@/components/container/typewriter.vue";
import footer from "@/components/container/footer-bar.vue";

export default {
  name: "home",
  components: {
    walle: walle,
    typewriter: typewriter,
    "my-footer": footer
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.homepage {
  width: 100%;
  min-height: 93vh;
  position: relative;
  top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-bottom: 5%;
  margin-top: 140px;
  width: 80%;
}

.main-content > * {
  margin: 0;
}

.title {
  color: #05386b;
  text-align: center;
  font-size: 10rem;
}

.typing {
  font-size: 2.5rem;
}

.walle-container {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80%;
  bottom: 15%;
  padding-right: 10%;
}

a {
  text-decoration: none;
}

.center {
  text-align: center;
}

@media screen and (max-width: 415px) {
  .title {
    font-size: 5rem;
  }

  .typing {
    font-size: 1.5rem;
    margin-top: 5%;
  }

  .walle-container {
    padding-right: 0;
    height: 30%;
  }

  .main-content {
    margin-top: 75px;
    /* height: 65vh; */
    justify-content: space-between;
    margin-bottom: 0;
  }
}
</style>