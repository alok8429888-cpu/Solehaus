'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { categories } from '@/lib/data/categories'

export function CategoryStrip() {
  return (
    <section id='categories' className='mx-auto max-w-shell px-5 py-16 md:px-8 md:py-24'>
      <div className='mb-8'>
        <p className='text-xs uppercase tracking-[0.25em] text-volt'>Shop by category</p>
        <h2 className='mt-2 font-display text-3xl font-bold text-cream md:text-4xl'>Find your terrain</h2>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {categories.map((c, i) => (
          <motion.a
            key={c.id}
            href='#trending'
            initial= opacity: 0, y: 24 
            whileInView= opacity: 1, y: 0 
            viewport= once: true, margin: '-60px' 
            transition= duration: 0.6, delay: i * 0.08 
            className='group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line'
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes='(max-width:768px) 50vw, 25vw'
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-5'>
              <h3 className='font-display text-xl font-bold text-cream'>{c.name}</h3>
              <p className='text-xs text-muted'>{c.tagline}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
