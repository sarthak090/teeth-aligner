import { getPageDataBySlug ,getAllPages} from '@/actions/queries'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Content from '@/components/pageDetails/Content'
import FAQ from '@/components/shared/FAQ'
import { notFound } from 'next/navigation'



export async function generateStaticParams() {
    const pageData = await getAllPages()
    return pageData.map((page:any) => ({
        slug: page.slug
    }))
}

export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

// const termsData: TermsDataType[] = getMarkDownData('data/policy')

export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
    const {slug} = await params
    const pageData = await getPageDataBySlug(slug)
    if(pageData.length === 0) return notFound()
    const termsData = pageData[0]
    return {
        title: termsData.title.rendered,
        description: termsData.acf.meta_description || ""
    }
}
const Page = async ({params}:{params:Promise<{slug:string}>}) => {
 const {slug} = await params
    const pageData = await getPageDataBySlug(slug)
    if(pageData.length === 0) return notFound()
    const termsData = pageData[0]
  const faqs = termsData.acf.faqs
  
  return (
    <LayoutOne>
    <PageHero title={termsData.title.rendered} italicTitle={termsData.acf.italic_title|| ""} badgeTitle={termsData.acf.badge_title|| "" } scale />
      <Content termsData={termsData.content.rendered} heading={true}  headingContent={termsData.acf.heading} />
      {faqs &&  <FAQ data={faqs} />}
      
    </LayoutOne>
  )
}

export default Page
