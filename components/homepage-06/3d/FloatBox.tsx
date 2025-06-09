"use client";

import { forwardRef,  } from "react";
import { Float } from "@react-three/drei";

import { Model } from "./Box";
import { Group } from "three";

 

const FloatingCan = forwardRef<Group>(
  (
    {
      
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
           
        >
          <Model />
         
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;