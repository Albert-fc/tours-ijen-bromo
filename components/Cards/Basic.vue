<template>
  <div>
    <div class="group relative h-52 overflow-hidden rounded-xl">
      <img :src="`${props.imagePath}`" class="absolute object-contain" />
      <div
        class="right-0 top-0 z-20 h-full w-full bg-white opacity-0 transition duration-500 group-hover:flex group-hover:opacity-70"
      ></div>
      <div
        class="absolute left-3 top-3 rounded bg-white px-2 py-1 text-xl text-primary-text opacity-90 transition duration-500 group-hover:bg-transparent"
      >
        <p>{{ props.title }}</p>
        <p
          class="mt-2 hidden text-sm transition duration-500 group-hover:block"
        >
          {{ props.description }}
        </p>
      </div>
    </div>
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
