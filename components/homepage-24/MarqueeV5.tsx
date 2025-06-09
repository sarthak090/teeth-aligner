'use client'
import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import RevealWrapper from '../animation/RevealWrapper'

const MarqueeV5 = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div>
        <RevealWrapper as="p" className="reveal-me container mb-8 text-center lg:mb-16">
          Meet Our Brand Ambassadors
        </RevealWrapper>
        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="w-full overflow-hidden">
            <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap whitespace-nowrap">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="z-50 flex h-32 w-48 flex-shrink-0 flex-col items-center justify-center border-y border-r border-y-secondary/10 border-r-secondary/10 bg-backgroundBody p-4 dark:border-y-backgroundBody/10 dark:border-r-backgroundBody/10 dark:bg-dark">
                  <img src={item.logo} alt={item.alt} className="mb-2 h-16 w-16 rounded-full object-cover dark:hidden" />
                  <img src={item.darkLogo} alt={item.alt} className="mb-2 hidden h-16 w-16 rounded-full object-cover dark:inline-block" />
                  <p className="text-sm font-medium text-center">{item.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarqueeV5
