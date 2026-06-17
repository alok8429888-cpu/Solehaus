'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { useToast } from '@/lib/store/toast'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const push = useToast((s) => s.push)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    push({ title: 'You are on the list', description: 'Watch your inbox for the next drop.' })
    setEmail('')
  }

  return (
    <section className='mx-auto max-w-shell px-5 pb-24 md:px-8'>
      <div className='rounded-3xl border border-line bg-gradient-to-br from-surface2 to-surface p-8 text-center md:p-14'>
        <h2 className='font-display text-3xl font-bold text-cream md:text-4xl'>Be first to the drop</h2>
        <p className='mx-auto mt-3 max-w-md text-muted'>
          Join the SOLEHAUS list for early access, restocks and members-only releases.
        </p>
        <form onSubmit={onSubmit} className='mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row'>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@email.com'
            className='h-12 w-full rounded-full border border-line bg-ink px-5 text-sm text-cream outline-none transition-colors placeholder:text-muted focus:border-volt sm:flex-1'
          />
          <Button type='submit' size='lg' className='w-full sm:w-auto'>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
