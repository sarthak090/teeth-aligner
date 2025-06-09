import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV24 = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-14 pt-[137px] md:pb-16 md:pt-[160px] lg:pb-[88px] xl:pb-[112px] xl:pt-[220px]"
      aria-labelledby="hero-heading">
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img
          src="/images/hero-gradient-background.png"
          alt="hero"
          id="hero-gradient"
          className="left-0 top-0"
          role="presentation"
        />
      </div>
      <RevealWrapper className="reveal-me mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <RevealWrapper
            as="h1"
            id="hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]">
            Join Our <br className="hidden md:block" />
            Brand Ambassador <br className="hidden md:block" />
            <span className="font-instrument">Program</span>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl">
            Become a part of the AlignersFit family and help others achieve their perfect smile. Earn rewards while sharing your journey and inspiring others to transform their lives through clear aligners.
          </RevealWrapper>

          <div className="mt-7 md:mt-9 lg:mt-14">
            <Link
              href="/apply-ambassador"
              className="rv-button rv-button-primary rv-button-sm block md:inline-block"
              aria-label="Apply to be a Brand Ambassador">
              <div className="rv-button-top text-center">
                <span>Apply Now</span>
              </div>
              <div className="rv-button-bottom text-center">
                <span className="text-nowrap">Apply Now</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Brand ambassador imagery">
          <figure>
            <img
              src="/images/hero-img/ambassador-1.png"
              alt="Happy person showing their smile transformation"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure>
            <img
              src="/images/hero-img/ambassador-2.png"
              alt="Brand ambassador sharing their experience"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV24
