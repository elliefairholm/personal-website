<template>
  <div class="navbar">
    <div class="header-logo-container">
      <img style="width:auto" src="../../assets/name.png" alt="Ellie Fairholm Logo" />
    </div>
    <div class="sections">
      <router-link
        v-for="(page, index) in pages"
        :to="page"
        :key="index"
        class="uppercase link"
      >{{ page === '/' ? 'home' : page.slice(1) }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    msg: String
  },
  data() {
    return {
      pages: ["/", "/blog", "/cv", "/contact"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: fixed;
  background: white;
  z-index: 1;
  top: 0;
  padding-bottom: 15px;
}

.sections {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 20px;
}

.uppercase {
  text-transform: uppercase;
}

.header-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-bottom: 1px lightgray solid;
  padding-bottom: 15px;
}

.link {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  border-bottom: 3px #c70808 solid;
}
</style>
