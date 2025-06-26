import { getPageDataById } from '@/actions/queries'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Privacy & Policy',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

// const termsData: TermsDataType[] = getMarkDownData('data/terms')

 

const FAQPage =async () => {

  const termsData = await getPageDataById('295')
  const faqs = termsData.acf.faqs
  
  return (
    <LayoutOne>
      <PageHero title="Privacy & " italicTitle="Policy" badgeTitle="" scale />
      <TermsPolicyBody termsData={termsData.content.rendered} heading={true} headingContent={termsData.acf.heading} />
      {faqs &&  <FAQ data={faqs} />}
    </LayoutOne>
  )
}

export default FAQPage
