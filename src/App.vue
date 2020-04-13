<template>
  <div id="app">
    <nav-bar :selectedRoute="route"></nav-bar>
    <router-view @set-route="setRoute($event)" />
  </div>
</template>

<script>
import navbar from "@/components/container/navbar.vue";

export default {
  name: "App",
  data() {
    return {
      route: "/"
    };
  },
  components: {
    "nav-bar": navbar
  },
  methods: {
    setRoute(route) {
      this.route = route;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #505050;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: #505050;
}
</style>
