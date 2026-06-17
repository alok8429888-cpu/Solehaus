const brands = ['SOLEHAUS', 'AEROFOAM', 'CARBON LAB', 'VOLT', 'MONOLITH', 'APEX', 'VAPOR', 'TERRA']

export function BrandMarquee() {
  return (
    <div className='border-y border-line bg-surface/40 py-6'>
      <div className='relative flex overflow-hidden'>
        <div className='flex min-w-full shrink-0 animate-marquee items-center gap-16 whitespace-nowrap pr-16'>
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className='font-display text-2xl font-bold tracking-tight text-muted/40'>
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
