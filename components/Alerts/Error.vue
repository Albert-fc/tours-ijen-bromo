<template>
  <div v-if="showError" class="w-1/3 rounded-md bg-red-100 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-red-800">
          <slot />
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            @click="$emit('update:showError', false)"
            class="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50 hover:bg-red-100"
          >
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon, XMarkIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  showError: {
    type: Boolean,
    required: true,
  },
});
</script>
