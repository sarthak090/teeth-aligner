import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Text_4: THREE.Mesh
    Text_3: THREE.Mesh
    Text_2: THREE.Mesh
    Text: THREE.Mesh
    ['1000133971png']: THREE.Mesh
    Label: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {}
}
useGLTF.preload('/models/cleaner_tube.gltf')


export default function TubeModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/cleaner_tube.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-84.456, 22.064, 123.006]}
          rotation={[-0.099, 0.013, 0.016]}
          scale={[1.741, 1.602, 1.437]}>
          <group position={[0.257, 9.342, 54.599]}>
            <mesh
              geometry={nodes.Text_4.geometry}
              material={nodes.Text_4.material}
              position={[4.05, -138.434, -0.229]}
            />
            <mesh
              geometry={nodes.Text_3.geometry}
              material={nodes.Text_3.material}
              position={[4.05, -130.434, -0.229]}
            />
            <mesh
              geometry={nodes.Text_2.geometry}
              material={nodes.Text_2.material}
              position={[-0.382, -2.201, -0.361]}
            />
            <mesh
              geometry={nodes.Text.geometry}
              material={nodes.Text.material}
              position={[2.303, 13.799, -0.831]}
            />
            <mesh
              geometry={nodes['1000133971png'].geometry}
              material={nodes['1000133971png'].material}
              position={[-0.616, 120.668, 1.072]}
              scale={[1, 1, 4.485]}
            />
            <mesh
              geometry={nodes.Label.geometry}
              material={nodes.Label.material}
              position={[0, 0, -1.072]}
            />
          </group>
          <mesh
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[0, 21.049, 4.743]}
          />
        </group>
        <directionalLight intensity={0.7}   rotation={[-0.506, 0.629, 0.756]} />
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[-88.82, 139.824, 989.98]}
          rotation={[-0.139, 0.026, 0.004]}
        />
      </group>
    </group>
  )
}

