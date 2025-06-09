'use client'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const servicesData = [
  {
    id: 1,
    title: 'Digital Smile Design',
    subtitle: 'Creating your perfect smile through advanced digital planning',
    items: [
      '3D Smile Analysis',
      'Digital Treatment Planning',
      'Before & After Simulation',
      'Custom Treatment Protocols',
      'Progress Tracking',
      'Virtual Consultation',
      'Treatment Timeline Planning',
      'Smile Design Consultation',
    ],
  },
  {
    id: 2,
    title: 'Clear Aligner Treatment',
    subtitle: 'Professional clear aligner solutions for a confident smile',
    items: [
      'Custom Clear Aligners',
      'Treatment Monitoring',
      'Progress Assessment',
      'Aligner Maintenance',
      'Comprehensive Care',
      'Follow-up Support',
    ],
  },
  {
    id: 3,
    title: 'Dental Technology',
    subtitle: 'State-of-the-art dental technology for precise results',
    items: [
      '3D Scanning',
      'Digital Impressions',
      'AI-Powered Analysis',
      'Remote Monitoring',
      'Treatment Progress Tracking',
      'Digital Records Management',
    ],
  },
  {
    id: 4,
    title: 'Patient Support',
    subtitle: 'Comprehensive care and support throughout your journey',
    items: [
      '24/7 Support',
      'Treatment Guidance',
      'Emergency Assistance',
      'Progress Monitoring',
      'Aftercare Support',
      'Patient Education',
    ],
  },
]

const ServicesV3 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row lg:justify-between">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear max-lg:leading-[1.33]">
                <span className="font-instrument italic lg:text-[65px]">Cool </span>
                services
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:justify-self-end md:text-right">
                Experience comprehensive orthodontic care with our advanced clear aligner technology, expert treatment planning, and dedicated patient support - all designed to give you the confident smile you deserve.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore Our Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore Our Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {servicesData.map((service, index) => (
            <div key={service.id} className="accordion-item overflow-hidden bg-secondary duration-300">
              <div
                className={`accordion-header group relative flex cursor-pointer justify-between px-5 py-[35px] md:px-10 ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}>
                <h3 className="flex flex-col gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-white md:flex-row md:items-center md:font-medium md:leading-[1.2] lg:text-5xl">
                  <span className="text-inherit">{service.title}</span>
                  <span className="mt-2 pr-[2px] text-base text-[#ffffff99] md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {service.subtitle}
                  </span>
                </h3>
                <div className="accordion-header-iconV3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="active-arrow absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 duration-300 ease-faq-body-transition group-hover:rotate-90 md:size-8">
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <div className="accordion-body ml-2.5 flex flex-col justify-start gap-x-10 px-10 pb-10 duration-300 sm:pt-6 md:ml-6 md:flex-row lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(Math.ceil(service.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ServicesV3
