<template>
  <div class="navbar">
    <a class="logo-container" href="/" :class="{ hide : selectedRoute === '/'}">
      <img class="logo" src="../../assets/robot.png" alt="walle robot" />
    </a>
    <div class="sections">
      <div v-for="(page, index) in pages" :key="index" @click="selectPage(page)">
        <router-link :to="page" exact class="link">{{ page === '/' ? 'home' : page.slice(1) }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    selectedRoute: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {
      pages: ["/", "/cv", "/contact"] // have removed blog for mvp
    };
  },
  methods: {
    selectPage(page) {
      this.selectedRoute = page;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;
  background: white;
  z-index: 1;
  top: 0;
  padding: 5px 0;
  height: 7vh;
}

.logo-container {
  margin-left: 1.5%;
  color: #05386b;
  display: flex;
}

.logo {
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  align-items: center;
}

.sections {
  display: flex;
  justify-content: space-evenly;
  width: 400px;
}

.bold {
  font-weight: 500;
}

.link {
  text-decoration: none;
  color: #505050;
}

a {
  text-decoration: none;
}

.router-link-exact-active {
  color: #ff8f00;
  font-weight: 500;
}

.hide {
  visibility: hidden;
}

@media screen and (max-width: 750px) {
  .logo {
    width: 100%;
  }
}

@media screen and (max-width: 415px) {
  .logo-container {
    display: none;
  }

  .sections {
    width: 100%;
  }
}
</style>
