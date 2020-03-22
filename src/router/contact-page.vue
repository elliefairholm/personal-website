<template>
  <div class="contact-page">
    <div class="contact-section">
      <div class="contact-info">
        <p>
          Thanks for wanting to get in touch with me! The best ways to do so are to either via:
          <br />
          <br />
        </p>
        <div class="contact-icons">
          <a target="_blank" href="mailto:elliefairholm@gmail.com">
            <img class="icon" src="../assets/email-icon.png" alt="Email Icon" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/elliefairholm">
            <img class="icon" src="../assets/linkedin-logo.jpg" alt="LinkedIn Logo" />
          </a>
        </div>
        <!--<br />
      <br />   
      <p>    
        Alternatively click the button below to write a message to me and I'll aim to reply in less than a week!</p>-->

        <!-- <page-intro :intro="intro"></page-intro> -->
        <!-- <cta-button text="Message Me"></cta-button> -->
      </div>
      <div class="contact-image-container">
        <img class="contact-image" src="../assets/typewriter-pink.jpg" />
      </div>
      <!-- <contact-form></contact-form> -->
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import ctaButton from "@/components/presentational/cta-button.vue";
// import contactForm from "@/components/container/contact-form.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "contact",
  components: {
    // "cta-button": ctaButton,
    // "contact-form": contactForm,
    "my-footer": footer
  }
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 180px;
}

.contact-section {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 65vh;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10%;
  text-align: center;
}

.contact-icons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.contact-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  width: 100%;
}

.icon {
  height: 50px;
}

@media screen and (max-width: 750px) {
  .contact-section {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end; /* grid-template-columns: 1fr 1fr; */
    /* grid-template-rows: 1fr; */
    /* height: 65vh; */
  }
}
</style>
