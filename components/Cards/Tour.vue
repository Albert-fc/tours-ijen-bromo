<template>
  <a :href="props.href">
    <div
      class="group relative h-64 overflow-hidden rounded-xl transition duration-300 hover:scale-105"
    >
      <img :src="`${props.imagePath}`" class="absolute object-contain" />
      <div
        class="right-0 top-0 z-20 h-full w-full bg-white opacity-70 transition duration-500"
      ></div>
      <div
        class="absolute left-3 top-3 rounded px-2 py-1 text-xl text-primary-text opacity-100 transition duration-500"
      >
        <p>{{ props.title }}</p>
        <div class="mt-0.5 flex w-max rounded text-sm text-gray-500 opacity-90">
          <span v-for="(path, index) in props.path" :key="index">
            {{ path }}
            <div
              v-if="index < props.path.length - 1"
              class="mx-1 inline-flex w-4 -translate-y-1 overflow-hidden border-b border-primary-text"
            ></div>
          </span>
        </div>
        <p class="mt-3 text-base transition duration-500">
          {{ props.description }}
        </p>
      </div>
    </div>
  </a>
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
  href: {
    type: String,
    required: true,
  },
  path: {
    type: Array,
    required: true,
  },
});
</script>
