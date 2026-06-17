'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart, selectSubtotal, selectCount } from '@/lib/store/cart'
import { formatINR } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'

export default function CartPage() {
  const items = useCart((s) => s.items)
  const setQty = useCart((s) => s.setQty)
  const remove = useCart((s) => s.remove)
  const subtotal = useCart(selectSubtotal)
  const count = useCart(selectCount)
  const shipping = subtotal === 0 || subtotal > 15000 ? 0 : 499
  const total = subtotal + shipping

  if (count === 0) {
    return (
      <section className='mx-auto flex max-w-shell flex-col items-center justify-center px-5 py-32 text-center md:px-8'>
        <h1 className='font-display text-3xl font-bold text-cream'>Your cart is empty</h1>
        <p className='mt-3 text-muted'>Looks like you have not added anything yet.</p>
        <Link href='/#trending' className='mt-8'>
          <Button size='lg'>Start shopping</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className='mx-auto max-w-shell px-5 py-12 md:px-8 md:py-16'>
      <h1 className='mb-8 font-display text-3xl font-extrabold text-cream md:text-4xl'>
        Your cart ({count})
      </h1>
      <div className='grid gap-10 lg:grid-cols-[1.6fr_1fr]'>
        <div className='divide-y divide-line border-y border-line'>
          {items.map((i) => (
            <div key={i.key} className='flex gap-5 py-5'>
              <div className='relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-line bg-surface2'>
                <Image src={i.image} alt={i.name} fill sizes='112px' className='object-cover' />
              </div>
              <div className='flex flex-1 flex-col'>
                <div className='flex justify-between gap-3'>
                  <div>
                    <p className='font-display text-lg font-semibold text-cream'>{i.name}</p>
                    <p className='text-sm text-muted'>{i.brand} · UK {i.size}</p>
                  </div>
                  <button
                    onClick={() => remove(i.key)}
                    className='text-sm text-muted transition-colors hover:text-red-400'
                  >
                    Remove
                  </button>
                </div>
                <div className='mt-auto flex items-center justify-between'>
                  <div className='flex items-center gap-4 rounded-full border border-line px-4 py-2'>
                    <button
                      onClick={() => setQty(i.key, i.qty - 1)}
                      aria-label='Decrease quantity'
                      className='text-muted transition-colors hover:text-cream'
                    >
                      −
                    </button>
                    <span className='w-6 text-center text-sm text-cream'>{i.qty}</span>
                    <button
                      onClick={() => setQty(i.key, i.qty + 1)}
                      aria-label='Increase quantity'
                      className='text-muted transition-colors hover:text-cream'
                    >
                      +
                    </button>
                  </div>
                  <span className='font-semibold text-cream'>{formatINR(i.price * i.qty)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className='h-fit rounded-3xl border border-line bg-surface p-6'>
          <h2 className='font-display text-lg font-bold text-cream'>Order summary</h2>
          <dl className='mt-5 space-y-3 text-sm'>
            <div className='flex justify-between'>
              <dt className='text-muted'>Subtotal</dt>
              <dd className='text-cream'>{formatINR(subtotal)}</dd>
            </div>
            <div className='flex justify-between'>
              <dt className='text-muted'>Shipping</dt>
              <dd className='text-cream'>{shipping === 0 ? 'Free' : formatINR(shipping)}</dd>
            </div>
            <div className='flex justify-between border-t border-line pt-3'>
              <dt className='font-semibold text-cream'>Total</dt>
              <dd className='font-display text-lg font-bold text-cream'>{formatINR(total)}</dd>
            </div>
          </dl>
          <Link href='/checkout'>
            <Button size='lg' className='mt-6 w-full'>
              Proceed to checkout
            </Button>
          </Link>
          <Link href='/#trending'>
            <Button size='lg' variant='ghost' className='mt-2 w-full'>
              Continue shopping
            </Button>
          </Link>
        </aside>
      </div>
    </section>
  )
}
