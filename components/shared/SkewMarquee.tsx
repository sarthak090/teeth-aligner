'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_IMAGES = [
  { id: 1, src: '/images/customer.png' },
  { id: 2, src: '/images/customer.png' },
  { id: 3, src: '/images/customer.png' },
  { id: 4, src: '/images/customer.png' },
  { id: 5, src: '/images/customer.png' },
  { id: 6, src: '/images/customer.png' },
  { id: 7, src: '/images/customer.png' },
  { id: 8, src: '/images/customer.png' },
  { id: 9, src: '/images/customer.png' },
  { id: 10, src: '/images/customer.png' },
  { id: 11, src: '/images/customer.png' },
  { id: 12, src: '/images/customer.png' },
]

const SkewMarquee = ({images}:{images:string[]}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  function createMarqueeScroll(target: HTMLElement, partSelector: string) {
    const items = gsap.utils.toArray<HTMLElement>(partSelector)

    const itemCount = items.length / 2
    const totalWidth = target.scrollWidth / 2

    gsap.to(target, {
      x: `-=${totalWidth}`,
      duration: itemCount * 2,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0)),
      },
    })
  }

  useGSAP(
    () => {
      if (containerRef.current && marqueeRef.current) {
        createMarqueeScroll(marqueeRef.current, '.marquee-part')

        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        })
      }
    },
    { scope: containerRef },
  )

  return (
    <section className="relative w-full pb-16 pt-24 lg:pb-48">
      <div
        ref={containerRef}
        style={{
          transform:
            'translate3d(-200px, 0px, 0px) scale3d(1, 1, 1) rotateX(30deg) rotateY(17deg) rotateZ(342deg) skew(7deg, 359deg)',
          transformStyle: 'preserve-3d',
        }}>
        <div ref={marqueeRef} className="flex flex-nowrap gap-5">
          {images.map((img,index) => (
            <figure key={index} className="marquee-part z-50 flex flex-shrink-0 items-center justify-center">
              <Image width={370} height={400} src={img} alt={`Marquee ${index}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkewMarquee
