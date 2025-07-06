import ContactForm from '@/components/contactpage/ContactForm'
import InfoBox from '@/components/contactpage/InfoBox'
import Map from '@/components/contactpage/Map'
  import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact AlignersFit',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Start Your Smile Journey"
        badgeTitle=""
        description="Get in touch with our dental experts to learn about our premium clear aligners and start your journey to a perfect smile."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <Map defaultCenter={{ lat: 43.8041, lng: -79.8088 }} mapKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 container '> 
        <ContactForm />
        <InfoBox className='col-span-1' /> 
      </div>
      <div className='pb-64'>
        
      </div>
       
    </LayoutOne>
  )
}

export default ContactPage
