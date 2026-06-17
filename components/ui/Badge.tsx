import { cn } from '@/lib/utils/cn'

const tones: Record<string, string> = {
  New: 'bg-volt text-ink',
  Limited: 'bg-cream text-ink',
  Bestseller: 'bg-surface2 text-cream border border-line',
  Sale: 'bg-red-500 text-white',
}

export function Badge({ label, className }: { label: string; className?: string }) {
  const tone = tones[label] ?? 'bg-surface2 text-cream'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider',
        tone,
        className,
      )}
    >
      {label}
    </span>
  )
}
