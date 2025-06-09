'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CompanyLogosMarquee from '../homepage-02/CompanyLogosMarquee'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const About = ({ marquee = false }: AboutProps) => {
  const { revealRef } = useReveal()

  if (marquee) {
    return (
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
        <div className="container">
          <RevealWrapper>
            <h3 className="pb-10 sm:pb-20" ref={revealRef}>
              We provide customized solutions for enhancing your existing site or building a brand-new digital platform
              from the ground up.
            </h3>
          </RevealWrapper>
          <RevealWrapper>
            <CircleTextAnimation />
          </RevealWrapper>

          <div className="flex flex-auto flex-col items-center justify-between gap-x-8 gap-y-14 pt-14 sm:pt-[70px] md:flex-row md:pt-[100px] xl:gap-x-28">
            <RevealWrapper className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark"></div>
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark"></div>

              <CompanyLogosMarquee />
            </RevealWrapper>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
          <CircleTextAnimation />
          <h3 className="mx-auto mt-[34px]" ref={revealRef}>
            We specialize in designing cutting-edge web <br className="hidden sm:block" />
            experiences that flawlessly blend creativity with <br />
            innovative technology.
            <br />
            <br />
            We provide customized solutions for <br className="hidden sm:block" />
            enhancing your existing site or building <br className="hidden sm:block" />a brand-new digital platform from
            the ground up
          </h3>
        </div>
      </div>
    </section>
  )
}
export default About
