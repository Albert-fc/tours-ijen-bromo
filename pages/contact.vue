<template>
  <SectionsBigImage title="Contact Us" :variant="4" />
  <Container class="md:grid md:grid-cols-2">
    <div class="col-span-1 from-white to-gray-100 md:bg-gradient-to-r">
      <div class="mt-8 pb-6 md:mr-12">
        <TitlesPageTitle sectionName="About Me" />
        <p class="mt-6 text-justify">
          Hi there! I was born right here in the beautiful Bromo region, so you
          can say I know these places like the back of my hand. I learned
          English because I wanted to show folks like you around my home.
        </p>
        <p class="mt-2 text-justify">
          When I'm not guiding, you'll find me on my farm, taking care of the
          land and hanging out with my trusty four-legged friend.
        </p>
        <p class="mt-2 text-justify">
          Join me in discovering the best parts of Bromo - the places I love and
          the stories I know. Let's make memories together!
        </p>
        <div class="mx-auto mt-6 w-3/4">
          <CardsContact
            name="Ahmad Mohamad Hasim"
            title="Manager/Guide"
            imagePath="people/portrait.jpg"
            email="kawahijwn@gmail.com"
            telephone="+6285731378362"
          />
        </div>
      </div>
    </div>
    <div
      class="col-span-1 md:border-l md:pl-5 md:shadow-[rgba(0,0,15,0.05)_-10px_5px_4px_0px]"
    >
      <div class="mt-8 md:ml-8">
        <TitlesPageTitle class="mt-8" sectionName="Excited? Let's Connect!" />
        <p class="mt-6 flex items-center">
          <ChatBubbleLeftRightIcon class="h-6 w-6" />
          <span class="ml-2">Reach out via WhatsApp:</span>

          <a
            href="https://wa.me/6285731378362"
            class="ml-1 font-medium text-contrast-1-dark underline"
            >+6285731378362</a
          >
        </p>
        <p class="mt-3 flex items-center">
          <EnvelopeIcon class="h-6 w-6" />
          <span class="ml-2">Drop us an email:</span>

          <a
            class="ml-1 font-medium text-contrast-1-dark underline"
            href="mailto:kawahijwn@gmail.com"
            >kawahijwn@gmail.com</a
          >
        </p>
        <p class="mt-3 flex items-center">
          Our team is ready to assist you in making unforgettable memories.
        </p>
        <div class="mt-4">
          <img src="~/assets/img/hasym.jpeg" class="w-3/3 rounded" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/vue/20/solid";
</script>
