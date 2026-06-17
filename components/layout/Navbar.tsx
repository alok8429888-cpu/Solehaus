'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { useCart, selectCount } from '@/lib/store/cart'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

const links = [
  { label: 'New', href: '#trending' },
  { label: 'Categories', href: '#categories' },
  { label: 'Limited', href: '#drop' },
  { label: 'About', href: '#footer' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const count = useCart(selectCount)
  const toggleCart = useCart((s) => s.toggle)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav className='mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:px-8'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='font-display text-xl font-extrabold tracking-tight text-cream'>
            SOLE<span className='text-volt'>HAUS</span>
          </Link>
          <ul className='hidden items-center gap-7 md:flex'>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className='text-sm text-muted transition-colors hover:text-cream'>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-2'>
          <ThemeSwitcher />

          <button
            aria-label='Search'
            className='hidden h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface2 hover:text-cream md:flex'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round'>
              <circle cx='11' cy='11' r='7' />
              <path d='m20 20-3-3' />
            </svg>
          </button>

          <button
            onClick={toggleCart}
            aria-label='Open cart'
            className='relative flex h-10 items-center gap-2 rounded-full bg-surface2 px-4 text-sm text-cream transition-colors hover:bg-surface2/70'
          >
            Cart
            <span className='grid h-5 min-w-5 place-items-center rounded-full bg-volt px-1 text-[11px] font-bold text-ink'>
              {count}
            </span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label='Menu'
            className='flex h-10 w-10 items-center justify-center rounded-full text-cream md:hidden'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round'>
              {open ? <path d='M6 6l12 12M18 6 6 18' /> : <path d='M3 6h18M3 12h18M3 18h18' />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className='border-t border-line bg-ink px-5 py-4 md:hidden'>
          <ul className='flex flex-col gap-1'>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className='block py-2 text-base text-cream'
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
