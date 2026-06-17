import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className='mx-auto flex max-w-shell flex-col items-center justify-center px-5 py-32 text-center md:px-8'>
      <p className='font-display text-7xl font-extrabold text-volt'>404</p>
      <h1 className='mt-4 font-display text-3xl font-bold text-cream'>Page not found</h1>
      <p className='mt-3 max-w-sm text-muted'>The page you are looking for does not exist or may have moved.</p>
      <Link href='/' className='mt-8'>
        <Button size='lg'>Back to home</Button>
      </Link>
    </section>
  )
}
