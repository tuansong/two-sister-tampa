import type { ImageOptimized } from '~~/types/image'

export type Cake = {
  id: number
  name: string
  image: string
  type: string
  price: string
  imageOptimized?: ImageOptimized
}

export type Cakes = Cake[]
