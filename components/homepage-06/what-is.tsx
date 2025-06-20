'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LazyLoadVideo from './lazyLoadVideo'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Props={
  featured_texts:{
    text_1:string,
    text_2:string,
    text_3:string,
    text_4:string,
  }
  subtitle:string,
  description:string,
}
export default function WhatIsAlignersFit(props:Props) {
  useGSAP(
    () => {
      // Main title animation
      gsap.from('.what-is-alignersfit-text', {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.what-is-alignersfit-text',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // About section text animation
      gsap.from('.about-section', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Cards animation with stagger
      gsap.from('.feature-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.feature-card',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Video animation
      gsap.from('.video-container', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.video-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    { dependencies: ['.what-is-alignersfit-text'] },
  )
      const data=Object.values(props.featured_texts)
  return (
    <section className="container mx-auto my-6 px-4 py-6 md:my-12 md:px-6 md:py-12">
      <p className="md:leading-30 what-is-alignersfit-text text-4xl font-semibold md:text-6xl lg:text-8xl">
        What is <span className="orange-gradient-text ">AlignersFit?</span>
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4 z-10">
        <div className="order-2 grid grid-cols-1 gap-4 lg:order-1 lg:col-span-2">
          <p className="text-md orange-gradient-text about-section -mb-4 font-semibold">About Us</p>
          <p className="about-section text-2xl font-semibold md:text-3xl lg:text-4xl">
            {props.subtitle}
          </p>
          <p className="about-section mt-4 text-base leading-7 md:text-lg">
            {props.description}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.map((item,index)=>(
              <div key={index} className="feature-card flex items-center justify-between rounded-full border-[1px] border-[#EFEFEF] bg-white p-4 font-medium">
                {item}
              </div>
            ))}
            
          </div>
        </div>

        <div className=" order-1 -z-10 lg:order-2 lg:col-span-2 lg:translate-x-10">
          <LazyLoadVideo
            src="/video/aligner-process.mp4"
            className="video-animation  md:scale-125"
          />
        </div>
      </div>
    </section>
  )
}
