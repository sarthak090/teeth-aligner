'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
  content:string
}

const HeroAbout = ({ spacingTop,content }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
      At AlignersFit, we go beyond just aesthetics. We believe that a beautiful smile starts with a healthy foundation. That’s why our approach combines personalized consultations, ongoing support, and expert care — ensuring your treatment is not only effective but also sustainable for long-term oral health.


      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
      At AlignersFit, we go beyond just aesthetics. We believe that a beautiful smile starts with a healthy foundation. That’s why our approach combines personalized consultations, ongoing support, and expert care — ensuring your treatment is not only effective but also sustainable for long-term oral health.


      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
