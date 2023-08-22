<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Empowering Communities" />
    <p class="mt-4 text-justify md:text-lg">
      At our core, we believe in travel that transcends mere sightseeing. Our
      tour is more than an adventure - it's an opportunity to make a tangible
      difference in the lives of the local community.
    </p>
    <div
      class="mt-3 grid-cols-3 md:grid md:space-x-3"
      :class="`grid-cols-${commitments.length}`"
    >
      <div
        v-for="commitment in commitments"
        :key="commitment.name"
        class="mt-3 rounded border-l-4 bg-gray-200 p-4 md:mt-0"
        :class="commitment.color"
        data-aos="zoom-in"
      >
        <div class="flex w-full items-center justify-between">
          <p class="text-lg font-bold text-contrast-2-dark">
            {{ commitment.name }}
          </p>
          <font-awesome-icon class="text-2xl" :icon="commitment.icon" />
        </div>
        <p class="mt-4 text-justify text-sm md:text-base">
          {{ commitment.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const commitments = [
  {
    name: "Supporting the Elderly",
    color: "border-contrast-1",
    description:
      "Providing essential supplies such as rice, sugar, and noodles to ensure the well-being of our respected elders.",
    icon: ["fas", "person-cane"],
  },
  {
    name: "Fostering Futures",
    color: "border-contrast-1",
    description:
      " Empowering orphans with the tools they need, from purchasing shoes to covering school expenses, so they can chase their dreams with confidence.",
    icon: ["fas", "handshake-angle"],
  },
  {
    name: "Creating Opportunities",
    color: "border-contrast-1",
    description:
      "Offering jobs to young people in the community, fostering growth as drivers or guides, and helping tackle the challenging issue of limited employment opportunities.",
    icon: ["fas", "suitcase"],
  },
];
</script>
