import type { MetadataRoute } from 'next'
import { products } from '@/lib/data/products'

const base = 'https://solehaus.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/cart', '/checkout'].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }))
  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: now,
  }))
  return [...staticRoutes, ...productRoutes]
}
