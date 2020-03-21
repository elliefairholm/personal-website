<template>
  <div class="contact-page">
    <div class="contact-section">
      <page-intro :intro="intro"></page-intro>
      <contact-form></contact-form>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import pageIntro from "@/components/presentational/page-intro.vue";
import contactForm from "@/components/container/contact-form.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "contact",
  components: {
    "page-intro": pageIntro,
    "contact-form": contactForm,
    "my-footer": footer
  },
  data() {
    return {
      intro: `If you have any questions for me, or even just want a chat, please don't hesitate to get in touch :) If you're looking for my
      <a
        class="link"
        href="mailto:elliefairholm@gmail.com"
      >email</a> or
      <a class="link" href="https://www.linkedin.com/in/elliefairholm">linkedin</a>, click here or go to the footer of the page and click the appropriate icon! Alternatively you can write a message using the form below, filling in your details and it'll get it sent to me as an email. Any messages I recieve, I will aim to reply to in less than a week!`
    };
  }
};
</script>

<style scoped>
.contact-page {
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
  margin-bottom: 5%;
}
</style>
