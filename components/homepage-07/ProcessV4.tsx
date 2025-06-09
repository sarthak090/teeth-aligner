import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import SplineScanDental from '../homepage-06/3d/SplineScanDental'
import SplineCalendar from '../homepage-06/3d/SplineCalendar'
import SplineDentalRecord from '../homepage-06/3d/SplineDentalRecord'
import SplineBox from '../homepage-06/3d/SplineBox'

const ProcessV4 = () => {
  const steps = [
    {
      id: 1,
      title: 'Book an appointment',
      description:
        'You can schedule an appointment by searching for invisalign dentist near me. We will take a 3D scan of your teeth. Just wait for the follow-up consultation.',
      component: <SplineCalendar/>,
      offset: 24
    },
    {
      id: 2,
      title: 'Get Checked By Our Expert',
      description: `During the follow-up consultation, our dental expert will evaluate your situation for clear teeth alignment. Take help from the 3D scan from your previous session.`,
      component: <SplineScanDental/>,
      offset: 24
    },
    {
      id: 3,
      title: `Customized Treatment Plan`,
      description: `After the evaluation, our experts will design customized invisible braces for teeth. This plan to help align your teeth for the perfect smile you deserve.`,
      component: <SplineDentalRecord/>,
      offset: 24
    },
    {
      id: 4,
      title: `Receive Your AlignersFit`,
      description: `Once your smile teeth alignment is finalized, you'll get your customized dental aligner in a few weeks. Start wearing them for 20-22 hours daily. Also, if your expert tells you to change them, then make sure to do it weekly or bi-weekly.`,
      component: <SplineBox/>,
      offset: 24
    },
  ]
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Our Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Your Perfect Smile Journey</h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <div className="w-full">
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              {steps.map((step) => (
                <li key={step.id} className="w-full max-w-max px-10">
                    <div className="relative w-full">
                      <div className={`absolute left-[${step.offset}rem] -top-32 w-[80rem]`}>
                        {step.component}
                      </div>
                    </div>
                  <div className="bg-orange-gradient absolute left-0 flex items-center justify-center rounded-full border-backgroundBody px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">
                      {step.id}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="">{step.title}</h3>
                    <p className="mt-5 max-w-[483px]">{step.description}</p>
                  </div>
                
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV4
