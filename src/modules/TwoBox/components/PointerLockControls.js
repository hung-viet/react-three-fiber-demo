import { useRef } from "react";
import { PointerLockControls as PointerLockControlsExt } from "@react-three/drei";

const PointerLockControls = () => {
  const ref = useRef();

  return <PointerLockControlsExt ref={ref} />;
};

export default PointerLockControls;
