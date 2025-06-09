'use client' 
import DetnalAppointment from "./icons/detnal-appointment";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroBgVideo from "./hero-bg-video"; 
import Link from "next/link"; 
import RevealWrapper from "../animation/RevealWrapper";
if (typeof window !== 'undefined'){
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

 
type Data = {
  normal_text?:string;
  highlight_text?:string;
}
export default function HeroSection({data}:{data?:Data}) {
  const heroSectionRef = useRef(null);
 const breakText = data?.normal_text?.split(' ')
  
   
  return (
    <div className=" px-16 hero-section " ref={heroSectionRef}>
      <HeroBgVideo />
      <div className="flex flex-col z-[10]   justify-center items-center md:items-start  h-screen">
      <div   className="hidden md:block md:absolute top-[180px] left-[-180px] -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl"></div>
      <div   className="hidden md:block md:absolute top-[100px] right-[-180px] -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl"></div>

        <h1 className="md:text-8xl text-gray-700 text-7xl z-10 text-center md:text-left font-semibold">
        <RevealWrapper>
         
          <span className="text-gray-700">  {breakText?.length ? breakText[0] :'Solution to'} {breakText && breakText[1]} </span>   <br/>
          <span className="text-gray-700">  {breakText?.length ? breakText[2] :'Perfect'}  </span>   <br/>
          <span className="orange-gradient-text">
            {data?.highlight_text ? data?.highlight_text : 'Smile'}
          </span>
         
          </RevealWrapper>
        </h1>

        {/* <Link className="z-10" target="_blank" href="https://api.leadconnectorhq.com/widget/bookings/alignersfit-invisalign">
        <button className="bg-[#FF5900] z-10 font-semibold max-w-fit text-white px-4 py-3 rounded-full mt-10 flex items-center gap-2">
          Book An Appointment{" "}
          <DetnalAppointment className="w-6 h-6 text-white" />
        </button>
        </Link> */}

        <Link href="https://api.leadconnectorhq.com/widget/bookings/alignersfit-invisalign" className="rv-button rv-button-secondary  mt-10">
                  <div className="rv-button-top  !w-full !text-center">
                    <span className="!font-normal"> Order Now</span>
                  </div>
                  <div className="rv-button-bottom !w-full !text-center">
                    <span className="!font-normal"> Get Started</span>
                  </div>
                </Link>
        

      </div>

       
    </div>
  );
}
