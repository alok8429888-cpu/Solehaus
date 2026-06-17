import type { Product } from '@/lib/types'

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'phantom-flux-volt',
    name: 'Phantom Flux',
    brand: 'SOLEHAUS Lab',
    price: 14999,
    compareAtPrice: 18999,
    category: 'running',
    colorway: 'Volt / Obsidian',
    colors: ['#D8FF34', '#0A0A0B'],
    sizes: [6, 7, 8, 9, 10, 11],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A featherweight racer with a sculpted carbon plate and responsive volt-foam cushioning. Built for those who chase the horizon.',
    badge: 'New',
    featured: true,
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 'p2',
    slug: 'monolith-mid-bone',
    name: 'Monolith Mid',
    brand: 'SOLEHAUS Lab',
    price: 17999,
    category: 'lifestyle',
    colorway: 'Bone / Sand',
    colors: ['#E7E1D5', '#C8B79B'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A sculptural high-top with premium full-grain leather and a monochrome silhouette. Quiet luxury for the street.',
    badge: 'Bestseller',
    featured: true,
    rating: 4.8,
    reviews: 168,
  },
  {
    id: 'p3',
    slug: 'apex-court-retro',
    name: 'Apex Court Retro',
    brand: 'SOLEHAUS Pro',
    price: 12999,
    compareAtPrice: 15999,
    category: 'basketball',
    colorway: 'Chicago Red',
    colors: ['#C8102E', '#0A0A0B', '#FFFFFF'],
    sizes: [7, 8, 9, 10, 11, 12],
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A heritage court silhouette reissued with modern cushioning. Tournament grip, timeless attitude.',
    badge: 'Sale',
    featured: true,
    rating: 4.7,
    reviews: 302,
  },
  {
    id: 'p4',
    slug: 'eclipse-runner-noir',
    name: 'Eclipse Runner',
    brand: 'SOLEHAUS Lab',
    price: 13499,
    category: 'running',
    colorway: 'Triple Noir',
    colors: ['#0A0A0B', '#1C1C22'],
    sizes: [6, 7, 8, 9, 10, 11],
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Stealth-tuned daily trainer with a seamless knit upper and midnight-black tooling. Goes with everything.',
    featured: true,
    rating: 4.6,
    reviews: 121,
  },
  {
    id: 'p5',
    slug: 'vapor-drift-ice',
    name: 'Vapor Drift',
    brand: 'SOLEHAUS Pro',
    price: 21999,
    category: 'limited',
    colorway: 'Ice Glass',
    colors: ['#BFE9FF', '#FFFFFF'],
    sizes: [7, 8, 9, 10, 11],
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A limited translucent build with a chrome cage and frosted sole. Only a few pairs make it to the shelf.',
    badge: 'Limited',
    featured: true,
    soldOut: false,
    rating: 5.0,
    reviews: 64,
  },
  {
    id: 'p6',
    slug: 'terra-trail-clay',
    name: 'Terra Trail',
    brand: 'SOLEHAUS Outdoor',
    price: 15999,
    category: 'running',
    colorway: 'Clay / Olive',
    colors: ['#B66A3F', '#5C5A33'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A rugged trail companion with aggressive lugs and a rock-shield plate. Built to go off the map.',
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 'p7',
    slug: 'studio-low-pearl',
    name: 'Studio Low',
    brand: 'SOLEHAUS Lab',
    price: 11999,
    compareAtPrice: 13999,
    category: 'lifestyle',
    colorway: 'Pearl White',
    colors: ['#FFFFFF', '#E7E1D5'],
    sizes: [5, 6, 7, 8, 9, 10],
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A minimalist low-top in clean pearl leather. The everyday staple that quietly elevates any fit.',
    badge: 'Sale',
    rating: 4.7,
    reviews: 276,
  },
  {
    id: 'p8',
    slug: 'flux-zero-carbon',
    name: 'Flux Zero',
    brand: 'SOLEHAUS Pro',
    price: 24999,
    category: 'limited',
    colorway: 'Carbon Volt',
    colors: ['#0A0A0B', '#D8FF34'],
    sizes: [8, 9, 10, 11],
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Our flagship racer. Full carbon plate, aerospace foam, and a volt accent that means business.',
    badge: 'Limited',
    rating: 4.9,
    reviews: 47,
  },
]

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured)
}

export function getByCategory(slug: string): Product[] {
  if (slug === 'all') return products
  return products.filter((p) => p.category === slug)
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
