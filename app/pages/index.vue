<script setup lang="ts">
import { heroImageUrl } from '@/utils/hero'

definePageMeta({
  // layout: 'default',
  // name: 'index',
  // alias: 'index',
  title: 'Home',
  description: 'Thousands of lovely cakes, one bite of heavenly!',
  navOrder: 1,
  type: 'primary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const { optimizeImage } = useOptimizeImage()
const heroImageOptimized = {
  alt: `hero`,
  cover: true,
  ...optimizeImage(
    heroImageUrl,
    /* options */
    {
      /* If using local images instead of unsplash url, enable netlify provider */
      // provider:
      //     process.env.NODE_ENV === 'production'
      //       ? 'netlify'
      //       : null /* defaults to ipx or ipxStatic */,
      placeholder: false, // placeholder image before the actual image is fully loaded.
    },
    true /* return bgStyles */,
  ),
}

const heroImage = heroImageOptimized.src
const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <div>
    <HeroSection />
    <CallToAction />
    <MiniDivider />
    <OurMission />
    <PetListLite />
    <StatsSection />
    <OrderForm />
  </div>
</template>
<style scoped></style>
