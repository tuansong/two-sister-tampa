<script setup>
definePageMeta({
  // layout: 'default',
  // name: 'blog',
  // alias: 'blog',
  title: 'Order Now',
  description: 'Adopt Your Fur Mate!',
  navOrder: 2,
  type: 'primary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <div class="py-12 bg-primary-100 dark:bg-teal-950 text-primary-900 dark:text-primary-100">
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h6 class="uppercase">Find your love~</h6>
        <h3 class="capitalize">Small Bite For A Big Heart</h3>
        <p class="mb-4">
          How do you feel today? Tell us, we will find thing to fill your soul
        </p>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <PetList />
      </div>
    </div>
  </div>
</template>
