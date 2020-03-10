<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import navbar from "@/components/container/navbar.vue";
import footer from "@/components/container/footer-bar.vue";

export default {
  name: "App",
  components: {
    "nav-bar": navbar,
    "footer-bar": footer
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
