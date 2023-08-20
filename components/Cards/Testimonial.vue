<template>
  <div class="mx-auto h-full p-3 text-justify">
    <div class="flex items-center justify-between">
      <svg
        class="h-12 pt-1"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="#ffb414"
        />
      </svg>
      <div
        class="flex h-max items-center justify-center space-x-3 align-baseline"
      >
        <img
          class="h-6 w-6 rounded-full"
          :src="props.imagePath"
          alt="profile picture"
        />
        <div
          class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
        >
          <div class="font-medium text-primary-text">
            {{ props.name }}
          </div>
        </div>
      </div>
    </div>
    <p class="text-base text-gray-600">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
