'use client';

import Spline from '@splinetool/react-spline';
import clsx from 'clsx';
import { Suspense } from 'react';

export default function SplineFullBox({className}: {className?: string}) {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center w-full h-full min-h-[400px] bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading 3D Scene...</p>
        </div>
      </div>
    }>

    {/* https://prod.spline.design/QwEQtaRF-yu5R0A6/scene.splinecode */}
      <Spline 
        className={clsx(className)}
        scene="https://prod.spline.design/QwEQtaRF-yu5R0A6/scene.splinecode"
      />
    </Suspense>
  );
}
