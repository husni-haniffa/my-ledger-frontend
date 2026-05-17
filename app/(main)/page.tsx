import FAQ from '@/components/product/FAQ'
import Features from '@/components/product/Features'
import Hero from '@/components/product/Hero'
import HowItWorks from '@/components/product/HowItWorks'
import LandingScrollHandler from '@/components/product/LandingScrollHandler'

import Pricing from '@/components/product/Pricing'

const MainPage = () => {
  return (
    <>
      <LandingScrollHandler />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </>
  )
}

export default MainPage