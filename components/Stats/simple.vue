<template>
  <div>
    <div v-for="commitment in commitments" :key="commitment.name"></div>
  </div>
</template>

<script setup>
const commitments = [
  {
    name: "Supporting the Elderly",
    description:
      "Providing essential supplies such as rice, sugar, and noodles to ensure the well-being of our respected elders.",
    imagePath: "commitments/elder.jpeg",
  },
  {
    name: "Nurturing Orphaned Futures",
    description:
      "Providing essential supplies such as rice, sugar, and noodles to ensure the well-being of our respected elders.",
    imagePath: "commitments/elder.jpeg",
  },
  {
    name: "Supporting the Elderly",
    description:
      "Providing essential supplies such as rice, sugar, and noodles to ensure the well-being of our respected elders.",
    imagePath: "commitments/elder.jpeg",
  },
];
</script>
