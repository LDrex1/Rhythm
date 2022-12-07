import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Vector3 } from "three";

function Ball({ ballRadius, ballPosition }) {
  const sphereRef = useRef();

  useFrame(() => {
    if (!!sphereRef.current) {
      return;
    }
    sphereRef.current.rotation.x += 0.001;
    sphereRef.current.rotation.x += 0.001;
  });
  return (
    <mesh ref={sphereRef} position={new Vector3(...ballPosition)}>
      <sphereBufferGeometry args={[ballRadius, 35, 35]} />
      <meshStandardMaterial metalness={0.2} roughness={0.4} color={"skyblue"} />
    </mesh>
  );
}

export default Ball;
