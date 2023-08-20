<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Our Tours: Choose Your Adventure" />
    <p class="mt-4 text-justify text-lg">
      Discover the heart of Indonesia with our meticulously crafted tours, each
      designed to offer a unique blend of cultural immersion, breathtaking
      landscapes, and authentic experiences. Whether you're seeking a compact
      yet enriching
      <a href="/tour1" class="font-medium text-contrast-1-dark underline"
        >2 Days / 1 Night</a
      >
      escape or a more comprehensive
      <a href="/tour2" class="font-medium text-contrast-1-dark underline"
        >3 Days / 2 Nights</a
      >
      expedition, our tours promise to unveil the beauty and soul of Indonesia
      in unforgettable ways.
    </p>
    <div class="mt-6 grid-cols-2 gap-6 md:grid">
      <CardsTour
        v-for="(tour, index) in tours"
        :key="index"
        :title="tour.name"
        :href="tour.href"
        :path="tour.path"
        :description="tour.description"
        :imagePath="tour.imagePath"
      />
    </div>
  </div>
</template>

<script setup>
const tours = [
  {
    name: "2 Days / 1 Night Adventure",
    description:
      "Immerse yourself in local culture, explore breathtaking landscapes, and connect with communities on an intimate level. From cascading waterfalls to sunrise treks and heartwarming interactions with locals, this meticulously crafted tour promises to enrich your travel experience in ways you've never imagined.",
    href: "/tour1",
    path: ["Banyuwangi", "Bromo", "Banyuwangi (Ferry to Bali)"],
    imagePath: "tours/team.jpg",
  },
  {
    name: "3 Days / 2 Nights Adventure",
    description:
      "Delve into the heart of Indonesia's allure with our captivating 3-day, 2-night adventure. Traverse from Surabaya to Madakalipura Waterfall, Bromo, and Ijen as you explore breathtaking landscapes, engage with local culture, and forge unforgettable memories.",
    href: "/tour2",
    path: ["Surabaya", "Bromo", "Ijen", "Banyuwangi (Ferry to Bali)"],
    imagePath: "tours/ijen.jpg",
  },
];
</script>
