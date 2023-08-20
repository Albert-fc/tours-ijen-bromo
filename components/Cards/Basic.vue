<template>
  <div class="group relative overflow-hidden rounded-xl border p-4">
    <div
      class="absolute top-0 h-36 w-full -translate-y-12 translate-x-16 rotate-45 scale-150 bg-contrast-1 opacity-40 transition duration-500 group-hover:rotate-12"
    ></div>
    <div
      class="absolute top-0 h-full w-24 -translate-y-12 translate-x-10 rotate-12 scale-150 bg-contrast-2 opacity-10 transition duration-500 group-hover:rotate-6"
    ></div>
    <div class="group relative h-44 overflow-hidden rounded-xl">
      <img :src="`${props.imagePath}`" class="absolute object-contain" />
    </div>
    <p class="font-mediun mt-4 text-xl">
      {{ props.title }}
    </p>
    <p class="mt-4 pr-4 text-justify text-sm text-gray-500">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});
</script>
