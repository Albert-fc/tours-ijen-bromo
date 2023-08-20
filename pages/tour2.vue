<template>
  <SectionsBigImage title="Bromo Ijen Expedition: 3D/2N" :variant="3" />
  <Container>
    <div class="mt-12 flow-root">
      <TitlesPageTitle sectionName="3 Days - 2 Nights (3D/2N) Adventure" />
      <div class="mt-4 gap-x-4 md:grid md:grid-cols-3">
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
            <span v-if="item.included">✅</span>
            <span v-else>❌</span>
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
        title: "Pick-Up at Surabaya Train Station",
        description:
          "Your journey begins with a warm welcome at Surabaya's train station between 9:00 and 10:00 a.m.",
        icon: "🚗",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Drive to Cemoro Lawang",
        description:
          "Embark on a scenic 4-5 hour drive to the charming village of Cemoro Lawang, the final settlement.",
        icon: "🌿",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Village Exploration",
        description:
          "If time permits, take a leisurely stroll around the village, immersing yourself in its local charm.",
        icon: "🚶",
        iconBackground: "bg-gray-200",
      },
    ],
  },
  {
    name: "Day 2",
    plan: [
      {
        title: "Early Morning Adventure",
        description: "Wake up at 2:30 am to kickstart your day.",
        icon: "🌝",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Sunrise Jeep Ride",
        description:
          "Set out on a thrilling Jeep ride to the sunrise point from 3-4 am.",
        icon: "🚙",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Sunrise Spectacle",
        description:
          "Between 4-6 am, immerse yourself in the captivating sunrise and panoramic vistas.",
        icon: "🌞",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Bromo Exploration",
        description:
          "By 6 am, return to the Jeep and journey to the sea sand, walking to the iconic Mount Bromo.",
        icon: "🌋",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Hotel Return and Breakfast",
        description:
          "By 8 am, return to your hotel for a comforting breakfast.",
        icon: "🍳",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Drive to Banyuwangi",
        description:
          "Depart between 9-9:30 am, beginning a 7-8 hour journey to Banyuwangi's guest house or miner village.",
        icon: "🚗",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Culinary Adventure",
        description:
          "Engage in a delightful cooking class followed by dinner at the guest house.",
        icon: "🍲",
        iconBackground: "bg-gray-200",
      },
    ],
  },
  {
    name: "Day 3",
    plan: [
      {
        title: "Early Rise",
        description: "Begin your day with a 2 am wake-up call",
        icon: "🌝",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Journey to Mount Ijen",
        description:
          "Set off at 2:30 am for a one-hour drive to the captivating Mount Ijen.",
        icon: "🚙",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Ijen Trek",
        description:
          "Start your trek at 4 am, covering around 3.4 km in 1.5-2 hours.",
        icon: "🚶",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Enchanting Ijen Crater",
        description:
          "Witness the enchanting Ijen Crater and its ethereal blue flames until 7:30 am.",
        icon: "🌋",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Morning Retreat and Breakfast",
        description:
          "Return to the village, enjoy breakfast, and relish in the serene morning atmosphere.",
        icon: "🍳",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Cultural Exploration",
        description:
          "Embark on an immersive journey through a coffee plantation, rice fields, and a picturesque waterfall.",
        icon: "🌿",
        iconBackground: "bg-gray-200",
      },
      {
        title: "Farewell to Banyuwangi",
        description:
          "Conclude your adventure with a journey to the ferryport as your tour comes to an end.",
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
    included: true,
  },
  {
    name: "Pick-Up and Drop-Off",
    description:
      "Seamless transfers to and from Banyuwangi locations - harbor, airport, station, or hotel",
    included: true,
  },
  {
    name: "Full Petrol",
    description: "Your travel is worry-free with a fully fueled vehicle.",
    included: true,
  },
  {
    name: "Entrance Fees",
    description:
      "All entrance fees are covered, including those for the waterfall and the mesmerizing Kawah Ijen",
    included: true,
  },
  {
    name: "Accommodation",
    description:
      "One night's stay in cozy local accommodation, immersing you in the heart of the culture.",
    included: true,
  },
  {
    name: "Expert Tour Guide",
    description:
      "Your experienced guide will lead you through every step of your journey.",
    included: true,
  },
  {
    name: "Dinner and Breakfast",
    description:
      "Savor local flavors with one dinner and one breakfast included.",
    included: true,
  },
  {
    name: "Dinner and Breakfast",
    description:
      "Savor local flavors with one dinner and one breakfast included.",
    included: true,
  },
  {
    name: "Insurance",
    description:
      "Please arrange for your own travel insurance to ensure a worry-free trip.",
    included: false,
  },
];
</script>
