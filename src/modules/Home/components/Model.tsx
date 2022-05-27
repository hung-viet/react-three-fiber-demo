import React, { useRef } from "react";
import { useLoader, useFrame, PrimitiveProps } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useControls } from "leva";

const Model = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<PrimitiveProps>();
  const gltf: any = useLoader(
    GLTFLoader,
    "/assets/models/military_mech/scene.gltf"
  );

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    mesh.current && (mesh.current.rotation.y += 0.01);
  });

  // const { scale, positionX, positionY, positionZ } = useControls({
  //   scale: { value: 1, min: 0, max: 50, step: 0.1 },
  //   positionX: { value: 0, min: -100, max: 100 },
  //   positionY: { value: 0, min: -100, max: 100 },
  //   positionZ: { value: 0, min: -100, max: 100 },
  // });

  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      scale={0.015}
      rotation={[Math.PI / 8, 0, 0]}
    />
  );
};

export default Model;
