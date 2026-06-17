'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '@/lib/types'

type CartState = {
  items: CartItem[]
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  add: (product: Product, size: number, qty?: number) => void
  remove: (key: string) => void
  setQty: (key: string, qty: number) => void
  clear: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: (product, size, qty = 1) =>
        set((s) => {
          const key = `${product.id}-${size}`
          const existing = s.items.find((i) => i.key === key)
          if (existing) {
            return {
              isOpen: true,
              items: s.items.map((i) =>
                i.key === key ? { ...i, qty: i.qty + qty } : i,
              ),
            }
          }
          const item: CartItem = {
            key,
            productId: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            size,
            qty,
          }
          return { isOpen: true, items: [...s.items, item] }
        }),
      remove: (key) => set((s) => ({ items: s.items.filter((i) => i.key !== key) })),
      setQty: (key, qty) =>
        set((s) => ({
          items: s.items
            .map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: 'solehaus-cart' },
  ),
)

export const selectCount = (s: CartState): number =>
  s.items.reduce((n, i) => n + i.qty, 0)

export const selectSubtotal = (s: CartState): number =>
  s.items.reduce((sum, i) => sum + i.price * i.qty, 0)
