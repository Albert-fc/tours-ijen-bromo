<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Our Tours: Choose Your Adventure" />
    <p class="mt-4 text-justify text-lg">
      Discover the heart of Indonesia with our meticulously crafted tours, each
      designed to offer a unique blend of cultural immersion, breathtaking
      landscapes, and authentic experiences. Whether you're seeking a compact
      yet enriching
      <a href="/tours/bi2d1n" class="font-medium text-contrast-1-dark underline"
        >2 Days/1 Night</a
      >
      escape or a more comprehensive
      <a href="/tours/bi3d2n" class="font-medium text-contrast-1-dark underline"
        >3 Days/2 Nights</a
      >
      expedition, our tours promise to unveil the beauty and soul of Indonesia
      in unforgettable ways.
    </p>
    <div class="mt-6 grid-cols-2 gap-6 space-y-6 md:grid md:space-y-0">
      <CardsTour
        v-for="(tour, index) in featuredTours"
        data-aos="flip-down"
        :data-aos-delay="100 * index"
        :key="index"
        :title="tour.name"
        :href="`/tours/${tour.id}`"
        :path="tour.path"
        :description="tour.description"
        :imagePath="tour.imagePath"
      />
    </div>
  </div>
  <div class="mt-10">
    <ButtonsRef href="/tourlist" buttonText="Discover More Tours!" />
  </div>
</template>

<script setup>
import tours from "~/assets/data/tours.json";

const featuredTours = tours.filter((obj) => obj.featured === true);
</script>
