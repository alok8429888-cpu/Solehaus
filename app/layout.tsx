import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { QuickView } from '@/components/product/QuickView'
import { ToastViewport } from '@/components/ui/ToastViewport'
import { SmoothScroll } from '@/components/providers/SmoothScroll'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { PageTransition } from '@/components/providers/PageTransition'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { JsonLd } from '@/components/seo/JsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SOLEHAUS',
  url: 'https://solehaus.vercel.app',
  description: 'Premium sneakers & limited drops.',
}

const themeInitScript = {
  __html:
    "try{var t=localStorage.getItem('solehaus-theme')||'volt';document.documentElement.setAttribute('data-theme',t);}catch(e){}",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://solehaus.vercel.app'),
  title: 'SOLEHAUS — Premium Sneakers & Limited Drops',
  description:
    'Curated premium sneakers, interactive 3D product viewing and limited drops. Welcome to SOLEHAUS.',
  keywords: ['sneakers', 'premium shoes', 'limited drops', 'SOLEHAUS'],
  manifest: '/manifest.webmanifest',
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
        <script dangerouslySetInnerHTML={themeInitScript} />
        <MotionProvider>
          <SmoothScroll>
            <AnnouncementBar />
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScroll>
          <CartDrawer />
          <QuickView />
          <ToastViewport />
          <CustomCursor />
          <ThemeSwitcher />
        </MotionProvider>
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  )
}
