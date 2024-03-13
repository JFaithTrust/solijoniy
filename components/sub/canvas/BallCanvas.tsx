"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { OrbitControls, Preload } from "@react-three/drei";
import Loader from "./Loader";
import Ball from "./Ball";

interface Props {
  icon: string;
}

const BallCanvas = ({ icon }: Props) => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  // });
 
  return (
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
  );
};

export default BallCanvas;
