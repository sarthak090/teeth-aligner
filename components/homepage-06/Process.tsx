'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import SplineCalendar from './3d/SplineCalendar'
import SplineDentalRecord from './3d/SplineDentalRecord'
import SplineScanDental from './3d/SplineScanDental'
import Image from 'next/image'
import DetnalAppointment from './icons/detnal-appointment'
import DentalScan from './icons/dental-scan'
import DentalReport from './icons/dental-report'
import DentalBadge from './icons/dental-badge'
const data = [
  {
    id: 1,
    step: 'Step 01',
    title: 'Submit Form',
    description: 'Fill out a quick form to get started.',
    icon:<DetnalAppointment/>
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Set Appointment',
    description: 'Choose a convenient time for your visit.',
    icon:<DentalScan/>
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

const Process = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })

  return (
    <section
      ref={triggerRef}
      className="service-section overflow-hidden bg-primary pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
      aria-labelledby="solutions-heading">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2 className="text-appear text-left text-secondary dark:text-secondary max-md:text-3xl max-sm:text-3xl">
                Our <br />
                <span className="font-instrument italic text-secondary dark:text-secondary">process</span>
                <span className="font-instrument italic text-secondary dark:text-secondary">for</span>
                <span className="font-instrument italic text-secondary dark:text-secondary">perfect smile</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-secondary/70 dark:text-secondary/70">
                  Experience a seamless journey to your perfect smile with our proven process. 
                  Let us guide you through each step of your teeth alignment transformation:
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-7 md:mt-14">
              <Link
                href="/contact"
                className="rv-button rv-button-white mx-auto block w-full text-center md:inline-block md:w-auto"
                aria-label="View our detailed service offerings">
                <div className="rv-button-top">
                  <span>Explore Our Services</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Explore Our Services</span>
                </div>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
        aria-label="Our service offerings">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-1 flex-col gap-4 rounded-none border-t-2 border-t-slate-700 bg-backgroundBody px-5 py-14 dark:border-t-primary dark:bg-black md:w-[370px] md:flex-row md:gap-[22px] md:px-[25px] md:py-[70px]">
            <div aria-hidden="true">
            <span className='w-12 h-12 flex justify-center items-center text-primary'>
                {item.icon}
              </span>
            </div>
            <div className="space-y-4 md:space-y-8">
              <h3 className="font-normal leading-[110%] tracking-[-1.08px] text-black dark:text-white max-md:text-2xl md:max-w-[200px] md:text-2xl">
                {item.title}
              </h3>
            
           
              <p className="text-base font-normal leading-6 tracking-[0.32px] text-colorText dark:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
