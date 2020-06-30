<template>
  <div class="cta-button">
    <button class="button">{{ text }}</button>
    <img class="robot" :src="require('../../assets/robot-arms-extended.png')" alt="walle robot" />
  </div>
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
  position: relative;
}

.button {
  all: unset;
  position: absolute;
  background: #ffc64b;
  color: white;
  width: 110px;
  padding: 5px;
  font-weight: 500;
  margin-left: 5px;
  text-align: center;
  border-radius: 5px;
  margin-top: 38px;
}

.button:hover {
  background: #fab319;
}

.robot {
  height: 150px;
  width: 150px;
  margin-left: 80px;
}
</style>
