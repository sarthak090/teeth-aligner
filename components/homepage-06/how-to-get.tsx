"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import dynamic from "next/dynamic";
import Image from "next/image";
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

const SplineCanvas = dynamic(() => import("./3d/Spline"), { ssr: false });
const SplineCalendar = dynamic(() => import("./3d/SplineCalendar"), { ssr: false });
const SplineDetnalScan = dynamic(() => import("./3d/SplineDetnalScan"), { ssr: false });
const SplineDentalRecord = dynamic(() => import("./3d/SplineDentalRecord"), { ssr: false });
const ProcessSwiper = dynamic(() => import("./process-swiper"), { ssr: false });

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);
}

export default function HowToGet() {
  const { contentRef, triggerRef } = useHorizontalScroll()

  const [activeStep, setActiveStep] = useState(1);
  function renderIcon(step: number) {
    switch (step) {
      case 1:
        return <SplineCalendar />;
      case 2:
        return <SplineDetnalScan />;
      case 3:
        return <SplineDentalRecord />;
      case 4:
        return <SplineCanvas />;
    }
  }

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

     
       
    },
    {
      dependencies: [
        ".subheading-text",
        
      ],
    }
  );

  return (
    <div className="container p-8 relative my-24      how-to-get-section-container">
      <div className="absolute top-0 right-[-80px] -z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-2xl"></div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white shadow-md grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 rounded-md">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-normal lg:leading-15">
                How To Get{" "}
                <span className="orange-gradient-text">AlignersFit</span>
              </h2>
            </div>
            <div className="text-gray-400 text-sm sm:text-base">
              Start with a free smile assessment online. Once approved,
              we&aposll ship your impression kit or schedule a 3D scan.{" "}
            </div>
          </div>
          <ProcessSwiper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <div className="flex justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8 how-to-get-section-container-inner">
          {renderIcon(activeStep)}
        </div>
      </section>
    </div>
  );
}
