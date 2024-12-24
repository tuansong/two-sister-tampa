<script setup lang="ts">
const { someCakes: pets } = await useCakes()
</script>
<template>
  <div class="bg-primary-100 dark:bg-teal-950">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div data-aos="zoom-in-up" class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4">
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Find your love~
            </h6>
            <h3 class="capitalize">Small Bite For A Big Heart</h3>
            <p class="mb-4">
              How do you feel today? Tell us, we will find thing to fill your soul
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/cakes" color="secondary"><span>Catch Them All ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <CakeCard v-for="(pet, index) in pets" :key="index" data-aos="fade-down" v-bind="pet" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
