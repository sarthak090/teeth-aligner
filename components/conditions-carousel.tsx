import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import GapingTeeth from '@/components/crooked-teeth/gaping';
import CrossBite from '@/components/crooked-teeth/crossbite';
import Crowding from '@/components/crooked-teeth/crowding';
import DeepBite from '@/components/crooked-teeth/deepbite';
import Openbite from '@/components/crooked-teeth/openbite';
import Overbite from '@/components/crooked-teeth/overbite';
import Underbite from '@/components/crooked-teeth/underbite';

const conditions = [
  {
    title: 'Gaping Teeth',
    description: 'Spaces between teeth that affect your smile\'s appearance and oral health.',
    Icon: GapingTeeth
  },
  {
    title: 'Cross Bite',
    description: 'When upper teeth fit inside lower teeth, affecting jaw alignment.',
    Icon: CrossBite
  },
  {
    title: 'Crowding',
    description: 'Teeth that overlap or are rotated due to insufficient space.',
    Icon: Crowding
  },
  {
    title: 'Deep Bite',
    description: 'When upper front teeth excessively overlap the lower front teeth.',
    Icon: DeepBite
  },
  {
    title: 'Open Bite',
    description: 'When front teeth don\'t overlap, creating a gap when biting.',
    Icon: Openbite
  },
  {
    title: 'Overbite',
    description: 'When upper front teeth overlap the lower front teeth too much.',
    Icon: Overbite
  },
  {
    title: 'Underbite',
    description: 'When lower front teeth protrude beyond the upper front teeth.',
    Icon: Underbite
  }
];

export default function ConditionsCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {conditions.map((condition, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                <condition.Icon className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
              </div>
              <h3 className="text-xl font-bold mb-2">{condition.title}</h3>
              <p className="text-gray-600">{condition.description}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg after:!text-blue-500 hover:!bg-blue-50 transition-colors" />
        <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg after:!text-blue-500 hover:!bg-blue-50 transition-colors" />
      </Swiper>

      <style jsx global>{`
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 1.2rem !important;
        }
      `}</style>
    </div>
  );
} 