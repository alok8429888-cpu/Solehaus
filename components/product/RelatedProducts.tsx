import { products } from '@/lib/data/products'
import { ProductGrid } from '@/components/product/ProductGrid'
import type { Product } from '@/lib/types'

export function RelatedProducts({ current }: { current: Product }) {
  const sameCategory = products.filter((p) => p.category === current.category && p.id !== current.id)
  const fallback = products.filter((p) => p.id !== current.id)
  const list = (sameCategory.length >= 2 ? sameCategory : fallback).slice(0, 4)

  return (
    <section className='mx-auto max-w-shell px-5 pb-24 md:px-8'>
      <h2 className='mb-8 font-display text-2xl font-bold text-cream md:text-3xl'>You may also like</h2>
      <ProductGrid products={list} />
    </section>
  )
}
