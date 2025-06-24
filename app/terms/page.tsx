import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Terms & Conditions',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const termsData: TermsDataType[] = getMarkDownData('data/policy')

const FAQPage = () => {
  return (
    <LayoutOne>
      <PageHero title="Terms & " italicTitle="Privacy" badgeTitle="" scale />
      <TermsPolicyBody termsData={termsData} />
      
    </LayoutOne>
  )
}

export default FAQPage
