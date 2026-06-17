'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { SizeSelector } from '@/components/product/SizeSelector'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useQuickView } from '@/lib/store/quickview'
import { useCart } from '@/lib/store/cart'
import { useToast } from '@/lib/store/toast'
import { formatINR } from '@/lib/utils/format'

export function QuickView() {
  const product = useQuickView((s) => s.product)
  const close = useQuickView((s) => s.close)
  const add = useCart((s) => s.add)
  const push = useToast((s) => s.push)
  const [size, setSize] = useState<number | null>(null)

  useEffect(() => {
    setSize(null)
  }, [product])

  const onAdd = () => {
    if (!product) return
    if (size == null) {
      push({ title: 'Select a size', description: 'Choose your UK size to continue.' })
      return
    }
    add(product, size)
    close()
  }

  return (
    <Modal open={!!product} onClose={close}>
      {product ? (
        <div className='grid gap-0 md:grid-cols-2'>
          <div className='relative aspect-square bg-surface2'>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes='(max-width:768px) 100vw, 50vw'
              className='object-cover'
            />
            {product.badge ? (
              <div className='absolute left-4 top-4'>
                <Badge label={product.badge} />
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-4 p-6 md:p-8'>
            <div>
              <p className='text-xs uppercase tracking-wider text-muted'>{product.brand}</p>
              <h2 className='mt-1 font-display text-2xl font-bold text-cream'>{product.name}</h2>
              <p className='mt-1 text-sm text-muted'>{product.colorway}</p>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-display text-xl font-bold text-cream'>{formatINR(product.price)}</span>
              {product.compareAtPrice ? (
                <span className='text-sm text-muted line-through'>{formatINR(product.compareAtPrice)}</span>
              ) : null}
            </div>
            <p className='text-sm leading-relaxed text-muted'>{product.description}</p>
            <div>
              <p className='mb-2 text-xs uppercase tracking-wider text-muted'>Select size</p>
              <SizeSelector sizes={product.sizes} value={size} onChange={setSize} />
            </div>
            <div className='mt-auto flex flex-col gap-2'>
              <Button size='lg' onClick={onAdd}>
                Add to cart
              </Button>
              <Link href={`/product/${product.slug}`} onClick={close}>
                <Button size='lg' variant='outline' className='w-full'>
                  View full details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
