<script setup lang="ts">
import type { Cake } from '~~/types/cakes'
const { name, image } = defineProps<Cake>()
</script>
<template>
  <div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
    <div
      class="m-3 text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 px-6 py-12 rounded-3xl shadow-xl text-center">
      <!-- <img
        class="mb-4 mx-auto rounded-xl w-full sm:w-9/12"
        :alt="name"
        :src="image"
      /> -->
      <NuxtImg class="mb-4 mx-auto rounded-xl w-full sm:w-9/12" :alt="name" :src="image" />
      <!-- <NuxtPicture
        class="[&>img]:mb-4 [&>img]:mx-auto [&>img]:rounded-xl [&>img]:w-full [&>img]:sm:w-9/12"
        :alt="name"
        :src="image"
      /> -->
      <h5 class="font-bold mb-2">{{ name }}</h5>
      <!-- <p class="mb-6 text-secondary-600 dark:text-secondary-200 text-sm">
      {{ type }}
    </p> -->
      <BaseButton size="lg"><span>Order Now</span>
        <BaseIcon name="i-ri-heart-add-fill" height="20px" class="!text-tertiary-600 md:ml-1.5" />
      </BaseButton>
    </div>
  </div>
</template>
<style scoped></style>
