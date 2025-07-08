'use client'
import DetnalAppointment from './icons/detnal-appointment'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import HeroBgVideo from './hero-bg-video'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type Data = {
  normal_text?: string
  highlight_text?: string
}
export default function HeroSection({ data }: { data?: Data }) {
  const heroSectionRef = useRef(null)
  const breakText = data?.normal_text?.split(' ')

  return (
    <div className="hero-section relative  px-4 md:px-16 flex items-center md:min-h-[900px]" ref={heroSectionRef}>
      <div className=''>
      <HeroBgVideo />
      </div>
      
      <div className="z-[10] mt-12 md:mt-0 flex h-screen flex-col w-full items-center justify-center md:items-start ">
        <div className="left-[-180px] top-[180px] -z-10 hidden h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl md:absolute md:block"></div>
        <div className="right-[-180px] top-[100px] -z-10 hidden h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl md:absolute md:block"></div>

        <h1 className="z-10 mt-72 md:mt-0 text-center text-[3.2rem] font-semibold pointer-events-none  text-gray-700 md:text-left md:text-8xl">
          <RevealWrapper>
            <span className="text-gray-700">
              {' '}
              {breakText?.length ? breakText[0] : 'Solution to'} {breakText && breakText[1]}{' '}
            </span>{' '}
            <br />
            <span className="text-gray-700"> {breakText?.length ? breakText[2] : 'Perfect'} </span> <br />
            <span className="orange-gradient-text">{data?.highlight_text ? data?.highlight_text : 'Smile'}</span>
          </RevealWrapper>
        </h1>

        {/* <Link className="z-10" target="_blank" href="https://api.leadconnectorhq.com/widget/bookings/alignersfit-invisalign">
        <button className="bg-[#FF5900] z-10 font-semibold max-w-fit text-white px-4 py-3 rounded-full mt-10 flex items-center gap-2">
          Book An Appointment{" "}
          <DetnalAppointment className="w-6 h-6 text-white" />
        </button>
        </Link> */}

        <Link
          href="https://api.leadconnectorhq.com/widget/bookings/alignersfit-invisalign"
          className="rv-button rv-button-secondary mt-10">
            
            
          <div className="rv-button-top !w-full !text-center">
            <span className="!font-normal"> Order Now</span>
          </div>
          <div className="rv-button-bottom !w-full !text-center">
            <span className="!font-normal"> Order Now</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
