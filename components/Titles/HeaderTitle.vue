<template>
  <a :href="hrefs" class="transition">
    <span class="decoration-gray-600 decoration-wavy hover:underline">
      {{ sectionName }}</span
    >
  </a>
</template>

<script setup>
const props = defineProps({
  sectionName: {
    type: String,
    required: true,
  },
  hrefs: {
    type: String,
    required: false,
  },
});
</script>
