"use client";

import { useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture, useProgress, Html } from "@react-three/drei";
import { OBJLoader, MTLLoader } from "three-stdlib";
import * as THREE from "three";

function Model() {
  const materials = useLoader(MTLLoader, "/models/retainer.mtl");
  const obj = useLoader(OBJLoader, "/models/retainer.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const ref = useRef<THREE.Group>(null);

  // Custom transparent aligner material
  const alignerMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xffffff),
    transparent: true,
    transmission: 1,
    roughness: 0.05,
    metalness: 0,
    ior: 1.4,
    thickness: 0.5,
    attenuationColor: new THREE.Color(1, 1, 1),
    attenuationDistance: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  });

  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = alignerMaterial;
    }
  });

  return <primitive object={obj} ref={ref} scale={1} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

export default function AlignerModel() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <spotLight
          position={[5, 5, 5]}
          angle={Math.PI / 6}
          penumbra={0.3}
          decay={2}
          distance={20}
          castShadow
        />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
