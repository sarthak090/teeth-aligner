import AboutHero from '@/components/aboutpage-02/AboutHero'
import TeamGallery from '@/components/aboutpage-02/TeamGallery'
import Clients from '@/components/homepage-03/Clients'
import ServicesV3 from '@/components/homepage-03/ServicesV3'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import CtaV2 from '@/components/shared/CtaV2'
import FaqV2 from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'
import { getAboutPageData, getGlobalData } from '@/actions/queries'

export const metadata = {
  title: 'About Us',
}

const AboutPage = async () => {
  const data = await getAboutPageData()
 const globalData = await getGlobalData()
   
  return (
    <LayoutOne>
      <AboutHero heading={data.acf.heading} description={data.acf.description} />
      <Video />
      <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" content={data.acf.content} />
      <SkewMarquee images={data.acf.gallery} />
      <ServicesV3 />
      {/* <TeamGallery />
      <Clients /> */}
      <FaqV2 data={globalData.faqs} />
      <CtaV2 />
    </LayoutOne>
  )
}

export default AboutPage
