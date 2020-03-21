<template>
  <div class="file-container">
    <img class="file" :src="require(`@/assets/${path}`)" alt="Ellie Fairholm CV" />
  </div>
</template>

<script>
// import image from "@/assets/cv.svg";

export default {
  name: "file",
  props: {
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.file-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file {
  width: 80%;
  box-shadow: 0px 2px 6px rgba(186, 186, 186, 0.25);
  margin-top: 40px;
}
</style>
