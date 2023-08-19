<template>
  <div class="w-20 border-t-4 border-contrast-1"></div>
  <p class="mt-3 font-frank text-4xl text-contrast-2-dark">
    {{ props.sectionName }}
  </p>
</template>

<script setup>
const props = defineProps({
  sectionName: {
    type: String,
    required: true,
  },
});
</script>
