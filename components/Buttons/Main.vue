<template>
  <button
    class="relative rounded border-b-2 border-contrast-1-dark bg-contrast-1 px-3 py-1 text-lg transition duration-300 hover:border-contrast-2-dark hover:bg-contrast-2 hover:text-white md:py-1.5"
  >
    {{ props.buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
