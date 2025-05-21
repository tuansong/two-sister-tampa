import type { ImageOptimized } from '~~/types/image'

export type Cake = {
  name: string
  image: string
  price: string
  imageOptimized?: ImageOptimized
}

export type Cakes = Cake[]
