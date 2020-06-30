<template>
  <div class="contact-form-container">
    <typewriter class="loading" v-if="loading" typingSentence="......" />
    <form
      v-if="!loading && !formSent && !formSendError"
      class="contact-form"
      @submit.prevent="(event) => submitForm(event)"
    >
      <label>
        Name:
        <span class="required">*</span>
      </label>
      <textarea
        type="text"
        placeholder="Please enter your name here..."
        v-model="$v.name.$model"
        class="form-input"
        :class="{ 'textarea-error': $v.name.$error }"
      ></textarea>
      <p class="error" v-if="$v.name.$error">Please enter your name.</p>
      <label>
        Email:
        <span class="required">*</span>
      </label>
      <textarea
        type="text"
        placeholder="Please enter your email here..."
        v-model="$v.emailAddress.$model"
        class="form-input"
        :class="{ 'textarea-error' : $v.emailAddress.$error }"
      ></textarea>
      <p class="error" v-if="$v.emailAddress.$error">Please enter a valid email address.</p>
      <label>Phone Number:</label>
      <textarea
        type="text"
        placeholder="Please enter your phone number..."
        v-model="number"
        class="form-input"
      ></textarea>
      <label>
        Message:
        <span class="required">*</span>
      </label>
      <textarea
        type="text"
        placeholder="Please enter your message here..."
        id="contact-form-message"
        v-model="$v.message.$model"
        class="form-input"
        :class="{ 'textarea-error' : $v.message.$error }"
      ></textarea>
      <p class="error" v-if="$v.message.$error">Please write a message.</p>
      <div class="form-footer">
        <p>
          <span class="required">*</span> = Required Fields
        </p>
        <div class="contact-form-button-container">
          <cta-button text="Send!"></cta-button>
        </div>
      </div>
    </form>
    <div v-else-if="formSent && !loading && !formSendError" class="submit-message font-1-5rem">
      <p>Thank you for getting in touch, your message has been sent!</p>
    </div>
    <div v-if="formSendError" class="submit-message font-1-5rem">
      <p>Your message could not be sent at this moment. Please refresh and try again</p>
    </div>
  </div>
</template>

<script>
const { required, email } = require("vuelidate/lib/validators");
import typewriter from "@/components/container/typewriter.vue";
import ctaButton from "../presentational/cta-button.vue";
import ApiClient from "../../services/";

export default {
  name: "contact-form",
  data() {
    return {
      formSent: false,
      loading: false,
      formSendError: false,
      name: "",
      emailAddress: "",
      number: "",
      message: ""
    };
  },
  validations: {
    name: {
      required
    },
    emailAddress: {
      required,
      email
    },
    message: {
      required
    }
  },
  methods: {
    async submitForm() {
      this.$v.$touch();
      this.loading = true;
      if (
        this.$v.name.$error ||
        this.$v.emailAddress.$error ||
        this.$v.message.$error
      ) {
        return;
      } else {
        const data = {
          name: this.name,
          emailAddress: this.emailAddress,
          message: this.message
        };
        if (this.number) data.number = this.number;
        ApiClient.sendEmail(data).then(res => {
          this.loading = false;
          if (res.success) this.formSent = true;
          else this.formSendError = true;
        });
      }
    }
  },
  components: {
    "cta-button": ctaButton,
    typewriter: typewriter
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

.form-input {
  border: 1px lightgray solid;
  padding: 5px;
  padding-left: 10px;
  margin: 10px 0;
  height: 20px;
  overflow: hidden;
}

#contact-form-message {
  height: 200px;
  text-align: start;
  overflow-y: scroll;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-form-button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-left: 20px;
  height: 150px;
  width: 510px;
}

.contact-form-button {
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

.cancel-button {
  color: red;
  align-self: flex-end;
  font-weight: 500;
}

.font-1-5rem {
  font-size: 1.5rem;
}

.submit-message {
  color: #ff8f00;
}

.textarea-error {
  border: 1px red solid;
}

.error {
  color: red;
  margin-top: 0;
}

.loading {
  font-size: 32px;
}
</style>
