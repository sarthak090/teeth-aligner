"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './Box'
import { Environment, OrbitControls } from "@react-three/drei";

 

const Scene = () => {
  return (
    <div className='w-full h-full'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[10, 10, 10]} />
        <Environment files="/hdr/lobby.hdr" />
        <OrbitControls />
        <Model scale={0.5} />
      </Canvas>
       
    
    </div>
  )
}

export default Scene