'use client'
import { BlogType } from '@/app/ai-blog/page'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'

type CustomerType = {
  id: number
 
  image: string
 
  thumbnail: string
 
  badge: string
}
 

const posts = [
  {
    id: 1,
    
    
    thumbnail: '/images/customer/spacing-1.png',
    image: '/images/customer/spacing-1.png',
    
    badge: 'Spacing',
  },
  {
    id: 2,
   
    thumbnail: '/images/customer/spacing-2.png',
    image: '/images/customer/spacing-2.png',
    badge: 'Spacing',
  },
  {
    id: 3,
   
    thumbnail: '/images/customer/crowding-1.png',
    image: '/images/customer/crowding-1.png',
    badge: 'Crowding',
  },
  {
    id: 4,
   
    thumbnail: '/images/customer/crowding-2.png',
    image: '/images/customer/crowding-2.png',
    badge: 'Crowding',
  },
  {
    id: 5,
   
    thumbnail: '/images/customer/crowding-3.png',
    image: '/images/customer/crowding-3.png',
    badge: 'Crowding',
  },
  {
    id: 6,
   
    thumbnail: '/images/customer/overbite-1.png',
    image: '/images/customer/overbite-1.png',
    badge: 'Overbite',
  },
  {
    id: 7,
   
    thumbnail: '/images/customer/spacing-2.png',
    image: '/images/customer/spacing-2.png',
    badge: 'Spacing',
  },
]

type Data = {
  image:string;
  condition:string;
  } 
const Customer  = ({data} :{data: Data[]}) => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[10px] xl:pt-[100px]">
      <RevealWrapper>
        <Swiper
          className="md:!pl-[10%]"
          spaceBetween={24}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{ clickable: true }}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}>
          {data.map((item,index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-auto border p-1 max-w-[620px]">
                 
                  <figure className="overflow-hidden">
                    <img
                      src={item?.image}
                      alt={item?.condition}
                      className="block h-[390px]   object-contain transition-all duration-500 group-hover:rotate-3  group-hover:scale-125"
                    />
                  </figure>
                  <div className="absolute bottom-7 left-7">
                    <div className="mb-3 inline-block rounded-[72px] bg-primary/90 text-white">
                      <span className="inline-block px-[17px] py-2 text-xs font-medium uppercase tracking-[0.96px] text-backgroundBody">
                        {item?.condition}
                      </span>
                    </div>
                    
                   
                  </div>
                
              </div>
            </SwiperSlide>
          ))}
          <div className="mt-8 flex items-center space-x-2">
            <button className="swiper-prev-btn size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M27 16.25H5"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.25L5 16.25L14 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-next-btn size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M5 16.25H27"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.25L27 16.25L18 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </RevealWrapper>
    </section>
  )
}

export default Customer
