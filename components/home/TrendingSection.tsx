'use client'

import { useMemo, useState } from 'react'
import { ProductGrid } from '@/components/product/ProductGrid'
import { products } from '@/lib/data/products'
import { categories } from '@/lib/data/categories'
import { cn } from '@/lib/utils/cn'

const filters = [{ slug: 'all', name: 'All' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))]

export function TrendingSection() {
  const [active, setActive] = useState('all')
  const list = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id='trending' className='mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28'>
      <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
        <div>
          <p className='text-xs uppercase tracking-[0.25em] text-volt'>Trending now</p>
          <h2 className='mt-2 font-display text-3xl font-bold text-cream md:text-4xl'>The grid</h2>
        </div>
        <div className='flex flex-wrap gap-2'>
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActive(f.slug)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                active === f.slug
                  ? 'border-volt bg-volt text-ink'
                  : 'border-line text-muted hover:text-cream',
              )}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <ProductGrid products={list} />
      </div>
    </section>
  )
}
