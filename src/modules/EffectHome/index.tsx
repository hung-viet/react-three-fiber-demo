import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Balls from "./components/Balls";

function EffectHome() {
  return (
    <>
      <Canvas style={{ backgroundColor: "#000000" }}>
        <Suspense fallback={null}>
          <ambientLight />
          <Balls />
          <EffectComposer>
            <Bloom />
          </EffectComposer>
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default EffectHome;
