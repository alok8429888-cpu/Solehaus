'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { useCart } from '@/lib/store/cart'
import { useQuickView } from '@/lib/store/quickview'
import { useToast } from '@/lib/store/toast'
import { formatINR, discountPercent } from '@/lib/utils/format'
import type { Product } from '@/lib/types'

const enter = { opacity: 0, y: 28 }
const show = { opacity: 1, y: 0 }
const once = { once: true, margin: '-60px' }

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add)
  const openQuickView = useQuickView((s) => s.open)
  const push = useToast((s) => s.push)
  const off = discountPercent(product.price, product.compareAtPrice)
  const transition = { duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] as const }

  const onAdd = () => {
    add(product, product.sizes[0])
    push({ title: 'Added to cart', description: `${product.name} · UK ${product.sizes[0]}` })
  }

  return (
    <motion.article
      initial={enter}
      whileInView={show}
      viewport={once}
      transition={transition}
      className='group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface'
    >
      <Link
        href={`/product/${product.slug}`}
        aria-label={product.name}
        className='absolute inset-0 z-10'
      />
      <div className='relative aspect-square overflow-hidden bg-surface2'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes='(max-width:768px) 50vw, 25vw'
          className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
        />
        <div className='absolute left-3 top-3 flex gap-2'>
          {product.badge ? <Badge label={product.badge} /> : null}
          {off ? <Badge label={`-${off}%`} className='bg-red-500 text-white' /> : null}
        </div>
        <div className='absolute inset-x-3 bottom-3 z-20 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <button
            type='button'
            onClick={() => openQuickView(product)}
            className='flex-1 rounded-full border border-line bg-ink/80 py-2.5 text-xs font-semibold text-cream backdrop-blur transition-colors hover:bg-ink'
          >
            Quick view
          </button>
          <button
            type='button'
            onClick={onAdd}
            className='flex-1 rounded-full bg-cream py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-volt'
          >
            Add
          </button>
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-1 p-4'>
        <p className='text-xs uppercase tracking-wider text-muted'>{product.brand}</p>
        <h3 className='font-display text-base font-semibold text-cream'>{product.name}</h3>
        <div className='mt-1 flex items-center gap-1.5'>
          {product.colors.map((c) => {
            const swatch = { backgroundColor: c }
            return <span key={c} style={swatch} className='h-3 w-3 rounded-full border border-line' />
          })}
        </div>
        <div className='mt-2 flex items-center gap-2'>
          <span className='text-sm font-semibold text-cream'>{formatINR(product.price)}</span>
          {product.compareAtPrice ? (
            <span className='text-xs text-muted line-through'>{formatINR(product.compareAtPrice)}</span>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
