'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const TARGET = new Date('2026-07-01T18:30:00Z').getTime()

function scrollToTrending() {
  document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' })
}

export function FeaturedDrop() {
  const [mounted, setMounted] = useState(false)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    setMounted(true)
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const days = Math.floor(left / 86400000)
  const hours = Math.floor(left / 3600000) % 24
  const minutes = Math.floor(left / 60000) % 60
  const seconds = Math.floor(left / 1000) % 60
  const units: Array<[string, number]> = [
    ['Days', days],
    ['Hrs', hours],
    ['Min', minutes],
    ['Sec', seconds],
  ]

  return (
    <section id='drop' className='mx-auto max-w-shell px-5 py-16 md:px-8 md:py-24'>
      <div className='relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 md:p-14'>
        <div className='absolute -right-20 -top-20 h-72 w-72 rounded-full bg-volt/15 blur-[100px]' />
        <div className='relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
          <div className='max-w-lg'>
            <p className='text-xs uppercase tracking-[0.25em] text-volt'>Limited release</p>
            <h2 className='mt-3 font-display text-2xl font-bold text-cream sm:text-3xl md:text-5xl'>
              Flux Zero — Carbon Volt
            </h2>
            <p className='mt-4 text-sm text-muted md:text-base'>
              Only 200 pairs. Full carbon plate, aerospace foam and the signature volt strike. When
              it is gone, it is gone.
            </p>
            <div className='mt-7'>
              <Button size='lg' onClick={scrollToTrending}>
                Notify me
              </Button>
            </div>
          </div>
          <div className='grid w-full grid-cols-4 gap-2 sm:gap-3 md:flex md:w-auto'>
            {units.map(([label, val]) => (
              <div
                key={label}
                className='flex min-w-0 flex-col items-center rounded-2xl border border-line bg-ink px-2 py-3 md:min-w-[64px] md:px-3'
              >
                <span className='font-display text-xl font-bold tabular-nums text-cream sm:text-2xl md:text-3xl'>
                  {mounted ? String(val).padStart(2, '0') : '--'}
                </span>
                <span className='mt-1 text-[10px] uppercase tracking-widest text-muted'>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
