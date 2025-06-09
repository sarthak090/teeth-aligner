'use client'
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

// Separate client component for the Spline wrapper
function SplineWrapper() {
  return (
    <Spline
       
     
      scene="https://prod.spline.design/pE3FT9ARykXZ1EI7/scene.splinecode"
    />
  );
}

export default function SplineDetnalScan() {
  return (
    < >
      <Spline
       
      className='w-[10px]'
       scene="https://prod.spline.design/pE3FT9ARykXZ1EI7/scene.splinecode"
     />
    </ >
  );
}
