<template>
  <p class="typewriter">
    <span>{{ typingValue }}</span>
  </p>
</template>

<script>
export default {
  name: "typewriter",
  props: {
    typingSentence: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      typingValue: "",
      typingSpeed: 75,
      erasingSpeed: 75,
      newTextDelay: 2000,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typingSentence.length) {
        this.typingValue += this.typingSentence.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      // if (this.charIndex > 0) {
      //   this.typingValue = this.typingSentence.substring(0, this.charIndex - 1);
      //   this.charIndex -= 1;
      //   setTimeout(this.eraseText, this.erasingSpeed);
      // } else {
      //   setTimeout(this.typeText, this.typingSpeed + 1000);
      // }
      this.typingValue = "";
      this.charIndex = 0;
      setTimeout(this.typeText, this.typingSpeed);
    }
  },
  created() {
    this.typeText();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typewriter {
  display: flex;
  align-items: center;
  min-height: 162px;
  color: #7395ae;
}
</style>
