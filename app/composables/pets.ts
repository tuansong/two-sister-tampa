export const useCakes = async () => {
  // const { data, error } = await useFetch('/api/adopt/external-data')
  const { data, error } = await useFetch('/api/adopt/local-data')

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('pets', async () => {
  //   return await $fetch('/api/store/local-data')
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profiles.`,
    })
  }

  const fetchType = (type?: string) => {
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    return data.value.allCakes.filter((cake) => !type || cake.type === type)
    // .map((pet) =>
    //   pet.image
    //     ? {
    //         ...pet,
    //         imageOptimized: optimizeImage(pet.image),
    //       }
    //     : pet,
    // )
  }

  const { allCakes, someCakes } = data.value

  return { allCakes, someCakes, fetchType }
}
