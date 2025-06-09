import React  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
    activeStep:number,
    setActiveStep:React.Dispatch<React.SetStateAction<number>>
}

export default function ProcessSwiper(props: Props) {
  const { setActiveStep} = props;
//   const slideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial animation for the first slide
    const tl = gsap.timeline();
    
    tl.fromTo(
      '.swiper-slide-active .slide-content',
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
    .fromTo(
      '.swiper-slide-active .orange-gradient-text',
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    )
    .fromTo(
      '.swiper-slide-active .text-gray-400',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  }, []);

  const steps = [
    {
      id: 1,
      title: "Book an appointment",
      description: "You can schedule an appointment by searching for invisalign dentist near me. We will take a 3D scan of your teeth. Just wait for the follow-up consultation.",
      icon: 'SplineCalendar'
    },
    {
      id: 2,
      title: 'Get Checked By Our Expert',
      description: `During the follow-up consultation, our dental expert will evaluate your situation for clear teeth alignment. Take help from the 3D scan from your previous session.`
    },
    {
      id: 3,
      title: `Customized Treatment Plan`,
      description: `After the evaluation, our experts will design customized invisible braces for teeth. This plan to help align your teeth for the perfect smile you deserve.`
    },
    {
      id: 4,
      title: `Receive Your AlignersFit`,
      description: `Once your smile teeth alignment is finalized, you'll get your customized dental aligner in a few weeks. Start wearing them for 20-22 hours daily. Also, if your expert tells you to change them, then make sure to do it weekly or bi-weekly.`
    }
  ]
 
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveStep(swiper.activeIndex + 1);
    
    // Enhanced animation for slide changes
    const tl = gsap.timeline();
    
    tl.fromTo(
      '.swiper-slide-active .slide-content',
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
    .fromTo(
      '.swiper-slide-active .orange-gradient-text',
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    )
    .fromTo(
      '.swiper-slide-active .text-gray-400',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  };

  return (
    <div className="w-full relative">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          background: white !important;
          border-radius: 50% !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
          margin: 0px -10px !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          color: #FF5900 !important;
          font-weight: bold !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #FF5900 !important;
          transform: scale(1.1) !important;
        }

        .swiper-button-next:hover:after,
        .swiper-button-prev:hover:after {
          color: white !important;
        }

        .swiper-button-disabled {
          opacity: 0 !important;
          cursor: not-allowed !important;
        }

        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #E5E7EB !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: #FF5900 !important;
          width: 24px !important;
          border-radius: 5px !important;
        }
      `}</style>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full bg-white shadow-md grid grid-cols-1 gap-8  rounded-md "
        onSlideChange={handleSlideChange}
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="slide-content p-12 py-16">
              <p className="text-xl font-semibold mb-4  ">
                <span className="orange-gradient-text mr-4">{String(step.id).padStart(2, '0')}</span>
                {step.title}
              </p>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}