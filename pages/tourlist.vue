<template>
  <SectionsBigImage title="Our Tours" :variant="1" />
  <Container class="min-h-screen">
    <div class="mt-8">
      <TitlesPageTitle sectionName="Explore Our Diverse Range of Experiences" />
      <p class="mt-4 text-justify text-lg">
        Discover a world of adventures waiting for you! Browse through our
        diverse selection of captivating tours designed to showcase the best of
        Indonesia's natural beauty and rich culture.
      </p>
      <p class="mt-2 text-justify text-lg">
        Whether you're a nature enthusiast, a history buff, or simply seeking
        unforgettable experiences, our range of tours has something for
        everyone. Join us on a journey of exploration and create memories that
        will last a lifetime.
      </p>
      <div class="mt-6 grid-cols-2 gap-6 space-y-6 md:grid md:space-y-0">
        <CardsTour
          v-for="(tour, index) in tours"
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
  </Container>
</template>

<script setup>
import tours from "~/assets/data/tours.json";
</script>
