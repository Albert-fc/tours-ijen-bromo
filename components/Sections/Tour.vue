<template>
  <div class="mt-12 flow-root">
    <TitlesSectionTitle sectionName="Tour Plan" />
    <ul role="list" class="mt-4">
      <li v-for="(event, eventIdx) in timeline_day1" :key="event.title">
        <div class="relative pb-6">
          <span
            v-if="eventIdx !== timeline_day1.length - 1"
            class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex space-x-3">
            <div>
              <span
                :class="[
                  event.iconBackground,
                  'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                ]"
              >
                {{ event.icon }}
              </span>
            </div>
            <div class="flex min-w-0 flex-1 justify-between space-x-4">
              <div>
                <p class="font-medium">
                  {{ event.title }}
                </p>
                <p>{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { CheckIcon, HandThumbUpIcon, UserIcon } from "@heroicons/vue/20/solid";

const timeline_day1 = [
  {
    title: "Pick Up",
    description:
      "Your journey begins with a pick-up from various Banyuwangi locations - harbor, station, airport, or your hotel at 10:00 am.",
    icon: "🚗",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Waterfall Exploration",
    description: "Embark on an adventure to a mesmerizing waterfall.",
    icon: "💦",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Coffee and Rubber Plantation",
    description:
      "Discover the secrets behind local coffee and rubber production.",
    icon: "🌱",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Ricefield Visit",
    description:
      "Immerse yourself in the picturesque beauty of a traditional rice field.",
    icon: "🌾",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Accommodation",
    description: "Settle into your comfortable local accommodation.",
    icon: "🏠",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Cooking Class",
    description: "Learn the art of crafting local dishes.",
    icon: "👩‍🍳",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Dinner with Locals",
    description: "Share a heartfelt dinner with a local family.",
    icon: "🍽️",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Community Connection:",
    description:
      "Visit the homes of older residents and miners, extending support through donations.",
    icon: "🤝",
    iconBackground: "bg-gray-200",
  },
  {
    title: "Restful Night",
    description: "Embark on an adventure to a mesmerizing waterfall.",
    icon: "🥱",
    iconBackground: "bg-gray-200",
  },
];
</script>
