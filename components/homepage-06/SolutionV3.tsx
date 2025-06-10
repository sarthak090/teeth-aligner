'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import SplineChewie from './3d/SplineChewie'
import SplineTeethRetriver from './3d/SplineTeethRetriver'
import SplineTube from './3d/SplineTube'
import SplineTeethAlignerBox from './3d/SplineTeethALignerBox'

const data = [
  // {
  //   id: 0,
  //   title: 'Aligner Box',
  //   description: 'Achieve a tighter, more comfortable fit with the AlignersFit™ Aligner Chewie — your go-to tool for getting the most out of your invisible aligners or retainers.',
  //   component: <SplineTeethAlignerBox />
  // },
  {
    id: 1,
    title: 'Aligner Chewie',
    description:
      'Achieve a tighter, more comfortable fit with the AlignersFit™ Aligner Chewie — your go-to tool for getting the most out of your invisible aligners or retainers.',
    component: <SplineChewie />,
  },
  {
    id: 2,
    title: 'Aligner Retriever',
    description:
      'Take the struggle out of removing your aligners with the AlignersFit™ Aligner Retriever — a compact, hygienic tool designed to make taking out your clear aligners or retainers effortless and mess-free.',
    component: <SplineTeethRetriver />,
  },
  {
    id: 3,
    title: 'Aligner Cleaning Foam',
    description:
      'Keep your aligners fresh, clean, and crystal-clear with AlignersFit™ Teeth Aligner Foam Cleaner — your daily companion for a healthier, more hygienic smile.',
    component: <SplineTube />,
  },
]

type Props ={
  whats_in_the_box:{
    chewie:{
      heading:string,
      description:string,
      
    },
    retriver:{
      heading:string,
      description:string,
    },
    cleaning_foam:{
      heading:string,
      description:string,
    }
  }
}

const IntheBoxHorizontalScroll = ({whats_in_the_box}:Props) => {
  const {chewie,retriver,cleaning_foam} = whats_in_the_box
  const data = [{
    id:1,
    title:chewie.heading,
    description:chewie.description,
    component:<SplineChewie />
  },
  {
    id:2,
    title:retriver.heading,
    description:retriver.description,
    component:<SplineTeethRetriver />
  },
  {
    id:3,
    title:cleaning_foam.heading,
    description:cleaning_foam.description,
    component:<SplineTube />
  }]
      return (
    <section
      className="service-section overflow-hidden bg-secondary pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
      aria-labelledby="solutions-heading">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2 className="text-appear text-left text-primary dark:text-secondary max-md:text-3xl max-sm:text-3xl">
                What's In The Box{' '}
                <span className="font-instrument italic text-primary dark:text-secondary">for your perfect smile</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-primary/70 dark:text-primary/70">
                Everything you need for a successful aligner journey, all in one box.
              </p>
            </TextAppearAnimation>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto mt-16"
        // className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
        aria-label="Our service offerings">
        <div className="grid md:grid-cols-2  bg-orange-gradient">
          <div className="col-span-1 space-y-1 border-r-2  border-secondary">
            {data.slice(0, 2).map((item) => (
              <div key={item.id} className="relative p-4 border-t-2 border-secondary flex flex-col items-center justify-center">
                <h3 className='text-white font-semibold text-left   mt-16 mb-4'>{item.title}</h3>
                <p className='text-white text-md text-left'>{item.description}</p>
                <div className="  md:w-full z-50 md:translate-y-5 w-[90%] h-72   ">{item.component}</div>
              </div>
            ))}
          </div>
          <div className="col-span-1 ">
            {data.slice(2, 3).map((item) => (
              <div key={item.id} className="bor relative p-4 h-full">
                <h3 className='text-white font-semibold   mt-16'>{item.title}</h3>
                <p className='text-white text-md '>{item.description}</p>
                <div className="  z-50 translate-y-5 h-[70%]">{item.component}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntheBoxHorizontalScroll
