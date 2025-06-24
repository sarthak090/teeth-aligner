"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, OBJLoader } from "three-stdlib";

export default function ObjViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true;
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    const spotLight = new THREE.SpotLight(0xffffff, 1.2);
    spotLight.position.set(5, 5, 5);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.3;
    spotLight.decay = 2;
    spotLight.distance = 20;
    spotLight.castShadow = true;
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Transparent aligner material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xffffff),
      transparent: true,
      transmission: 1, // makes it look like clear plastic/glass
      opacity: 0.3, // adjust based on how clear you want it
      roughness: 0.1,
      metalness: 0,
      thickness: 0.01,
      ior: 1.4, // index of refraction close to plastic
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });

    // Load OBJ only (no MTL)
    const objLoader = new OBJLoader();
    objLoader.setPath("/models/");
    objLoader.load(
      "retainer.obj",
      (object) => {
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = material;
          }
        });
        scene.add(object);
      },
      undefined,
      (err) => {
        console.error("Failed to load OBJ:", err);
      }
    );

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
