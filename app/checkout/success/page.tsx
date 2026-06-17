'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState('')

  useEffect(() => {
    setOrder('SH-' + Math.floor(100000 + Math.random() * 900000))
  }, [])

  return (
    <section className='mx-auto flex max-w-shell flex-col items-center justify-center px-5 py-32 text-center md:px-8'>
      <div className='grid h-16 w-16 place-items-center rounded-full bg-volt text-ink'>
        <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M20 6 9 17l-5-5' />
        </svg>
      </div>
      <h1 className='mt-6 font-display text-3xl font-bold text-cream md:text-4xl'>Order confirmed</h1>
      <p className='mt-3 max-w-md text-muted'>
        Thanks for shopping with SOLEHAUS. This is a demo store, so no payment was taken.
      </p>
      <p className='mt-4 text-sm text-muted'>
        Order ID: <span className='font-semibold text-cream'>{order || '—'}</span>
      </p>
      <Link href='/' className='mt-8'>
        <Button size='lg'>Back to home</Button>
      </Link>
    </section>
  )
}
