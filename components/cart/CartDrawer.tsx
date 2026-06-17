'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart, selectSubtotal, selectCount } from '@/lib/store/cart'
import { useToast } from '@/lib/store/toast'
import { formatINR } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'

const fadeHidden = { opacity: 0 }
const fadeShown = { opacity: 1 }
const panelHidden = { x: '100%' }
const panelShown = { x: 0 }
const panelSpring = { type: 'spring' as const, stiffness: 320, damping: 34 }

export function CartDrawer() {
  const items = useCart((s) => s.items)
  const isOpen = useCart((s) => s.isOpen)
  const close = useCart((s) => s.close)
  const setQty = useCart((s) => s.setQty)
  const remove = useCart((s) => s.remove)
  const clear = useCart((s) => s.clear)
  const subtotal = useCart(selectSubtotal)
  const count = useCart(selectCount)
  const push = useToast((s) => s.push)

  const checkout = () => {
    push({ title: 'Demo checkout', description: 'This is a demo store — no real payment taken.' })
    clear()
    close()
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={fadeHidden}
            animate={fadeShown}
            exit={fadeHidden}
            onClick={close}
            className='fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm'
          />
          <motion.aside
            initial={panelHidden}
            animate={panelShown}
            exit={panelHidden}
            transition={panelSpring}
            className='fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col border-l border-line bg-ink'
          >
            <div className='flex items-center justify-between border-b border-line px-5 py-4'>
              <h2 className='font-display text-lg font-bold text-cream'>Your cart ({count})</h2>
              <button
                onClick={close}
                aria-label='Close cart'
                className='grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface2 hover:text-cream'
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round'>
                  <path d='M6 6l12 12M18 6 6 18' />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <div className='flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center'>
                <p className='font-display text-lg text-cream'>Your cart is empty</p>
                <p className='text-sm text-muted'>Add a pair to get started.</p>
                <Button variant='outline' onClick={close}>
                  Continue shopping
                </Button>
              </div>
            ) : (
              <>
                <div className='flex-1 space-y-4 overflow-y-auto px-5 py-5'>
                  {items.map((i) => (
                    <div key={i.key} className='flex gap-4'>
                      <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-surface2'>
                        <Image src={i.image} alt={i.name} fill sizes='80px' className='object-cover' />
                      </div>
                      <div className='flex flex-1 flex-col'>
                        <div className='flex justify-between gap-2'>
                          <div>
                            <p className='text-sm font-semibold text-cream'>{i.name}</p>
                            <p className='text-xs text-muted'>UK {i.size}</p>
                          </div>
                          <button
                            onClick={() => remove(i.key)}
                            className='text-xs text-muted transition-colors hover:text-red-400'
                          >
                            Remove
                          </button>
                        </div>
                        <div className='mt-auto flex items-center justify-between'>
                          <div className='flex items-center gap-3 rounded-full border border-line px-3 py-1'>
                            <button
                              onClick={() => setQty(i.key, i.qty - 1)}
                              aria-label='Decrease quantity'
                              className='text-muted transition-colors hover:text-cream'
                            >
                              −
                            </button>
                            <span className='w-5 text-center text-sm text-cream'>{i.qty}</span>
                            <button
                              onClick={() => setQty(i.key, i.qty + 1)}
                              aria-label='Increase quantity'
                              className='text-muted transition-colors hover:text-cream'
                            >
                              +
                            </button>
                          </div>
                          <span className='text-sm font-semibold text-cream'>
                            {formatINR(i.price * i.qty)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='border-t border-line px-5 py-5'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-muted'>Subtotal</span>
                    <span className='font-display text-lg font-bold text-cream'>{formatINR(subtotal)}</span>
                  </div>
                  <p className='mt-1 text-xs text-muted'>Shipping and taxes calculated at checkout.</p>
                  <Button className='mt-4 w-full' size='lg' onClick={checkout}>
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
