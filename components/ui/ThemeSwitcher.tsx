'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/cn'

type Theme = 'volt' | 'mono'

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('volt')

  useEffect(() => {
    const saved = (localStorage.getItem('solehaus-theme') as Theme | null) ?? 'volt'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const apply = (next: Theme) => {
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('solehaus-theme', next)
    } catch (e) {
      // ignore storage errors
    }
  }

  return (
    <div
      role='group'
      aria-label='Color theme'
      className={cn(
        'flex items-center gap-0.5 rounded-full border border-line bg-surface2/80 p-0.5',
        className,
      )}
    >
      <button
        type='button'
        onClick={() => apply('volt')}
        aria-pressed={theme === 'volt'}
        aria-label='Volt theme'
        className={cn(
          'flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:px-2.5',
          theme === 'volt' ? 'bg-volt text-ink' : 'text-muted hover:text-cream',
        )}
      >
        <span className='h-2.5 w-2.5 rounded-full bg-[#d8ff34] ring-1 ring-black/20' />
        <span className='hidden sm:inline'>Volt</span>
      </button>
      <button
        type='button'
        onClick={() => apply('mono')}
        aria-pressed={theme === 'mono'}
        aria-label='Monochrome theme'
        className={cn(
          'flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:px-2.5',
          theme === 'mono' ? 'bg-cream text-ink' : 'text-muted hover:text-cream',
        )}
      >
        <span className='h-2.5 w-2.5 rounded-full bg-white ring-1 ring-black/20' />
        <span className='hidden sm:inline'>Mono</span>
      </button>
    </div>
  )
}
