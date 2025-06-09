import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import FaqHero from '@/components/faqpage/FaqHero'
import { getGlobalData } from '@/actions/queries'
export const metadata = {
  title: 'Faq',
}

const FAQPage = async () => {
  const data = await getGlobalData()
  return (
    <LayoutOne>
      <FaqHero  />
      <FAQ bigTitleWithBadge={false} data={data.faqs} />
      
    </LayoutOne>
  )
}

export default FAQPage
