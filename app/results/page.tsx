 
import HeroSection from '@/components/results/HeroBg'
 
import LayoutOne from '@/components/shared/LayoutOne'
import FAQ from '@/components/shared/FAQ'
import PricingCard from '@/components/homepage-07/PricingCard' 
import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import OurWork from '@/components/results/OurWork'
import { getGlobalData } from '@/actions/queries'
  export const metadata = {
  title: 'Results | AlignersFit',
}

const HomePage = async () => {
  const data = await getGlobalData()
  const testimonials = data.testimonials

  return (
    <LayoutOne>
      
      <section className='relative'>


       <HeroSection />
      </section>
    
    <div id="results">
    <OurWork />

<PricingCard showHeader={true} packages={data.packages} />


    </div>
      
     
    
      <TestimonialV9 testimonials={testimonials} />
      <FAQ data={data.faqs} />
 

      
       
    </LayoutOne>
  )
}

export default HomePage
