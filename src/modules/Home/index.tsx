import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, PrimitiveProps } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Model from "./components/Model";
import Instruction from "./components/Instruction";
import Rig from "./components/Rig";
import LeftRightSwipe from "./components/LeftRightSwipe";

function Home() {
  const model = useRef<PrimitiveProps>(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model ref={model} />
          <EffectComposer>
            <Bloom />
          </EffectComposer>
          <LeftRightSwipe model={model} />
          {/* <Rig /> */}
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <Loader />
      <Instruction />
    </div>
  );
}

export default Home;
