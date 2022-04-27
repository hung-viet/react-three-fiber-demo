import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Model from "./components/Model";

function Home() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <Model />
        <EffectComposer>
          <Bloom />
        </EffectComposer>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default Home;
