import { MarkdownData } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import ComputerDental from './icons/computer-dental'
import DentalScan from './icons/dental-scan'
import TeethReport from './icons/teeth-report'
import ClearAligners from './icons/clear-aligners'

const businessSolutionServices: MarkdownData[] = [
  // {
  //   slug: 'clear-aligners',
  //   title: 'Clear Aligners',
  //   description: 'Custom-made, virtually invisible aligners that gradually straighten your teeth without metal brackets or wires.',
  //   lightLogo: '/images/services/clear-aligners-light.svg',
  //   darkLogo: '/images/services/clear-aligners-dark.svg',
  //   icon: <ClearAligners className='text-primary ' />,
  //   serialNumber: 1,
  //   content: 'Our clear aligners are custom-made using advanced 3D printing technology to ensure a perfect fit for your teeth. They are virtually invisible, comfortable to wear, and can be easily removed for eating and cleaning.'
  // },
  {
    slug: 'digital-scanning',
    title: 'Digital Scanning',
    description: 'Advanced 3D scanning technology for precise digital impressions of your teeth, eliminating messy traditional molds.',
    lightLogo: '/images/services/digital-scanning-light.svg',
    darkLogo: '/images/services/digital-scanning-dark.svg',
    icon: <DentalScan width={100} height={100} />,
    serialNumber: 2,
    content: 'Experience the future of dental impressions with our state-of-the-art 3D scanning technology. No more uncomfortable traditional molds - just a quick, painless scan that creates a precise digital model of your teeth.'
  },
  {
    slug: 'treatment-planning',
    title: 'Treatment Planning',
    description: 'Personalized treatment plans with 3D visualization of your expected results before starting the journey.',
    lightLogo: '/images/services/treatment-planning-light.svg',
    darkLogo: '/images/services/treatment-planning-dark.svg',
    icon: <TeethReport className='text-primary' width={100} height={100} />,
    serialNumber: 3,
    content: 'Get a clear vision of your smile transformation with our detailed treatment planning. Our advanced software shows you exactly how your teeth will move and what your final smile will look like.'
  },
  {
    slug: 'remote-monitoring',
    title: 'Remote Monitoring',
    description: 'AI-powered progress tracking and virtual check-ins to ensure your treatment stays on track.',
    lightLogo: '/images/services/remote-monitoring-light.svg',
    darkLogo: '/images/services/remote-monitoring-dark.svg',
    icon: <ComputerDental width={100} height={100} />,
    serialNumber: 4,

    content: 'Stay on track with your treatment through our innovative remote monitoring system. Take progress photos through our app and receive instant feedback from our dental professionals.'
  },
   
]

const sliceOne = businessSolutionServices
 

const ServicesV11 = () => {
  return (
    <section className="">
     

      <div className="flex flex-wrap md:grid md:grid-cols-2 md:gap-2 justify-center  max-lg:gap-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card1 */}

        <RevealWrapper
             
            className="group relative min-h-[260px] w-full overflow-hidden ">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 flex flex-col justify-center items-center translate-y-0 px-1 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                
               <ClearAligners className='text-primary -translate-y-4' />
                 
                <h5 className="-translate-y-16  text-2xl font-semibold text-primary flex justify-center items-center leading-[1.2] -tracking-[1.08px]">Clear Aligners</h5>
                {/* <p className='text-md'>{service.description}</p> */}
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-orange-gradient px-[30px] py-4 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
               
                <h5 className="mb-3 mt-9 text-2xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                    Clear Aligners
                </h5>
                <p className="mb-10 text-backgroundBody dark:text-secondary">Custom-made, virtually invisible aligners that gradually straighten your teeth without metal brackets or wires.</p>
                 
              </div>
            </div>
          </RevealWrapper>
        {sliceOne.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[260px] w-full overflow-hidden ">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 flex flex-col justify-center items-center translate-y-0 px-1 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                
                {service.icon}
                 
                <h5 className="  text-2xl font-semibold text-primary flex justify-center items-center leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                {/* <p className='text-md'>{service.description}</p> */}
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-orange-gradient px-[30px] py-4 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
               
                <h5 className="mb-3 mt-9 text-2xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-10 text-backgroundBody dark:text-secondary">{service.description}</p>
                 
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
     
    </section>
  )
}

export default ServicesV11
