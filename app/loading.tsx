import { Skeleton } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className='mx-auto max-w-shell px-5 py-16 md:px-8'>
      <Skeleton className='h-9 w-64' />
      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className='aspect-square' />
        ))}
      </div>
    </div>
  )
}
