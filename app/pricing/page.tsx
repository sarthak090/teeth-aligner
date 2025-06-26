import HeroV5 from '@/components/homepage-06/HeroV5'
import PricingCard from '@/components/homepage-07/PricingCard'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import { getGlobalData, getPageDataById } from '@/actions/queries'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = async () => {
  const data = await getGlobalData()
  const pricingData = await getPageDataById('309')
  const faqs = pricingData.acf.faqs

  return (
    <LayoutOne>
      <HeroV5/>   
    
    <div className='container' >
      <PricingCard packages={data.packages} />
       <FAQ data={faqs} />
    </div>
    </LayoutOne>
  )
}

export default PricingPage
