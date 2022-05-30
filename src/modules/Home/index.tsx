import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Model from "./components/Model";
import Instruction from "./components/Instruction";

function Home() {
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
          <Model />
          <EffectComposer>
            <Bloom />
          </EffectComposer>
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <Loader />
      <Instruction />
    </div>
  );
}

export default Home;
