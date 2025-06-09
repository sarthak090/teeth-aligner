'use client'
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

// Separate client component for the Spline wrapper
export default function SplineWrapper() {
  return (
    <Spline
      
     
      scene="https://prod.spline.design/Bi5cGQGkhDxar6Vo/scene.splinecode"
    />
  );
}

 
