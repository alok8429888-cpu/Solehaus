const items = [
  'Free express shipping over ₹15,000',
  'Easy 14-day returns',
  'Authenticity guaranteed',
  'New drops every Friday',
]

export function AnnouncementBar() {
  return (
    <div className='relative flex overflow-hidden border-b border-line bg-ink'>
      <div className='flex min-w-full shrink-0 animate-marquee items-center gap-10 whitespace-nowrap py-2.5'>
        {[...items, ...items].map((t, i) => (
          <span key={i} className='text-[11px] uppercase tracking-[0.2em] text-muted'>
            {t} <span className='ml-10 text-volt'>/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
