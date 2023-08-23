<template>
  <SectionsBigImage :title="tour.name" :variant="tour.variant" />
  <Container>
    <div class="mt-8 flow-root">
      <TitlesPageTitle :sectionName="tour.description" />
      <div :class="`mt-4 gap-x-4 md:grid md:grid-cols-${tour.timeline.length}`">
        <div v-for="day in tour.timeline" :key="day.name">
          <TitlesSectionTitle :sectionName="day.name" />
          <ul role="list" class="mt-4">
            <li v-for="(event, eventIdx) in day.plan" :key="event.title">
              <div class="relative pb-6">
                <span
                  v-if="eventIdx !== day.plan.length - 1"
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
          <div v-for="item in tour.included" :key="item.name" class="mt-4">
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
import { useRoute } from "vue-router";

const route = useRoute();

import tours from "~/assets/data/tours.json";
const tour = tours.find((tour) => tour.id === route.params.id);
</script>
