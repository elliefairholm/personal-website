<template>
  <div class="navbar">
    <div class="header-logo-container">
      <img style="width:auto" src="../../assets/name.png" alt="Ellie Fairholm Logo" />
    </div>
    <div class="sections">
      <router-link
        :to="{page}"
        v-for="(page, index) in pages"
        :key="index"
        class="uppercase"
        :class="{selected: page === selectedPage}"
        @click="() => updatePage(page)"
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
  },
  methods: {
    updatePage(page) {
      this.selectedPage = page;
    }
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

.selected {
  border-bottom: 3px maroon solid;
}
</style>
