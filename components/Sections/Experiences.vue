<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Discover Authentic Indonesia" />
    <p class="mt-2 text-justify text-base md:text-lg">
      Immerse yourself in the heart of Indonesia's culture and breathtaking
      landscapes. Our tours offer more than just travel – they're an opportunity
      to engage with local communities, experience traditions firsthand, and
      make a positive impact.
    </p>
    <div class="mt-8 gap-6 space-y-4 md:grid md:grid-cols-3 md:space-y-0">
      <CardsBasic
        v-for="experience in experiences"
        :key="experience.name"
        :imagePath="experience.imagePath"
        :title="experience.name"
        :description="experience.description"
      />
    </div>
  </div>
</template>

<script setup>
let experiences = [
  {
    name: "Homestay Immersion",
    description:
      "Immerse yourself in the local way of life by staying with welcoming families. Learn traditional cooking, participate in daily activities, and gain an intimate understanding of Indonesian culture.",
    imagePath: "experiences/homestay.jpg",
  },
  {
    name: "Cultural Workshops",
    description:
      "Engage with local artisans and experts in hands-on workshops. Learn age-old techniques and create your own unique crafts while fostering a deeper connection to Indonesian heritage.",
    imagePath: "experiences/rice.jpeg",
  },
  {
    name: "Community Projects",
    description:
      "Leave a lasting impact by participating in community-driven projects. From environmental conservation to education initiatives, your journey supports local development and sustainability.",
    imagePath: "experiences/rice_field.jpeg",
  },
  {
    name: "Culinary Delights",
    description:
      "Embark on a culinary journey through Indonesia's diverse flavors. Taste traditional dishes and learn to cook authentic recipes alongside local chefs.",
    imagePath: "experiences/nasi.jpeg",
  },
];
</script>
