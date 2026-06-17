import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, products } from '@/lib/data/products'
import { ProductDetail } from '@/components/product/ProductDetail'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return { title: 'Not found — SOLEHAUS' }
  return {
    title: `${product.name} — SOLEHAUS`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  if (!product) notFound()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  }
  return (
    <>
      <JsonLd data={jsonLd} />
      <ProductDetail product={product} />
      <RelatedProducts current={product} />
    </>
  )
}
