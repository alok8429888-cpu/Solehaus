import { Hero } from '@/components/home/Hero'
import { BrandMarquee } from '@/components/home/BrandMarquee'
import { CategoryStrip } from '@/components/home/CategoryStrip'
import { TrendingSection } from '@/components/home/TrendingSection'
import { FeaturedDrop } from '@/components/home/FeaturedDrop'
import { Newsletter } from '@/components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <CategoryStrip />
      <TrendingSection />
      <FeaturedDrop />
      <Newsletter />
    </>
  )
}
