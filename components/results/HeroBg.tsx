'use client'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapperV2'

export default function HeroBg() {
  const videoRef = useRef(null)
  const headingRef = useRef(null)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      // Blur animation for video
      tl.fromTo(
        videoRef.current,
        { filter: 'blur(12px)' },
        { filter: 'blur(2px)', duration: 2 }
      )

      // Heading animation
      tl.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.5'
      )

      // Button animation
      tl.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=1.0'
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="hero-section h-screen w-full">
      <div className="relative h-full w-full">
        {/* Video background */}
        <div
          ref={videoRef}
          className="absolute inset-0 h-full w-full overflow-hidden"
        >
          <video
            className="object-cover h-full w-full"
            src="/video/hero-mockup.mp4"
            loop
            autoPlay
            muted
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-16 text-center">
          <h1
            ref={headingRef}
            className="text-[3.2rem] font-semibold text-gray-700 md:text-8xl"
          >
            <RevealWrapper>
              <span className="text-gray-700">Your New <br /> </span><span className="orange-gradient-text">Smile is Ready!</span>
            </RevealWrapper>
          </h1>

          <Link
            ref={buttonRef}
            href="#results"
            className="rv-button rv-button-secondary mt-10"
          >
            <div className="rv-button-top !w-full !text-center">
              <span className="!font-normal">See Results</span>
            </div>
            <div className="rv-button-bottom !w-full !text-center">
              <span className="!font-normal">See Results</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
