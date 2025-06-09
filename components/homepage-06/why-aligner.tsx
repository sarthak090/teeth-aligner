'use client'
import dynamic from 'next/dynamic';
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import LazyLoadVideo from './lazyLoadVideo';
import SplineFullBox from "./3d/SplineFullBox";

const SplineClosebox = dynamic(() => import("./3d/SplineClosebox"), { ssr: false });
gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);
 


const WhyAligner = () => {

  const subheadingText = useRef<HTMLDivElement>(null);
  const whyAlignersFit = useRef<HTMLDivElement>(null);
 
  

  useGSAP(
    () => {
      const subheadingTexts = gsap.utils.toArray(".subheading-text");
      subheadingTexts.forEach((text, index) => {
        //@ts-ignore
        gsap.from(text, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 50%",
            scrub: true,
          },
        });
      });

      const tl = gsap.timeline();

      gsap.from(".why-alignersfit-text", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
          trigger:'.why-alignersfit-text',
          start:"top 85%",
          end:"bottom 50%",
          scrub:true,
        }
      });

      // New animations for videos
      const videoAnimation = gsap.utils.toArray(".video-animation");
      videoAnimation.forEach((video, index) => {
        gsap.from(video as HTMLElement, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
          trigger: ".video-animation",
          start: "top 80%",
          end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animation for the box image
      gsap.from(".box-image", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".box-image",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animation for the grid sections
      gsap.from(".grid-section", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".grid-section",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
       
    },
    {
      dependencies: [
        ".subheading-text",
        ".why-alignersfit-text",
        ".why-text",
        ".alignersfit-text",
        ".video-animation",
        ".box-image",
        ".grid-section"
      ],
    }
  );
  return (
    <div className="container mx-auto relative my-6 md:my-12 px-4 md:px-0 why-aligner-section-container">

        <section
        ref={whyAlignersFit}
        className="grid grid-cols-1 gap-4 md:gap-8 my-6 md:my-12 relative"
    >
        <div className="absolute top-[-250px] left-[-240px] -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
            <p className="text-4xl md:text-6xl lg:text-8xl why-alignersfit-text md:ml-8 font-semibold leading-tight md:leading-30">
            <span className="why-text text-gray-700" >
                Why
            </span>{" "}
            <br />
            <span
                className="orange-gradient-text alignersfit-text"
            >
                AlignersFit?
            </span>
            </p>
        </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="col-span-1 flex flex-col justify-center order-2 md:order-1">
            <p
                ref={subheadingText}
                className="text-lg md:text-xl mb-2 md:mb-4 font-semibold leading-7 md:leading-10"
            >
                Customized for Your Smile
            </p>
            <p className="  leading-6 md:leading-7 text-sm md:text-base">
                AlignersFit uses precise 3D scanning technology to create
                aligners that are perfectly tailored to your unique teeth
                structure. This personalized fit ensures more comfort, faster
                results, and a seamless journey to your dream smile.
            </p>
            </div>
            <div className="col-span-1 order-1 md:order-2">
            <LazyLoadVideo
                src="/video/aligner-process.mp4"
                className="w-full h-full scale-100 md:scale-125 md:translate-x-12 object-cover video-animation"
            />  
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 col-span-3">
        <LazyLoadVideo
            src="/video/invisible.mp4"
            className="w-full h-full object-cover video-animation order-1 md:order-1"
        />
            <div className="grid grid-cols-1 p-2 md:p-4 gap-4 md:gap-8 order-2 md:order-2">
            <p
                ref={subheadingText}
                className="text-lg md:text-2xl font-semibold leading-7 md:leading-10"
            >
                Invisible and Lifestyle-Friendly
            </p>
            <p className="t leading-6 md:leading-7 text-sm md:text-base">
                Unlike traditional braces, AlignersFit aligners are nearly
                invisible, allowing you to straighten your teeth without anyone
                noticing. Plus, they are removable, meaning you can eat, drink,
                and maintain your oral hygiene routines easily.
            </p>
            </div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:col-span-2  grid-section">
              <div className="flex items-end justify-end"></div>
              <div className="items-center justify-center">
              <p
                  ref={subheadingText}
                  className="text-lg md:text-2xl font-semibold leading-7 md:leading-10 mb-2 md:mb-4"
              >
                  Affordable Excellence with Expert Support
              </p>
              <p className="  leading-6 md:leading-7 text-sm md:text-base max-w-2xl">
                  AlignersFit offers high-quality aligners at a price that's much
                  more affordable than many other options, without compromising on
                  technology or results. You also get access to professional
                  support throughout your treatment to ensure everything stays on
                  track.
              </p>
              </div>
          </div>
           <div className="col-span-1    relative h-[400px] w-[400px]">
              {/* <SplineFullBox className=''/> */}
             
          </div>  
        </div>
        </section>
  </div>
  )
}

export default WhyAligner;