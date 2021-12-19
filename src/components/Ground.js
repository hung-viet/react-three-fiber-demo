import { usePlane } from "@react-three/cannon";

const Ground = () => {

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-60, 0.2, 30],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[200, 90]} />
      <meshPhysicalMaterial attach="material" color={0x17b5e6} />
    </mesh>
  );
}

export default Ground;