import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Player from "./components/Player";
import Ground from "./components/Ground";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHover(false);
      }}
    >
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function TwoBoxes() {
  return (
    <>
      <div style="color: #fff;">Click to lock the screen</div>
      <div style="color: #fff;">Press W, A, S, D to move</div>
      <Canvas>
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 10, 0]} />
            <Box position={[20, 10, 0]} />
            <Ground />
            <Player />
          </Suspense>
        </Physics>
      </Canvas>
    </>
  );
}

export default TwoBoxes;
