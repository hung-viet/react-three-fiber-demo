import React, { useEffect } from "react";
import { useFrame, PrimitiveProps } from "@react-three/fiber";

type Props = {
  model: React.RefObject<PrimitiveProps>;
};

let mouseX = 0;
const LeftRightSwipe: React.FC<Props> = ({ model }) => {
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX - window.innerWidth / 2;
    console.log(event.clientX - window.innerWidth / 2);
  };

  return useFrame(() => {
    if (!model.current) return;
    model.current.rotation.y += mouseX > 0 ? 0.05 : -0.05;
  });
};

export default LeftRightSwipe;
