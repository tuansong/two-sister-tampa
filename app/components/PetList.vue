<script setup lang="ts">
const { allCakes: pets } = await useCakes()
</script>
<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 justify-center">
        <PetCard v-for="(pet, index) in pets" v-bind="pet" :key="index" class />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
