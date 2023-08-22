<template>
  <div class="mt-12">
    <TitlesSectionTitle sectionName="Hear From Those Who Explored With Us" />
    <p class="mt-2 text-base md:text-lg">
      Discover what fellow adventurers have to say about their extraordinary
      journeys with our guide.
      <span class="hidden md:inline-flex">
        From heartwarming experiences to breathtaking landscapes, their
        testimonials paint a vivid picture of the unforgettable moments that
        await you. Join us and become part of the story!
      </span>
    </p>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{
          'hidden md:block': !readMore && index >= limit,
        }"
      >
        <CardsTestimonial
          data-aos="fade-right"
          :data-aos-delay="!isMobile() && 100 * index"
          :name="testimonial.name"
          :description="testimonial.description"
          :imagePath="testimonial.imagePath"
        />
      </div>
    </div>
    <ButtonsMain
      v-if="!readMore"
      class="ml-2.5 mt-2 md:hidden"
      buttonText="Read More Testimonials"
      @click="readMore = true"
    />
  </div>
</template>

<script setup>
let limit = 3;
let readMore = ref(false);
function isMobile() {
  if (screen.width <= 760) {
    return true;
  } else {
    return false;
  }
}

const testimonials = [
  {
    name: "Enric A.",
    description:
      "Our Bromo adventure was beyond amazing, all thanks to our fantastic guide! He made us feel like locals and showed us the most stunning spots. His stories added a personal touch that made the experience unforgettable.",
    imagePath: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Guillermo M.",
    description:
      "Ijen was a dream come true, and our guide made it even better. From the sunrise trek to the blue flames at the crater, his knowledge and enthusiasm were top-notch. He's not just a guide; he's a friend you want on your journey.",
    imagePath: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Viktor dB.",
    description:
      "Our family had a blast exploring Bromo with our guide. He made everything easy, from arranging transport to keeping the kids engaged. His farm visit was a hit, and our kids loved meeting his adorable wide-eyed friend.",
    imagePath: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Willy Tyet",
    description:
      "I wanted to experience the real Indonesia, and our guide delivered that and more. His local insights, warmth, and storytelling made every moment special. The sunrise over Bromo is something I'll never forget. Highly recommended!",
    imagePath: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Jander B.",
    description:
      "His English was as good as his enthusiasm for the area. From sunrise hikes that felt like dreams to sipping coffee on his farm, it was an adventure that even words struggle to capture. Thanks for making my Indonesian journey one for the books!",
    imagePath: "https://i.pravatar.cc/150?img=12",
  },
];
const updateLimit = async () => {
  limit = 5;
};
</script>
