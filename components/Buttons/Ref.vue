<template>
  <a
    class="relative rounded border-b-2 border-contrast-1-dark bg-contrast-1 px-3 py-1.5 text-xl transition duration-300 hover:border-contrast-2-dark hover:bg-contrast-2 hover:text-white md:text-xl"
    :href="props.href"
  >
    {{ props.buttonText }}
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
