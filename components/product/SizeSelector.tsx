'use client'

import { cn } from '@/lib/utils/cn'

export function SizeSelector({
  sizes,
  value,
  onChange,
}: {
  sizes: number[]
  value: number | null
  onChange: (size: number) => void
}) {
  return (
    <div className='flex flex-wrap gap-2'>
      {sizes.map((s) => (
        <button
          key={s}
          type='button'
          onClick={() => onChange(s)}
          className={cn(
            'h-11 min-w-[44px] rounded-xl border px-3 text-sm transition-colors',
            value === s
              ? 'border-volt bg-volt text-ink'
              : 'border-line text-cream hover:border-cream/40',
          )}
        >
          UK {s}
        </button>
      ))}
    </div>
  )
}
