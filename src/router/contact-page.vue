<template>
  <div class="contact-page">
    <contact-intro></contact-intro>
    <contact-form></contact-form>
  </div>
</template>

<script>
// @ is an alias to /src
import contactIntro from "@/components/presentational/contact-intro.vue";
import contactForm from "@/components/container/contact-form.vue";

export default {
  name: "contact",
  components: {
    "contact-intro": contactIntro,
    "contact-form": contactForm
  }
};
</script>

<style scoped>
.contact-page {
  width: 80%;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
