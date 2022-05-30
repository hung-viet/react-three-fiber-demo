import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02
    )
  );
};

export default Rig;
