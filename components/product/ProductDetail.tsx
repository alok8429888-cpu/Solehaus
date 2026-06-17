'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SizeSelector } from '@/components/product/SizeSelector'
import { useCart } from '@/lib/store/cart'
import { useToast } from '@/lib/store/toast'
import { formatINR, discountPercent } from '@/lib/utils/format'
import type { Product } from '@/lib/types'

const Viewer = dynamic(() => import('@/components/three/SneakerScene'), {
  ssr: false,
  loading: () => (
    <div className='grid h-full w-full place-items-center'>
      <div className='h-8 w-8 animate-spin rounded-full border-2 border-line border-t-volt' />
    </div>
  ),
})

const perks = ['Free express shipping', 'Easy 14-day returns', '100% authentic guarantee']

export function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<number | null>(null)
  const [mode, setMode] = useState<'3d' | 'photo'>('3d')
  const add = useCart((s) => s.add)
  const push = useToast((s) => s.push)
  const off = discountPercent(product.price, product.compareAtPrice)

  const onAdd = () => {
    if (size == null) {
      push({ title: 'Select a size', description: 'Choose your UK size to continue.' })
      return
    }
    add(product, size)
  }

  return (
    <section className='mx-auto max-w-shell px-5 py-10 md:px-8 md:py-16'>
      <nav className='mb-6 flex items-center gap-2 text-xs text-muted'>
        <Link href='/' className='transition-colors hover:text-cream'>
          Home
        </Link>
        <span>/</span>
        <Link href='/#trending' className='transition-colors hover:text-cream'>
          Shop
        </Link>
        <span>/</span>
        <span className='text-cream'>{product.name}</span>
      </nav>

      <div className='grid gap-8 lg:grid-cols-2'>
        <div>
          <div className='relative aspect-square overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink'>
            {mode === '3d' ? (
              <Viewer />
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes='(max-width:1024px) 100vw, 50vw'
                className='object-cover'
              />
            )}
            <div className='pointer-events-none absolute left-4 top-4'>
              {product.badge ? <Badge label={product.badge} /> : null}
            </div>
          </div>
          <div className='mt-3 flex gap-2'>
            <button
              type='button'
              onClick={() => setMode('3d')}
              className={
                mode === '3d'
                  ? 'rounded-full bg-volt px-4 py-2 text-xs font-semibold text-ink'
                  : 'rounded-full border border-line px-4 py-2 text-xs text-muted hover:text-cream'
              }
            >
              360° 3D view
            </button>
            <button
              type='button'
              onClick={() => setMode('photo')}
              className={
                mode === 'photo'
                  ? 'rounded-full bg-volt px-4 py-2 text-xs font-semibold text-ink'
                  : 'rounded-full border border-line px-4 py-2 text-xs text-muted hover:text-cream'
              }
            >
              Photo
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <div>
            <p className='text-xs uppercase tracking-wider text-muted'>{product.brand}</p>
            <h1 className='mt-1 font-display text-3xl font-extrabold text-cream md:text-4xl'>
              {product.name}
            </h1>
            <p className='mt-2 text-sm text-muted'>
              {product.colorway} · {product.rating}★ ({product.reviews} reviews)
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <span className='font-display text-2xl font-bold text-cream'>{formatINR(product.price)}</span>
            {product.compareAtPrice ? (
              <span className='text-base text-muted line-through'>
                {formatINR(product.compareAtPrice)}
              </span>
            ) : null}
            {off ? <Badge label={`-${off}%`} className='bg-red-500 text-white' /> : null}
          </div>

          <p className='leading-relaxed text-muted'>{product.description}</p>

          <div>
            <p className='mb-2 text-xs uppercase tracking-wider text-muted'>Select size (UK)</p>
            <SizeSelector sizes={product.sizes} value={size} onChange={setSize} />
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <Button size='lg' className='w-full sm:flex-1' onClick={onAdd}>
              Add to cart
            </Button>
            <Link href='/cart' className='w-full sm:flex-1'>
              <Button size='lg' variant='outline' className='w-full'>
                Go to cart
              </Button>
            </Link>
          </div>

          <ul className='mt-2 grid gap-2 border-t border-line pt-5'>
            {perks.map((p) => (
              <li key={p} className='flex items-center gap-2 text-sm text-muted'>
                <span className='text-volt'>✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
