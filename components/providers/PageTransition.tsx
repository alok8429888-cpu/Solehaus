'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

const enter = { opacity: 0, y: 10 }
const center = { opacity: 1, y: 0 }
const leave = { opacity: 0, y: -10 }
const transition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div key={pathname} initial={enter} animate={center} exit={leave} transition={transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
