<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex h-16 justify-between">
        <LogosFullLogo />
        <div class="hidden md:flex md:items-center md:space-x-4">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'font-bold text-contrast-1-dark'
                : 'hover:bg-contrast-1-light text-primary-text ',
              'px-3 py-2 hover:underline',
            ]"
            >{{ item.name }}</a
          >
        </div>
        <div class="-ml-2 mr-2 flex items-center md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="text-contrast-1-light relative inline-flex items-center justify-center rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:border-gray-100 hover:text-white"
          >
            <span class="absolute -inset-0.5" />
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-contrast-1 text-white'
              : 'text-primary-text hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/20/solid";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const path = computed(() => route.path);

const navigation = [
  { name: "Home", href: "/", current: path.value == "/" },
  { name: "Tour Details", href: "/tour", current: path.value == "/tour" },
  { name: "Community", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];
</script>
