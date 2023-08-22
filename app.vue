<template>
  <div class="min-h-screen bg-main-bg">
    <Header />
    <NuxtPage />
    <WAWidget />
    <Footer />
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
export default {
  mixins: [aosMixin],
};
</script>
