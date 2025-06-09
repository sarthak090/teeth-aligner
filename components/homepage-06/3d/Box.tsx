"use client"
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
 
 
type GLTFResult = GLTF & {
  nodes: {
    Cover: THREE.Mesh
    Front: THREE.Mesh
    Subdiv: THREE.Mesh
    Right: THREE.Mesh
    Bottom: THREE.Mesh
  }
  // materials: {}
}
//@ts-expect-error 
export function Model(props: JSX.IntrinsicElements['group']) {
    //@ts-expect-error
  const { nodes } = useGLTF('/box.glb') as GLTFResult
  const frontRef = useRef<THREE.Mesh>(null)

  


  return (
    <group {...props}  dispose={null}>
      <group scale={0.01}>
        <group position={[148, -6, 0]} scale={1}>
          <group position={[-255.174, -206.816, 45.153]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cover.geometry}
              material={nodes.Cover.material}
              position={[2.33, 179.492, -0.16]}
              rotation={[-0.147, 0, Math.PI / 2]}
              scale={[0.008, 1.123, 0.302]}
            />
            <mesh
                ref={frontRef}
                castShadow
                receiveShadow
                geometry={nodes.Front.geometry}
              
                // material={labelMaterial}
                position={[2.142, -175.714, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.018, 1.157, 0.302]}
              >
                 
              </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Subdiv.geometry}
              material={nodes.Subdiv.material}
              position={[245.196, -27.954, 0]}
              scale={[0.018, 1.006, 0.302]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Right.geometry}
              material={nodes.Right.material}
              position={[-374.732, -27.954, 0]}
              scale={[0.018, 1.006, 0.302]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bottom.geometry}
              material={nodes.Bottom.material}
              position={[0.507, -27.535, -72.675]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.005, 0.994, 0.996]}
            />
          </group>
        </group>
        {/* <directionalLight intensity={0.7}   rotation={[-0.506, 0.629, 0.756]} /> */}
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[339.812, 245.524, 907.88]}
          rotation={[-0.264, 0.347, 0.092]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/box.glb')
