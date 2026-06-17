'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useToast } from '@/lib/store/toast'

export function ToastViewport() {
  const toasts = useToast((s) => s.toasts)

  return (
    <div className='pointer-events-none fixed bottom-6 right-6 z-[100] flex w-full max-w-sm flex-col gap-3'>
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial= opacity: 0, y: 20, scale: 0.95 
            animate= opacity: 1, y: 0, scale: 1 
            exit= opacity: 0, x: 40 
            transition= type: 'spring', stiffness: 380, damping: 30 
            className='pointer-events-auto rounded-2xl border border-line bg-surface2/90 px-5 py-4 shadow-2xl backdrop-blur'
          >
            <p className='text-sm font-semibold text-cream'>{t.title}</p>
            {t.description ? <p className='mt-0.5 text-xs text-muted'>{t.description}</p> : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
