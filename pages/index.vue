<template>
  <SectionsBigImage />
  <Container>
    <SectionsIntroduction />
    <SectionsTour />
    <SectionsExperiences />
  </Container>
</template>

<script>
import aosMixin from "~/mixins/aos.js";
export default {
  mixins: [aosMixin],
};
</script>
