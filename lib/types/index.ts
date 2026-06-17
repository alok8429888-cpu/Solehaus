export type Category = {
  id: string
  slug: string
  name: string
  tagline: string
  image: string
}

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  price: number
  compareAtPrice?: number
  category: string
  colorway: string
  colors: string[]
  sizes: number[]
  image: string
  gallery: string[]
  description: string
  badge?: 'New' | 'Limited' | 'Bestseller' | 'Sale'
  featured?: boolean
  soldOut?: boolean
  rating: number
  reviews: number
}

export type CartItem = {
  key: string
  productId: string
  name: string
  brand: string
  price: number
  image: string
  size: number
  qty: number
}
