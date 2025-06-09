'use client'
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

// Separate client component for the Spline wrapper
function SplineWrapper() {
  return (
    <Spline
      className='w-full h-full scale-100'
     
      scene="https://prod.spline.design/eSgwN7XBg-UpSKZD/scene.splinecode"
    />
  );
}

export default function SplineCanvas() {
  return (
    <main className="z-[1000] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <SplineWrapper />
      </Suspense>
    </main>
  );
}
