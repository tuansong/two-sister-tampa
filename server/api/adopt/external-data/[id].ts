import type { Cake, Cakes } from '~~/types/cakes'
import { cakes } from '~~/db.json'
cakes as Cakes

const apiBaseUrl =
  'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss'

export default defineEventHandler(async (event): Promise<Cake> => {
  const { id } = event.context.params

  let cake: Maybe<Cake>

  if (cake?.length) {
    cake = cakes.find((cake) => +cake.id === +id)
  }

  if (!cake) {
    cake = await $fetch(`${apiBaseUrl}/cakes/${id}`)

    if (!cake) {
      throw createError({
        statusCode: 404,
        message: 'Cake profile not fetched.',
      })
    }
  }

  return cake
})
