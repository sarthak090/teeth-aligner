import AboutV13 from '@/components/homepage-14/AboutV13'
import AwardWinningWork from '@/components/homepage-14/AwardWinningWork'
import HeroV14 from '@/components/homepage-14/HeroV14'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import ServicesV13 from '@/components/homepage-14/ServicesV13'
import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'Film Production Agency  - AlignersFit',
}

const homepage14 = () => {
  return (
    <LayoutTwo>
      <HeroV14 />
      <AboutV13 />
      <ServicesV13 />
      <OurWorkShowcase />
      <WhyChooseUsV3 />
      <AwardWinningWork />
      <TestimonialV9 />
      <CTA headingClass="xl:text-[88px]" buttonText="Start Your Film Project">
        Let’s Create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/09.png' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        Something
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Extraordinary</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage14
