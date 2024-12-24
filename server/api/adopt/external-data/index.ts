import type { Cakes } from '~~/types/cakes'

let allCakes: Cakes
let someCakes: Cakes

const apiBaseUrl =
  'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss'

const fractionOfTheCakesArray = (cakes, fraction) => {
  return cakes
    .map((cake) => ({
      ...cake,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(cakes.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  // If pets exists, don't refetch them
  // Remove this if we want to always fetch refresh data from the source

  if (allCakes) {
    return {
      allCakes,
      someCakes,
    }
  }

  allCakes = await $fetch(`${apiBaseUrl}/cakes`)

  if (!allCakes) {
    throw createError({
      statusCode: 404,
      message: 'Cake profiles not fetched.',
    })
  }

  someCakes = fractionOfTheCakesArray(allCakes, 0.5)

  return {
    allCakes,
    someCakes,
  }
})
