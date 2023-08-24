<template>
  <div class="group relative">
    <div
      class="absolute left-0 top-0 h-full w-full -translate-x-2 translate-y-2 rounded-xl border-2 border-contrast-1 transition duration-300 group-hover:-translate-x-3 group-hover:translate-y-3"
    ></div>
    <a :href="props.href">
      <div
        class="group relative h-52 overflow-hidden rounded-xl transition duration-300 md:h-64"
      >
        <img :src="`${props.imagePath}`" class="absolute object-contain" />
        <div
          class="right-0 top-0 z-20 h-full w-full bg-white opacity-70 transition duration-500"
        ></div>
        <div
          class="absolute left-3 top-3 rounded px-2 py-1 text-xl text-primary-text opacity-100 transition duration-500"
        >
          <p>{{ props.title }}</p>
          <div
            class="mt-0.5 flex flex-nowrap rounded text-sm text-gray-500 opacity-90"
          >
            <span
              v-for="(path, index) in props.path"
              :key="index"
              class="flex flex-nowrap items-center"
            >
              {{ path }}
              <span v-if="index < props.path.length - 1" class="mx-1"> - </span>
            </span>
          </div>
          <p class="mt-3 text-sm transition duration-500">
            {{ props.description }}
          </p>
        </div>
      </div>
    </a>
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
