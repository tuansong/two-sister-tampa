import type { Cake, Cakes } from '~~/types/cakes'
import { cakes } from '~~/db.json'

cakes as Cakes

export default defineEventHandler(async (event): Promise<Cake> => {
  const { id } = event.context.params

  const cake: Maybe<Cake> = cakes.find((cake) => +cake.id === +id)
  if (!cake) {
    throw createError({
      statusCode: 404,
      message: 'Cake not found.',
    })
  }

  return cake
})
