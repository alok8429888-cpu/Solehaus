'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const SneakerScene = dynamic(() => import('@/components/three/SneakerScene'), {
  ssr: false,
  loading: () => (
    <div className='grid h-full w-full place-items-center'>
      <div className='h-8 w-8 animate-spin rounded-full border-2 border-line border-t-volt' />
    </div>
  ),
})

const ease = [0.16, 1, 0.3, 1] as const

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-volt/10 blur-[120px]' />
      </div>

      <div className='mx-auto grid max-w-shell items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24'>
        <div>
          <motion.p
            initial= opacity: 0, y: 20 
            animate= opacity: 1, y: 0 
            transition= duration: 0.6, ease 
            className='inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted'
          >
            <span className='h-1.5 w-1.5 rounded-full bg-volt' /> New drop · Phantom Flux
          </motion.p>

          <motion.h1
            initial= opacity: 0, y: 24 
            animate= opacity: 1, y: 0 
            transition= duration: 0.7, delay: 0.05, ease 
            className='mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-cream md:text-7xl'
          >
            Step into
            <br />
            the <span className='text-volt'>future</span>.
          </motion.h1>

          <motion.p
            initial= opacity: 0, y: 24 
            animate= opacity: 1, y: 0 
            transition= duration: 0.7, delay: 0.12, ease 
            className='mt-6 max-w-md text-base text-muted md:text-lg'
          >
            Premium sneakers, limited drops and an interactive 3D try-on. Drag the shoe, feel the
            craft — then make it yours.
          </motion.p>

          <motion.div
            initial= opacity: 0, y: 24 
            animate= opacity: 1, y: 0 
            transition= duration: 0.7, delay: 0.2, ease 
            className='mt-8 flex flex-wrap items-center gap-3'
          >
            <Button size='lg' onClick={() => scrollTo('trending')}>
              Shop the drop
            </Button>
            <Button size='lg' variant='outline' onClick={() => scrollTo('categories')}>
              Explore
            </Button>
          </motion.div>

          <motion.div
            initial= opacity: 0 
            animate= opacity: 1 
            transition= duration: 0.8, delay: 0.35 
            className='mt-10 flex gap-8'
          >
            <div>
              <p className='font-display text-2xl font-bold text-cream'>120k+</p>
              <p className='text-xs text-muted'>Pairs shipped</p>
            </div>
            <div>
              <p className='font-display text-2xl font-bold text-cream'>4.9★</p>
              <p className='text-xs text-muted'>Avg. rating</p>
            </div>
            <div>
              <p className='font-display text-2xl font-bold text-cream'>100%</p>
              <p className='text-xs text-muted'>Authentic</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial= opacity: 0, scale: 0.95 
          animate= opacity: 1, scale: 1 
          transition= duration: 0.9, delay: 0.2, ease 
          className='relative h-[360px] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink md:h-[520px]'
        >
          <SneakerScene />
          <div className='pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-ink/60 px-4 py-1.5 text-[11px] uppercase tracking-widest text-muted backdrop-blur'>
            Drag to rotate
          </div>
        </motion.div>
      </div>
    </section>
  )
}
