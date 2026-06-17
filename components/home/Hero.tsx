'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'

const SneakerScene = dynamic(() => import('@/components/three/SneakerScene'), {
  ssr: false,
  loading: () => (
    <div className='grid h-full w-full place-items-center'>
      <div className='h-8 w-8 animate-spin rounded-full border-2 border-line border-t-volt' />
    </div>
  ),
})

const ease = [0.16, 1, 0.3, 1] as const
const fadeSm = { opacity: 0, y: 20 }
const fade = { opacity: 0, y: 24 }
const visible = { opacity: 1, y: 0 }
const onlyHidden = { opacity: 0 }
const onlyShown = { opacity: 1 }
const sceneHidden = { opacity: 0, scale: 0.95 }
const sceneShown = { opacity: 1, scale: 1 }

const tEyebrow = { duration: 0.6, ease }
const tHeading = { duration: 0.7, delay: 0.05, ease }
const tCopy = { duration: 0.7, delay: 0.12, ease }
const tCta = { duration: 0.7, delay: 0.2, ease }
const tStats = { duration: 0.8, delay: 0.35 }
const tScene = { duration: 0.9, delay: 0.2, ease }

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-volt/10 blur-[100px] md:h-[600px] md:w-[600px] md:blur-[120px]' />
      </div>

      <div className='mx-auto grid max-w-shell items-center gap-8 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:py-24'>
        <div className='order-2 lg:order-1'>
          <motion.p
            initial={fadeSm}
            animate={visible}
            transition={tEyebrow}
            className='inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted sm:text-xs'
          >
            <span className='h-1.5 w-1.5 rounded-full bg-volt' /> New drop · Phantom Flux
          </motion.p>

          <motion.h1
            initial={fade}
            animate={visible}
            transition={tHeading}
            className='mt-5 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-cream sm:text-5xl md:text-7xl'
          >
            Step into
            <br />
            the <span className='text-volt'>future</span>.
          </motion.h1>

          <motion.p
            initial={fade}
            animate={visible}
            transition={tCopy}
            className='mt-5 max-w-md text-base text-muted md:mt-6 md:text-lg'
          >
            Premium sneakers, limited drops and an interactive 3D try-on. Drag the shoe, feel the
            craft — then make it yours.
          </motion.p>

          <motion.div
            initial={fade}
            animate={visible}
            transition={tCta}
            className='mt-7 flex flex-wrap items-center gap-3 md:mt-8'
          >
            <Magnetic>
              <Button size='lg' onClick={() => scrollTo('trending')}>
                Shop the drop
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size='lg' variant='outline' onClick={() => scrollTo('categories')}>
                Explore
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={onlyHidden}
            animate={onlyShown}
            transition={tStats}
            className='mt-9 flex gap-6 sm:gap-8 md:mt-10'
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
          initial={sceneHidden}
          animate={sceneShown}
          transition={tScene}
          className='relative order-1 h-[300px] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-ink sm:h-[380px] md:h-[520px] lg:order-2'
        >
          <SneakerScene />
          <div className='pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-ink/60 px-4 py-1.5 text-[11px] uppercase tracking-widest text-muted backdrop-blur'>
            360° view
          </div>
        </motion.div>
      </div>
    </section>
  )
}
