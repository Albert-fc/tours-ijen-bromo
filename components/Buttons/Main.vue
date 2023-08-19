<template>
  <a :href="href" :target="target">
    <button
      class="rounded-xl bg-yellowy-gray px-3 py-1.5 text-white transition duration-200 hover:bg-dark-yellowy-gray"
    >
      <slot />
    </button>
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: false,
  },
});
</script>
