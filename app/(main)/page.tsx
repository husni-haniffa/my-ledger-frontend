import FAQ from '@/components/product/FAQ'
import Features from '@/components/product/Features'
import Hero from '@/components/product/Hero'
import HowItWorks from '@/components/product/HowItWorks'
import Pricing from '@/components/product/Pricing'

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Pricing/>
      <FAQ/>
    </div>
  )
}

export default MainPage