'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let rx = 0
    let ry = 0
    let dx = 0
    let dy = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      dx = e.clientX
      dy = e.clientY
      const dot = dotRef.current
      if (dot) dot.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role=button], input, textarea, select')
      document.body.classList.toggle('cursor-hover', !!interactive)
    }
    const loop = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      const ring = ringRef.current
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div ref={dotRef} className='cursor-dot' aria-hidden='true' />
      <div ref={ringRef} className='cursor-ring' aria-hidden='true' />
    </>
  )
}
