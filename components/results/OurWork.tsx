import image01 from '@/public/images/customer/spacing-1.png'
import image02 from '@/public/images/customer/spacing-2.png'
import image03 from '@/public/images/customer/crowding-1.png'
import image04 from '@/public/images/customer/crowding-2.png'
import image05 from '@/public/images/customer/crowding-3.png'
import image06 from '@/public/images/customer/overbite-1.png'
 
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WORK_IMAGES = [
  { id: 1, src: image01, alt: 'Client Logo 1' },
  { id: 2, src: image02, alt: 'Client Logo 2' },
  { id: 3, src: image03, alt: 'Client Logo 3' },
  { id: 4, src: image04, alt: 'Client Logo 4' },
  { id: 5, src: image02, alt: 'Client Logo 5' },
  { id: 6, src: image04, alt: 'Client Logo 6' },
  { id: 7, src: image02, alt: 'Client Logo 7' },
  { id: 8, src: image01, alt: 'Client Logo 8' },
  { id: 9, src: image03, alt: 'Client Logo 9' },
]


// const WORK_IMAGES = [
//   {
//     id: 1,
    
    
//     thumbnail: '/images/customer/spacing-1.png',
//     src: '/images/customer/spacing-1.png',
    
//     alt: 'Spacing',
//   },
//   {
//     id: 2,
   
//     thumbnail: '/images/customer/spacing-2.png',
//     src: '/images/customer/spacing-2.png',
//     alt: 'Spacing',
//   },
//   {
//     id: 3,
   
//     thumbnail: '/images/customer/crowding-1.png',
//     src: '/images/customer/crowding-1.png',
//     alt: 'Crowding',
//   },
//   {
//     id: 4,
   
//     thumbnail: '/images/customer/crowding-2.png',
//     src: '/images/customer/crowding-2.png',
//     alt: 'Crowding',
//   },
//   {
//     id: 5,
   
//     thumbnail: '/images/customer/crowding-3.png',
//     src: '/images/customer/crowding-3.png',
//     alt: 'Crowding',
//   },
//   {
//     id: 6,
   
//     thumbnail: '/images/customer/overbite-1.png',
//     src: '/images/customer/overbite-1.png',
//     alt: 'Overbite',
//     },
//   {
//     id: 7,
   
//     thumbnail: '/images/customer/spacing-2.png',
//     src: '/images/customer/spacing-2.png',
//     alt: 'Spacing',
//   },
// ]


const OurWork = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
           
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">From Scan to Smile – Here’s What’s Next.</h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center gap-4 md:gap-[30px]">
            {WORK_IMAGES.slice(0, 5).map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px] object-cover">
                <Image src={src} alt={alt} width={370} height={470} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-4 pt-[30px] md:gap-[30px]">
            {WORK_IMAGES.toReversed().map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px] object-cover">
                <Image src={src} alt={alt} width={370} height={470} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurWork
