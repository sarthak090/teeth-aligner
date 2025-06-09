'use client'
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplineFullBox = dynamic(() => import('./3d/SplineFullBox'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
});

type PackageFeature = {
  text: string;
  included: boolean;
};

type Package = {
  name: string;
  price: number;
  features: PackageFeature[];
  link: string;
};

const Packages = () => {
  const packagesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef);
 

  const packages: Package[] = [
    {
      name: 'In Clinic',
      price: 3499.00,
      link: '/product/in-clinic-package-one',
      features: [
        { text: 'Personalized Treat Plan', included: true },
        { text: 'In-person Consultation', included: true },
        { text: 'Follow-up Sessions', included: true },
        { text: '24/7 Support', included: true },
      ],
    },
    {
      name: 'Virtual',
      price: 2999.00,
      link: '/product/virtual-package-one',
      features: [
        { text: 'Personalized Treatment Plan', included: true },
        { text: 'Video Consultation', included: true },
        { text: 'Follow-up Sessions', included: true },
        { text: '24/7 Support', included: true },
      ],
    },
  ];

  return (
    <div className="relative py-6 md:py-12 px-4" ref={packagesRef}>
      <div className="absolute top-[180px] right-[-180px] -z-10 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-br from-[#005BD1] via-[#FFCB90] to-[#FF0004] opacity-50 blur-3xl"></div>

      <div className="container mx-auto py-6 md:py-12">
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='col-span-1 grid grid-cols-1 gap-4 p-2'>
            <p className='text-3xl md:text-4xl font-bold leading-10'>
              Solution to
              <br />
              <span className='orange-gradient-text'>Perfect
                Smile
              </span>
            </p>

            <p className='max-w-xl text-left text-sm md:text-base'>Choose the best package for you , feel free to contact us for more information</p>
            <div className='flex'>
              <video 
                ref={videoRef}
                src={isVideoInView ? '/pckg.mp4' : ''} 
                autoPlay 
                muted 
                loop 
                className='w-full object-contain rounded-lg' 
              />
            </div>
          </div>
          <div className='col-span-1 lg:col-span-3 grid grid-cols-1 gap-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-4xl md:text-6xl font-bold orange-gradient-text leading-30'>Our Packages</p>
              <p className='text-gray-600 text-sm md:text-base'>Choose the package that best suits your needs</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {packages.map((pkg, index) => (
                <div key={index} className='bg-white rounded-lg p-4 shadow-md'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-2'>{pkg.name}</h3>
                  <p className='text-xl md:text-2xl font-semibold mb-2'>${pkg.price} </p>
                  <div className='flex flex-col gap-2'>
                    {pkg.features.map((feature, index) => (
                      <div key={index} className='flex items-center gap-2 my-2 text-base md:text-lg medium-font'>
                        <span className={`${feature.included ? 'text-green-500' : 'text-red-500'}`}>{feature.included ?'check' : 'xcheck'}</span>
                        <p className='text-gray-600'>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={pkg.link}>
                    <button className='bg-orange-gradient hover:bg-orange-600 transition-all duration-300 cursor-pointer mt-4 w-full text-white px-4 py-2 rounded-md text-sm md:text-base'>Book Now</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;