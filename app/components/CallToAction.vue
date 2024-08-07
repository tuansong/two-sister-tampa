<script setup lang="ts">
const callToActions = [
  {
    img: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwfHxkb2clMjBob3VzZXxlbnwwfHx8fDE2MzA0NjM2Mzg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
    action: 'Dessert'
  },
  {
    img: 'https://images.unsplash.com/photo-1627239760089-9b3a54d800aa?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkzfHxmZWVkJTIwaGFtc3RlcnxlbnwwfHx8fDE2MzA0NjQ1Mzc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
    action: 'Dessert Table'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1664790560098-1fac17eb495e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDR8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
    action: 'Planning Event'
  },
]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div data-aos="zoom-in-up">
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Explore
      </h6>
      <h3 class="capitalize mt-3 text-center">
        What we are doing
      </h3>
      <p class="mt-4 text-center">
        From tiny cake to the big party!
      </p>
    </div>
    <div data-aos="fade-down" class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard v-for="(callToAction, index) in callToActions" :key="index" :action="callToAction.action"
        :img="callToAction.img" :to="callToAction.to" />
    </div>
  </section>
</template>
<style scoped></style>
