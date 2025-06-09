import image01 from '@/public/images/customer/box/1.jpg'
import image02 from '@/public/images/customer/box/2.jpeg'
import image03 from '@/public/images/customer/box/3.jpg'
import image04 from '@/public/images/customer/box/4.jpeg'
import image05 from '@/public/images/customer/box/5.jpeg'
 
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
type Props ={
  data:string[]
}
const OurWork = ({data}:Props) => {
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
            {data.slice(0, 5).map((item,index) => (
              <div key={index} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={item} alt={item} width={300} height={300} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-4 pt-[30px] md:gap-[30px]">
            {data.toReversed().map((item,index) => (
              <div key={index} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={item} alt={item} width={300} height={300} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurWork
