import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SOLEHAUS — Premium Sneakers',
    short_name: 'SOLEHAUS',
    description: 'Premium sneakers & limited drops.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0b',
    theme_color: '#0a0a0b',
    icons: [],
  }
}
