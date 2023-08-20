<template>
  <div class="rounded-lg border border-gray-100 bg-white text-center shadow">
    <div class="flex flex-1 flex-col border-b p-7">
      <img
        class="mx-auto h-36 w-36 flex-shrink-0 rounded-full"
        :src="props.imagePath"
        alt=""
      />
      <h3 class="mt-6 text-sm font-medium text-gray-900">{{ props.name }}</h3>
      <dl class="mt-1 flex flex-grow flex-col justify-between">
        <dd class="text-sm text-gray-500">{{ props.title }}</dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <a
            :href="`mailto:${props.email}`"
            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            Email
          </a>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a
            :href="`tel:${props.telephone}`"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <PhoneIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            Call
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
});
</script>
