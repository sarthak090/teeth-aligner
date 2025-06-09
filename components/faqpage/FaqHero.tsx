import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SplineTeethDoc from './SplineTeethDoc'
const FaqHero = () => {
  return (
    <section className="relative overflow-hidden pb-7 pt-32 md:pb-16 lg:pb-[88px] lg:pt-[140px] xl:pb-[100px] xl:pt-[180px]">
      <RevealWrapper className="flex flex-col items-center justify-center gap-y-8 pl-10 md:justify-between xl:flex-row">
        <div className="container max-sm:!-ml-[5%] lg:!ml-[10%] xl:!ml-[7%]">
          <p className="font-poppins flex items-center gap-5 text-sm font-normal uppercase leading-6 tracking-[3px] max-md:justify-center">
            AlignersFit
          </p>
          <h1 className="mt-2 block sm:mt-6 md:hidden">We are the brilliants in terms of digital marketing</h1>
          <h1 className="mt-6 hidden text-5xl font-medium md:block lg:text-6xl xl:text-7xl">
            Frequently Asked Questions
          </h1>
          <div className="mt-6">
           
            <p className="mt-4 text-gray-700">
              Find answers to common questions about AlignersFit's clear aligners, treatment process, pricing, and more. We're here to help you make an informed decision about your smile transformation journey.
            </p>

            {/* <div className="my-3 flex [&>*:not(:first-child)]:-ml-4">
              <img src="/images/home-5/review-1.png" alt="User" className="size-[52px]" />
              <img src="/images/home-5/review-2.png" alt="User" className="size-[52px]" />
              <img src="/images/home-5/review-3.png" alt="User" className="size-[52px]" />
              <Link
                href="#"
                className="group relative size-[52px] cursor-pointer rounded-full border-[1.9px] border-backgroundBody bg-secondary p-4 dark:bg-backgroundBody">
                <figure>
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="absolute inline -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:inline"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt="Arrow Icon"
                    className="absolute hidden -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:inline"
                  />
                </figure>
              </Link>
            </div> */}
            {/* <p className="text-base leading-[1.2] text-secondary dark:text-backgroundBody">
              <span className="text-primary">Trusted by 18k+</span> <br />
              Clients Across the Globe
            </p> */}
          </div>

          <ul className="mt-14 flex list-none justify-start">
            <li className="block w-full text-center md:inline-block md:w-auto">
              <Link href="/faq#faq" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>See FAQ</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">See FAQ</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <figure className="w-full md:h-[500px]">
          <SplineTeethDoc />
        </figure>
      </RevealWrapper>
    </section>
  )
}

export default FaqHero
