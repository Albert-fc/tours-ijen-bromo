<template>
  <div v-if="showProcessing" class="w-1/3 rounded-md bg-indigo-100 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <CubeIcon class="h-5 w-5 text-indigo-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-indigo-800">
          <slot />
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            @click="$emit('update:showProcessing', false)"
            class="inline-flex rounded-md bg-indigo-50 p-1.5 text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-50 hover:bg-indigo-100"
          >
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CubeIcon, XMarkIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  showProcessing: {
    type: Boolean,
    required: true,
  },
});
</script>
