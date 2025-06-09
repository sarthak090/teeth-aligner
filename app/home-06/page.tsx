import AboutV9 from '@/components/homepage-06/AboutV9'
import BlogPostsV3 from '@/components/homepage-06/BlogPostsV3'
import CustomerTestimonials from '@/components/homepage-06/customer-testimonials'
import HeroSection from '@/components/homepage-06/hero-section'
import HeroV6 from '@/components/homepage-06/HeroV6'
import HowToGet from '@/components/homepage-06/how-to-get'
import Packages from '@/components/homepage-06/packages'
import ProcessV5 from '@/components/homepage-06/ProcessV5'
import ServicesV9 from '@/components/homepage-06/ServicesV9'
import TestimonialV6 from '@/components/homepage-06/TestimonialV6'
import WhatIsAlignersFit from '@/components/homepage-06/what-is'
import WhyAligner from '@/components/homepage-06/why-aligner'
import { Faqs } from '@/components/homepage-06/faqs'
import ClientsV3 from '@/components/shared/ClientsV3'
import ClientV4 from '@/components/shared/ClientV4'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import FAQ from '@/components/shared/FAQ'
import PricingCard from '@/components/homepage-07/PricingCard'
import PricingV2 from '@/components/homepage-15/PricingV2'
import PricingV4 from '@/components/homepage-19/PricingV4'
import PricingV5 from '@/components/homepage-22/PricingV5'
import ProcessV4 from '@/components/homepage-07/ProcessV4'
import ProcessV6 from '@/components/homepage-11/ProcessV6'
import ProcessV7 from '@/components/homepage-12/ProcessV7'
import ProcessV8 from '@/components/homepage-16/ProcessV8'
import ProcessV9 from '@/components/homepage-20/ProcessV9'
export const metadata = {
  title: 'AlignersFit',
}

const page = () => {
  return (
    <LayoutOne>
      {/* 
      <HowToGet/>
      <WhatIsAlignersFit />
      <WhyAligner /> */}
     
      {/* <BlogPostsV3 /> */}
      <section className='relative'>


      <HeroSection />
      </section>
    
      <ProcessV4 />
     
      <WhatIsAlignersFit />
      <WhyAligner /> 
      <FAQ />
      <PricingCard showHeader={true} />
     
        
      
      <TestimonialV6 /> 
      <ClientsV3 />

      

      {/* 
      {/* <HeroV6 /> */}
      {/* <AboutV9 />
      <ClientsV3 />
      <BlogPostsV3 />
      <ServicesV9 />
      <ClientV4 />
      <ProcessV5 />
      <TestimonialV6 /> */}

      {/* <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/07.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        Create
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Something Iconic</span>
      </CTA> */}
    </LayoutOne>
  )
}

export default page
