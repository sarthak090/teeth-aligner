// import Hero from '@/components/homepage-01/Hero'
// import Portfolio from '@/components/homepage-01/Portfolio'
// import Testimonial from '@/components/homepage-01/Testimonial'
// import About from '@/components/shared/About'
// import ClientsV3 from '@/components/shared/ClientsV3'
// import Community from '@/components/shared/Community'
// import CTA from '@/components/shared/CTA'
// import CtaImageSlider from '@/components/shared/CtaImageSlider'
// import FAQ from '@/components/shared/FAQ'
// import LayoutOne from '@/components/shared/LayoutOne'
// import ServicesV8 from '@/components/shared/ServicesV8'
// import Video from '@/components/shared/Video'

// export const metadata = {
//   title: 'AlignersFit | Design Agency',
// }

// const Home = () => {
//   return (
//     <LayoutOne>
//       <Hero />
//       <Video />
//       <About />
//       <Portfolio />
//       <ClientsV3 />
//       <ServicesV8 />
//       <Community />
//       <FAQ />
//       <Testimonial />
//       <CTA>
//         Let's chat!
//         <CtaImageSlider
//           slides={[
//             { id: '1', img: '/images/agent/01.jpg' },
//             { id: '2', img: '/images/agent/02.jpg' },
//             { id: '3', img: '/images/agent/03.jpg' },
//           ]}
//         />
//         with us.
//         <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
//       </CTA>
//     </LayoutOne>
//   )
// }

// export default Home
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
import ProcessV8 from '@/components/homepage-06/ProcessV8'
import ProcessV9 from '@/components/homepage-20/ProcessV9'
import TestimonialV8 from '@/components/homepage-12/TestimonialV8'
import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import Process from '@/components/homepage-06/Process'
import WhatIs from '@/components/homepage-06/what-is'
import BlogPostV7 from '@/components/homepage-12/BlogPostV7'
import Customer from '@/components/homepage-06/Customer'
import OurWork from '@/components/homepage-07/OurWork'
import {  getHomePageData } from '@/actions/queries'
import Loader from '@/components/homepage-06/Loader'
 
export const generateMetadata = async () => {
  const data = await getHomePageData()
  const customData = data.custom_data
  const seoData = customData.rank_math
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.focus_keyword,
    robots: seoData.robots,
    canonical: seoData.canonical,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      images: [seoData.image],
      url: seoData.canonical,
      siteName: seoData.site_name,
      locale: seoData.locale,
      type: seoData.type,
    }

  }
}

const HomePage = async () => {
  const data = await getHomePageData()
  const globalData = data.global_content
  
  return (
    <LayoutOne>
      {/* 
      <HowToGet/>
      <WhatIsAlignersFit />
      <WhyAligner /> */}
     
      {/* <BlogPostsV3 /> */}
      <Loader acf={data.acf}/>
      {/* <section className='relative'>


       <HeroSection data={data.acf.main_heading} />
      </section> */}
    
      {/*
     
      <WhatIsAlignersFit />
     
   */}
      <PricingCard showHeader={true} packages={globalData.packages} />
     
      <ProcessV8 data={data.acf.process} /> 
      {/* <Process /> */}
      {/* <WhyAligner />  */}
      <WhatIs 
      featured_texts={data.acf.what_is_alignersfit.featured_texts}
      subtitle={data.acf.what_is_alignersfit.subtitle}
      description={data.acf.what_is_alignersfit.description}
      /> 
      <TestimonialV9 testimonials={globalData.testimonials}  />
      <FAQ data={globalData.faqs} />
      <Customer data={globalData.before_and_after} />

      <OurWork data={globalData.gallery} />
      
      {/* <TestimonialV6 /> 
      <ClientsV3 /> */}

      

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
        Let's
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

export default HomePage
