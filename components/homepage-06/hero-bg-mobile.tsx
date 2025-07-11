'use client';
import './spline.css'
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';
const HeroBgMobile = () => {
  return (
    <div className='spline-container-mobile'>
     <Spline 
         
         scene="https://prod.spline.design/QwEQtaRF-yu5R0A6/scene.splinecode"
       />
     
    </div>
  )
}

export default HeroBgMobile
