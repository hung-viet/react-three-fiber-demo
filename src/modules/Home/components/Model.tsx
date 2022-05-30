import React from "react";
import { useLoader, PrimitiveProps } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useControls } from "leva";

const Model: React.ForwardRefRenderFunction<PrimitiveProps> = (_, ref) => {
  // This reference will give us direct access to the mesh
  const gltf: any = useLoader(
    GLTFLoader,
    "/assets/models/military_mech/scene.gltf"
  );

  // const { scale, positionX, positionY, positionZ } = useControls({
  //   scale: { value: 1, min: 0, max: 50, step: 0.1 },
  //   positionX: { value: 0, min: -100, max: 100 },
  //   positionY: { value: 0, min: -100, max: 100 },
  //   positionZ: { value: 0, min: -100, max: 100 },
  // });

  if (!gltf) return null;

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={0.015}
      rotation={[Math.PI / 8, 0, 0]}
    />
  );
};

export default React.forwardRef(Model);
