import Link from 'next/link'

const cols = [
  { title: 'Shop', links: ['New arrivals', 'Running', 'Lifestyle', 'Limited drops'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Sustainability', 'Careers', 'Press'] },
]

export function Footer() {
  return (
    <footer id='footer' className='border-t border-line bg-ink'>
      <div className='mx-auto grid max-w-shell grid-cols-2 gap-8 px-5 py-14 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8 md:py-16'>
        <div className='col-span-2 md:col-span-1'>
          <p className='font-display text-2xl font-extrabold text-cream'>
            SOLE<span className='text-volt'>HAUS</span>
          </p>
          <p className='mt-3 max-w-xs text-sm text-muted'>
            Premium sneakers and limited drops. Designed for those who move different.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className='text-xs uppercase tracking-widest text-muted'>{c.title}</p>
            <ul className='mt-4 space-y-2.5'>
              {c.links.map((l) => (
                <li key={l}>
                  <Link href='#' className='text-sm text-cream/80 transition-colors hover:text-volt'>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='border-t border-line'>
        <div className='mx-auto flex max-w-shell flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-muted md:flex-row md:px-8 md:text-left'>
          <p>© 2026 SOLEHAUS. All rights reserved.</p>
          <p>Crafted in India · Demo store</p>
        </div>
      </div>
    </footer>
  )
}
