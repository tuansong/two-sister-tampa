<script setup lang="ts">
  import customeCake from '@/assets/images/customCake.jpg'
  import desertTable from '@/assets/images/desertTable.jpg'
  import weddingCake from '@/assets/images/wedding.jpg'

  const callToActions = [
    {
      img: weddingCake,
      action: 'Custom Cream Cake',
    },
    {
      img: desertTable,
      action: 'Dessert Table',
    },
    {
      img: desertTable,
      action: 'Event Decoration',
    },
  ]
</script>
<template>
  <ClientOnly>
    <section class="container mx-auto px-4 py-12">
      <div data-aos="zoom-in-up">
        <h6
          class="text-primary-600 dark:text-primary-200 text-center uppercase"
        >
          Explore
        </h6>
        <h3 class="capitalize mt-3 text-center">What we are doing</h3>
        <p class="mt-4 text-center">From tiny cake to the big party!</p>
      </div>
      <div
        data-aos="fade-down"
        class="-mx-4 flex flex-wrap justify-center mt-12"
      >
        <CallToActionCard
          v-for="(callToAction, index) in callToActions"
          :key="index"
          :action="callToAction.action"
          :img="callToAction.img"
        />
      </div>
    </section>
  </ClientOnly>
</template>
<style scoped></style>
