<template>
  <button class="cta-button">{{ text }}</button>
</template>

<script>
export default {
  name: "cta-button",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cta-button {
  border: 2px maroon solid;
  background: maroon;
  color: white;
  width: 110px;
  padding: 5px;
  font-weight: 500;
  margin-left: 5px;
}
</style>
