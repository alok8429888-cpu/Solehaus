'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart, selectSubtotal, selectCount } from '@/lib/store/cart'
import { formatINR } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'

const inputClass =
  'h-12 w-full rounded-xl border border-line bg-ink px-4 text-sm text-cream outline-none transition-colors placeholder:text-muted focus:border-volt'

export default function CheckoutPage() {
  const router = useRouter()
  const items = useCart((s) => s.items)
  const subtotal = useCart(selectSubtotal)
  const count = useCart(selectCount)
  const clear = useCart((s) => s.clear)
  const [submitting, setSubmitting] = useState(false)
  const shipping = subtotal === 0 || subtotal > 15000 ? 0 : 499
  const total = subtotal + shipping

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    clear()
    router.push('/checkout/success')
  }

  if (count === 0) {
    return (
      <section className='mx-auto flex max-w-shell flex-col items-center justify-center px-5 py-32 text-center md:px-8'>
        <h1 className='font-display text-3xl font-bold text-cream'>Nothing to check out</h1>
        <p className='mt-3 text-muted'>Your cart is empty.</p>
        <Link href='/#trending' className='mt-8'>
          <Button size='lg'>Browse sneakers</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className='mx-auto max-w-shell px-5 py-12 md:px-8 md:py-16'>
      <h1 className='mb-8 font-display text-3xl font-extrabold text-cream md:text-4xl'>Checkout</h1>
      <form onSubmit={onSubmit} className='grid gap-10 lg:grid-cols-[1.6fr_1fr]'>
        <div className='space-y-8'>
          <fieldset className='space-y-4'>
            <legend className='mb-2 font-display text-lg font-bold text-cream'>Contact</legend>
            <input className={inputClass} type='email' required placeholder='Email address' />
            <input className={inputClass} type='tel' required placeholder='Phone number' />
          </fieldset>

          <fieldset className='space-y-4'>
            <legend className='mb-2 font-display text-lg font-bold text-cream'>Shipping address</legend>
            <div className='grid gap-4 sm:grid-cols-2'>
              <input className={inputClass} required placeholder='First name' />
              <input className={inputClass} required placeholder='Last name' />
            </div>
            <input className={inputClass} required placeholder='Address' />
            <div className='grid gap-4 sm:grid-cols-3'>
              <input className={inputClass} required placeholder='City' />
              <input className={inputClass} required placeholder='State' />
              <input className={inputClass} required placeholder='PIN code' />
            </div>
          </fieldset>

          <fieldset className='space-y-4'>
            <legend className='mb-2 font-display text-lg font-bold text-cream'>Payment (demo)</legend>
            <input className={inputClass} placeholder='Card number' inputMode='numeric' />
            <div className='grid gap-4 sm:grid-cols-2'>
              <input className={inputClass} placeholder='MM / YY' />
              <input className={inputClass} placeholder='CVC' inputMode='numeric' />
            </div>
            <p className='text-xs text-muted'>This is a demo store — no real payment is processed.</p>
          </fieldset>
        </div>

        <aside className='h-fit rounded-3xl border border-line bg-surface p-6'>
          <h2 className='font-display text-lg font-bold text-cream'>Your order</h2>
          <ul className='mt-4 space-y-3'>
            {items.map((i) => (
              <li key={i.key} className='flex justify-between text-sm'>
                <span className='text-muted'>
                  {i.name} × {i.qty}
                </span>
                <span className='text-cream'>{formatINR(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className='mt-5 space-y-3 border-t border-line pt-4 text-sm'>
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
          <Button type='submit' size='lg' className='mt-6 w-full' disabled={submitting}>
            {submitting ? 'Placing order...' : 'Place order'}
          </Button>
        </aside>
      </form>
    </section>
  )
}
