import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import Image from 'next/image'
import DetnalAppointment from './icons/detnal-appointment'
import DentalScan from './icons/dental-scan'
import DentalReport from './icons/dental-report'
import DentalBadge from './icons/dental-badge'
import DentalForm from './icons/dental-form'
const data = [
  {
    id: 1,
    step: 'Step 01',
    title: 'Submit Form',
    description: 'Fill out a quick form to get started.',
    icon:<DentalForm/>
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Set Appointment',
    description: 'Choose a convenient time for your visit.',
    icon:<DetnalAppointment/>
  },
  {
    id: 3,
    step: 'Step 03',
    title: 'Get 3d Scanned',
    description: 'We’ll scan your teeth for a perfect fit.',
    icon:<DentalReport/>
  },
  {
    id: 4,
    step: 'Step 04',
    title: 'Receive Aligner',
    description: 'Your custom aligners arrive at your doorstep.',
    icon:<DentalBadge/>
  },
]
type Props ={
  data: {
    id: number
    step: string
    heading : string
    description: string
    icon: React.ReactNode
    link: string
  }[]
} 

function renderIcon(title: string) {
  switch (title) {
    case 'Submit Form':
      return <DentalForm className='w-20 h-20'/>
    case 'Set Appointment':
      return <DetnalAppointment className='w-20 h-20' />
    case 'Get 3d Scanned':
      return <DentalReport className='w-20 h-20' />
    case 'Receive Aligner':
      return <DentalBadge className='w-20 h-20' />
  }
}
const ProcessV8 = (props:Props) => {
  const dataObject = props.data
  const data = Object.values(dataObject).slice(0, 4)
  // console.log(data)
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container" id='how-it-works'>
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text ">Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
            Get started in these  simple steps  


             </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">A simple roadmap to perfect smile</p>
          </TextAppearAnimation>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {data.map((item:{heading:string,description:string},index) => (
            <RevealWrapper key={index} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 gap-4 border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-[72px] bg-primary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    Step 0{index+1}
                  </span>
                </div>
             
             
                <div className='h-full w-full flex justify-center items-center item-icon'>
                <span className='text-primary w-16 h-16'>
                   {renderIcon(item.heading)}
                </span>
                </div>
                <h6 className="text-xl font-semibold  leading-[1.1] text-primary dark:text-white">{item.heading}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Start Your Journey</span>
              </div>
              <div className="rv-button-bottom text-nowrap">
                <span>Start Your Journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV8
