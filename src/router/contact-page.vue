<template>
  <div class="contact-page">
    <div class="contact-section">
      <contact-intro></contact-intro>
      <contact-form></contact-form>
    </div>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import contactIntro from "@/components/presentational/contact-intro.vue";
import contactForm from "@/components/container/contact-form.vue";
import footer from "@/components/container/footer.vue";

export default {
  name: "contact",
  components: {
    "contact-intro": contactIntro,
    "contact-form": contactForm,
    "my-footer": footer
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
