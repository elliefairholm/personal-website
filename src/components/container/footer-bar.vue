<template>
  <div class="footer">
    <div class="logo-links">
      <a target="_blank" href="mailto:elliefairholm@gmail.com">
        <img class="icon" src="../../assets/email-icon.png" alt="Email Icon" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/elliefairholm">
        <img class="icon" src="../../assets/linkedin-logo.jpg" alt="LinkedIn Logo" />
      </a>
      <a target="_blank" href="https://github.com/elliefairholm">
        <img class="icon" src="../../assets/github-logo.svg" alt="Github Logo" />
      </a>
      <a target="_blank" href="https://www.instagram.com/elliefairholm">
        <img class="icon" src="../../assets/instagram-logo.png" alt="Instagram Logo" />
      </a>
    </div>
    <div class="copyright">Copyright © 2020.</div>
  </div>
</template>

<script>
export default {
  name: "footer-bar",
  data() {
    return {
      profilePicture: "../../assets/me.jpeg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-bottom: 1%;
}

.icon {
  height: 25px;
}

.logo-links {
  display: flex;
  align-items: center;
}

.logo-links > * {
  margin: 5px;
}

.copyright {
  text-align: center;
}
</style>
