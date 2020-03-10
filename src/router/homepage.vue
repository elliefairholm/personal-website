<template>
  <homepage-info-tile />
</template>

<script>
// @ is an alias to /src
import homepageInfoTile from "@/components/presentational/homepage-info-tile.vue";

export default {
  name: "homepageInfoTile",
  components: {
    "homepage-info-tile": homepageInfoTile
  }
};
</script>
