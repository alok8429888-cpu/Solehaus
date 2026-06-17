'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/cn'

type Theme = 'volt' | 'mono'

export function ThemeSwitcher() {
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
    <div className='fixed bottom-5 left-4 z-[9998] flex items-center gap-1 rounded-full border border-line bg-surface/90 p-1 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6'>
      <span className='hidden pl-2 pr-1 text-[10px] font-semibold uppercase tracking-wider text-muted sm:inline'>
        Theme
      </span>
      <button
        type='button'
        onClick={() => apply('volt')}
        className={cn(
          'rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors',
          theme === 'volt' ? 'bg-volt text-ink' : 'text-muted hover:text-cream',
        )}
      >
        Volt
      </button>
      <button
        type='button'
        onClick={() => apply('mono')}
        className={cn(
          'rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors',
          theme === 'mono' ? 'bg-cream text-ink' : 'text-muted hover:text-cream',
        )}
      >
        Mono
      </button>
    </div>
  )
}
