<template>
  <contact-form></contact-form>
</template>

<script>
// @ is an alias to /src
import contactForm from "@/components/container/contact-form.vue";

export default {
  name: "contactForm",
  components: {
    "contact-form": contactForm
  }
};
</script>