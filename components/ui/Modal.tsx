'use client'

import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const overlayHidden = { opacity: 0 }
const overlayShown = { opacity: 1 }
const panelHidden = { opacity: 0, scale: 0.96, y: 20 }
const panelShown = { opacity: 1, scale: 1, y: 0 }
const spring = { type: 'spring' as const, stiffness: 300, damping: 30 }

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={overlayHidden}
          animate={overlayShown}
          exit={overlayHidden}
          className='fixed inset-0 z-[100] flex items-center justify-center p-4'
        >
          <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' onClick={onClose} />
          <motion.div
            role='dialog'
            aria-modal='true'
            initial={panelHidden}
            animate={panelShown}
            exit={panelHidden}
            transition={spring}
            className='relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-line bg-surface'
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
