import { ProductCard } from './ProductCard'
import type { Product } from '@/lib/types'

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  )
}
