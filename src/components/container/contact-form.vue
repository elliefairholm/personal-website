<template>
  <div class="contact-form-container">
    <form class="contact-form" @submit="(event) => submitForm(event)">
      <label>
        Name:
        <span class="required">*</span>
      </label>
      <textarea type="text" placeholder="Please enter your name here..."></textarea>
      <label>
        Email:
        <span class="required">*</span>
      </label>
      <textarea type="text" placeholder="Please enter your email here..."></textarea>
      <label>Phone Number:</label>
      <textarea type="text" placeholder="Please enter your phone number..."></textarea>
      <label>
        Message:
        <span class="required">*</span>
      </label>
      <textarea
        type="text"
        placeholder="Please enter your message here..."
        id="contact-form-message"
      ></textarea>
      <div class="form-footer">
        <p>
          <span class="required">*</span> = Required Fields
        </p>
        <div class="contact-form-buttons-container">
          <cta-button text="Send Message!"></cta-button>
          <cta-button text="Clear Info"></cta-button>
        </div>
      </div>
    </form>
    <div>
      <p class="sent-successfully">Your message has been sent! I will aim to reply within a week :)</p>
    </div>
  </div>
</template>

<script>
import ctaButton from "../presentational/cta-button.vue";
export default {
  name: "contact-form",
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log("i'm submitting the form");
    }
  },
  components: {
    "cta-button": ctaButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-form {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.contact-form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

textarea {
  all: unset;
}

.contact-form > textarea {
  border: 1px lightgray solid;
  padding: 5px;
  margin: 10px 0;
  height: 20px;
  overflow: hidden;
}

#contact-form-message {
  height: 200px;
  text-align: start;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-form-buttons-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.contact-form-buttons {
  border: 2px maroon solid;
  background: maroon;
  color: white;
  width: 110px;
  padding: 5px;
  font-weight: 500;
  margin-left: 5px;
}

.required {
  color: red;
}

.sent-successfully {
  display: none;
}
</style>
