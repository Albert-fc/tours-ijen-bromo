<template>
  <div class="mx-auto max-w-[1300px]">
    <div class="relative mx-auto overflow-hidden shadow-lg md:mt-0">
      <img
        :src="
          {
            1: 'headers/ijen_pano.jpg',
            2: 'headers/ijen_pano_2.jpg',
            3: 'headers/rice.jpg',
            4: 'headers/waterfall.jpg',
          }[props.variant]
        "
        class="max-h-96 w-full object-cover"
      />
      <div
        class="absolute bottom-12 left-1/2 h-full w-full rotate-45 scale-110 bg-white opacity-100"
      ></div>
      <div
        class="absolute bottom-0 left-1/2 h-full w-full -rotate-45 scale-150 bg-contrast-1 opacity-80"
      ></div>
      <div
        class="absolute bottom-6 right-0 bg-white p-2 font-frank text-xl font-medium md:bottom-12 md:p-3 md:text-4xl md:font-normal"
      >
        {{ props.title }}
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
  variant: {
    type: Number,
    required: true,
  },
});
</script>
