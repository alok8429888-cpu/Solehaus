import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { ToastViewport } from '@/components/ui/ToastViewport'
import { SmoothScroll } from '@/components/providers/SmoothScroll'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SOLEHAUS — Premium Sneakers & Limited Drops',
  description:
    'Curated premium sneakers, interactive 3D product viewing and limited drops. Welcome to SOLEHAUS.',
  keywords: ['sneakers', 'premium shoes', 'limited drops', 'SOLEHAUS'],
  openGraph: {
    title: 'SOLEHAUS — Premium Sneakers & Limited Drops',
    description: 'Curated premium sneakers with interactive 3D viewing.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${archivo.variable}`}>
      <body className='min-h-screen bg-ink font-sans text-cream antialiased'>
        <SmoothScroll>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <CartDrawer />
        <ToastViewport />
      </body>
    </html>
  )
}
