import HeroV24 from '@/components/homepage-24/HeroV24'
import MarqueeV5 from '@/components/homepage-24/MarqueeV5'
import ProcessV11 from '@/components/homepage-24/ProcessV11'
import ProjectCaseStudies from '@/components/homepage-24/ProjectCaseStudies'
import ServicesV16 from '@/components/homepage-24/ServicesV16'
import TestimonialV12 from '@/components/homepage-24/TestimonialV12'
import WhatWeOffer from '@/components/homepage-24/WhatWeOffer'
import WhyChooseUsV8 from '@/components/homepage-24/WhyChooseUsV8'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Management Consulting Agency - AlignersFit',
}

const homepage23 = () => {
  return (
    <LayoutTwo>
      <HeroV24 />
      <MarqueeV5 />
      <WhatWeOffer />
      <ServicesV16 />
      <WhyChooseUsV8 />
      
     
      
    </LayoutTwo>
  )
}

export default homepage23
