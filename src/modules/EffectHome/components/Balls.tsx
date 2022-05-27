import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Vector3,
  useLoader,
  useFrame,
  PrimitiveProps,
  MeshProps,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GEOMETRY = new THREE.SphereGeometry(0.05, 30, 30);
const MATERIAL = new THREE.MeshBasicMaterial({ color: "#ffffff" });
const vevtor = new THREE.Vector3();
const positions = Array(20)
  .fill(0)
  .map((_, index) => index - 10);

const getY = (function () {
  let isIncreasing = false;
  let y = 0;

  const calculateY = () => {
    if (y >= 2) {
      isIncreasing = false;
    } else if (y <= -2) {
      isIncreasing = true;
    }

    y += isIncreasing ? 0.1 : -0.1;
    return y;
  };

  return calculateY;
})();

const Balls = () => {
  return (
    <>
      {positions.map((x) =>
        positions.map((z) => {
          return (
            <Ball
              x={x}
              y={getY()}
              z={z}
              geometry={GEOMETRY}
              material={MATERIAL}
            />
          );
        })
      )}
    </>
  );
};

const Ball: React.FC<{
  x: number;
  y: number;
  z: number;
  geometry: THREE.SphereGeometry;
  material: THREE.MeshBasicMaterial;
}> = React.memo(({ x, y, z, geometry, material }) => {
  let isIncreasing = false;
  const ref = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>(null);
  const [yAxis, setYAxis] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hể");

      setYAxis(isIncreasing ? 2 : -2);
      isIncreasing = !isIncreasing;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(yAxis);
  }, [yAxis]);

  useFrame(
    () =>
      ref.current &&
      ref.current.position.lerp(new THREE.Vector3(x, yAxis, z), 0.1)
  );

  return (
    <mesh
      ref={ref}
      position={[x, y, z]}
      geometry={geometry}
      material={material}
    />
  );
});

export default React.memo(Balls);
