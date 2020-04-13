<template>
  <div class="contact-page">
    <h1 class="title font-4-5rem">hi, please do get in touch</h1>
    <div class="contact-section">
      <p
        class="information font-1-5rem"
      >I'd love to have a chat, so please don't hesistate to say hi! Any messages I receive, I'll aim to reply to within a week.</p>
      <div class="contact-info-container">
        <a class="contact-icon" target="_blank" href="mailto:elliefairholm@gmail.com">
          <img class="icon" src="../assets/email-icon.png" alt="Email Icon" />
          <p>elliefairholm@gmail.com</p>
        </a>
        <div class="contact-icon">
          <img class="icon" src="../assets/phone-icon.png" alt="Phone Icon" />
          <p>+447964900622</p>
        </div>
        <a class="contact-icon" target="_blank" href="https://www.linkedin.com/in/elliefairholm">
          <img class="icon" src="../assets/linkedin-logo.jpg" alt="LinkedIn Logo" />
          <p>linkedin.com/in/elliefairholm</p>
        </a>
      </div>
      <div class="get-in-touch-button" @click="toggleForm">
        <cta-button v-if="!showForm" text="Get in touch!"></cta-button>
      </div>
      <contact-form v-if="showForm" :toggleForm="toggleForm"></contact-form>
      <!--<br />
      <br />   
      <p>    
      Alternatively click the button below to write a message to me and I'll aim to reply in less than a week!</p>-->
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ctaButton from "@/components/presentational/cta-button.vue";
import contactForm from "@/components/container/contact-form.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "contact",
  components: {
    "cta-button": ctaButton,
    "contact-form": contactForm,
    "my-footer": footer
  },
  data() {
    return {
      showForm: false
    };
  },
  methods: {
    toggleForm() {
      console.log("difhsdkfjn");
      this.showForm = !this.showForm;
    }
  },
  mounted() {
    this.$emit("set-route", this.$route.path);
  }
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 93vh;
  top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.title {
  color: #05386b;
  margin-bottom: 0;
  text-align: center;
}

.information {
  color: #7395ae;
  text-align: center;
}

.font-4-5rem {
  font-size: 4.5rem;
}

.font-1-5rem {
  font-size: 1.5rem;
}

.contact-section {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10%;
  text-align: center;
}

.contact-info-container {
  max-width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.contact-icon {
  display: flex;
  align-items: center;
}

.icon {
  height: 50px;
  margin: 20px;
}

.get-in-touch-button {
  margin-top: 2.5%;
}
</style>
