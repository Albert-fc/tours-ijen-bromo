<template>
  <Container>
    <div class="mt-12 flow-root">
      <TitlesPageTitle sectionName="2 Days - 1 Night (2D/1N) Adventure" />
      <div class="mt-4 gap-x-4 md:grid md:grid-cols-2">
        <div v-for="timeline in timelines" :key="timeline.name">
          <TitlesSectionTitle :sectionName="timeline.name" />
          <ul role="list" class="mt-4">
            <li v-for="(event, eventIdx) in timeline.plan" :key="event.title">
              <div class="relative pb-6">
                <span
                  v-if="eventIdx !== timeline.plan.length - 1"
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
                <div class="relative flex space-x-3">
                  <span
                    :class="[
                      event.iconBackground,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                    ]"
                  >
                    {{ event.icon }}
                  </span>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4">
                    <div>
                      <p class="font-medium">
                        {{ event.title }}
                      </p>
                      {{ event.description }}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-4">
        <div>
          <TitlesSectionTitle sectionName="Included in your trip" />
          <div v-for="item in included" :key="item.name" class="mt-4">
            ✅
            <span class="ml-2">
              <span class="font-medium">{{ item.name }}:</span>
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { CheckIcon, HandThumbUpIcon, UserIcon } from "@heroicons/vue/20/solid";

const timelines = [
  {
    name: "Day 1",
    plan: [
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
        icon: "☕️",
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
        description: "Retire for the night in your cozy abode.",
        icon: "🥱",
        iconBackground: "bg-gray-200",
      },
    ],
  },
  {
    name: "Day 2",
    plan: [
      {
        title: "Early Morning Adventure",
        description: "Wake up at 2:30 am for an exciting day.",
        icon: "🌝",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Sunrise Trek",
        description:
          "At 3:00 am, embark on a 1.5-hour drive to the starting point. Begin a trek offering captivating views and a breathtaking sunrise.",
        icon: "🌅",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Lake Vista",
        description:
          "Witness the sunrise over the lake and savor the enchanting scenery.",
        icon: "🌞",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Return Journey",
        description: "Around 7:00-7:30 am, head back to the starting point.",
        icon: "🚶",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Breakfast",
        description: "Enjoy a hearty breakfast featuring local flavors.",
        icon: "🍳",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Goodbye",
        description:
          "Drive back to your choice of Banyuwangi location - harbor, airport, station, or hotel.",
        icon: "🚗",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Tour Conclusion",
        description: "Your enriching tour experience concludes.",
        icon: "👋",
        iconBackground: "bg-gray-200",
      },
    ],
  },
];

const included = [
  {
    name: "Private Transportation",
    description:
      "Enjoy the convenience of a private car for your comfort and ease.",
  },
  {
    name: "Pick-Up and Drop-Off",
    description:
      "Seamless transfers to and from Banyuwangi locations - harbor, airport, station, or hotel",
  },
  {
    name: "Full Petrol",
    description: "Your travel is worry-free with a fully fueled vehicle.",
  },
  {
    name: "Entrance Fees",
    description:
      "All entrance fees are covered, including those for the waterfall and the mesmerizing Kawah Ijen",
  },
  {
    name: "Accommodation",
    description:
      "One night's stay in cozy local accommodation, immersing you in the heart of the culture.",
  },
  {
    name: "Expert Tour Guide",
    description:
      "Your experienced guide will lead you through every step of your journey.",
  },
  {
    name: "Dinner and Breakfast",
    description:
      "Savor local flavors with one dinner and one breakfast included.",
  },
];

const excluded = [
  {
    name: "Insurance",
    description:
      "Please arrange for your own travel insurance to ensure a worry-free trip.",
  },
  {
    name: "Guide and Driver Tips",
    description:
      "While not included, tips for your guide and driver are appreciated for exceptional service.",
  },
];
</script>
