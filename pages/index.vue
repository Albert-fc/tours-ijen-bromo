<template>
  <SectionsBigImage title="Ijen Bromo Indonesia Tours" :variant="1" />
  <Container>
    <SectionsIntroduction />
    <SectionsTours />
    <SectionsCommitment />
    <SectionsTestimonials />
    <SectionsExperiences />
  </Container>
</template>

<script>
import aosMixin from "~/mixins/aos.js";
export default {
  mixins: [aosMixin],
};
</script>
