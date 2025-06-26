<script setup lang="ts">
  import eightTurn from '~/assets/images/eightTurn.png'
</script>
<template>
  <ClientOnly>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div data-aos="fade-down-right" class="p-4 w-full lg:w-6/12">
          <img :src="eightTurn" alt="Eight Turn Crepe" />
        </div>
        <div data-aos="fade-down-left" class="mx-auto p-4 w-full lg:w-5/12">
          <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
            Comming Soon!
          </h6>
          <h3 class="capitalize mb-2">
            Welcome to 8Turn Crepe – Now Rolling Fresh in Two Sisters, Tampa!
            🇯🇵✨
          </h3>
          <p class="mb-6">
            Get ready, Tampa! The world-famous Japanese crepe sensation 8Turn
            Crepe has officially arrived in Two Sisters — bringing bold flavor,
            creative flair, and a Tokyo street-food twist to your neighborhood.
          </p>
          <!-- <BaseButton size="xl" to="/articles"> Learn More </BaseButton> -->
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<style scoped></style>
