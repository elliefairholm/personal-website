<template>
  <div class="homepage">
    <homepage-info-tile />
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import homepageInfoTile from "@/components/presentational/homepage-info-tile.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "home",
  components: {
    "homepage-info-tile": homepageInfoTile,
    "my-footer": footer
  }
};
</script>

<style scoped>
.homepage {
  width: 100%;
  position: relative;
  top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>