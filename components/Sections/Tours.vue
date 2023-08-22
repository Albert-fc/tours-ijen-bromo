<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Our Tours: Choose Your Adventure" />
    <p class="mt-4 text-justify text-lg">
      Discover the heart of Indonesia with our meticulously crafted tours, each
      designed to offer a unique blend of cultural immersion, breathtaking
      landscapes, and authentic experiences. Whether you're seeking a compact
      yet enriching
      <a href="/tour1" class="font-medium text-contrast-1-dark underline"
        >2 Days/1 Night</a
      >
      escape or a more comprehensive
      <a href="/tour2" class="font-medium text-contrast-1-dark underline"
        >3 Days/2 Nights</a
      >
      expedition, our tours promise to unveil the beauty and soul of Indonesia
      in unforgettable ways.
    </p>
    <div class="mt-6 grid-cols-2 gap-6 space-y-6 md:grid md:space-y-0">
      <CardsTour
        v-for="(tour, index) in tours"
        data-aos="flip-down"
        :data-aos-delay="!isMobile() && 100 * index"
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
function isMobile() {
  if (screen.width <= 760) {
    return true;
  } else {
    return false;
  }
}

const tours = [
  {
    name: "2 Days / 1 Night Adventure",
    description:
      "Dive into local culture, stunning landscapes, and genuine connections. From waterfalls to sunrise treks and heartfelt local experiences, our carefully curated tour elevates your journey beyond imagination.",
    href: "/tour1",
    path: ["Banyuwangi", "Bromo", "Banyuwangi/Bali"],
    imagePath: "tours/team.jpg",
  },
  {
    name: "3 Days / 2 Nights Adventure",
    description:
      "Embark on a captivating 3-day, 2-night adventure, immersing yourself in Indonesia's allure. Journey from Surabaya to Madakalipura Waterfall, Bromo, and Ijen, discovering breathtaking landscapes, embracing local culture, and crafting enduring memories.",
    href: "/tour2",
    path: ["Surabaya", "Bromo", "Ijen", "Banyuwangi/Bali"],
    imagePath: "tours/ijen.jpg",
  },
];
</script>
