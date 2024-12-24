import type { Cakes } from '~~/types/Cakes'
import { cakes as allCakes } from '~~/db.json'

allCakes as Cakes

const fractionOfThePetsArray = (cakes, fraction) => {
  return cakes
    .map((cake) => ({
      ...cake,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(cakes.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  const someCakes: Cakes = fractionOfThePetsArray(allCakes, 0.5)

  return {
    allCakes,
    someCakes,
  }
})
