<template>
  <div class="typewriter">
    <p>
      Experienced with
      <span class="typed-text">{{ typingValue }}</span>
    </p>
    <div class="cursor">&nbsp;</div>.
  </div>
</template>

<script>
export default {
  name: "typewriter",
  data() {
    return {
      typingValue: "",
      typingStatus: false,
      typingArray: [
        "Node",
        "SQL",
        "MongoDB",
        "Redis",
        "GraphQL",
        "Anuglar",
        "React",
        "Typescript"
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 500,
      typingArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typingArray[this.typingArrayIndex].length) {
        if (!this.typingStatus) this.typingStatus = true;
        this.typingValue += this.typingArray[this.typingArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typingStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typingStatus) this.typingStatus = true;
        this.typingValue = this.typingArray[this.typingArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typingStatus = false;
        this.typingArrayIndex += 1;
        if (this.typingArrayIndex >= this.typingArray.length)
          this.typingArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typewriter {
  display: flex;
  align-items: center;
}

.typed-text {
  color: red;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 1px;
  background-color: black;
  height: 20px;
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
