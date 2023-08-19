<template>
  <SectionsBigImage />
  <Container>
    <SectionsIntroduction />
    <SectionsTour />
    <SectionsCommitment />
    <SectionsExperiences />
  </Container>
</template>

<script>
import aosMixin from "~/mixins/aos.js";
export default {
  mixins: [aosMixin],
};
</script>
