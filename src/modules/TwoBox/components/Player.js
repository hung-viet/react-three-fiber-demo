import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import PointerLockControls from './PointerLockControls';

const SPEED = 25
const keys = { KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right", Space: "jump" };
const moveFieldByKey = (key) => keys[key];
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const speed = new THREE.Vector3();

const usePlayerControls = () => {
  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false })
  useEffect(() => {
    const handleKeyDown = (e) => (
      (document.pointerLockElement !== null) && setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true })));
    const handleKeyUp = (e) => (
      (document.pointerLockElement !== null) && setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false })));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }
  }, [])
  return movement;
}

const Player = (props) => {
  const [ref, api] = useSphere(() => ({ args: [5], mass: 1, type: "Dynamic", position: [0, 10, 30], ...props }));
  const { forward, backward, left, right, jump } = usePlayerControls();
  const { camera } = useThree();

  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), [api.velocity]);
  useFrame(() => {

    ref.current.getWorldPosition(camera.position);
    camera.position.y = camera.position.y + 7;
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.01)
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);

  });

  return (
    <>
      <mesh ref={ref} />
      <PointerLockControls />
    </>
  )
}
export default Player;