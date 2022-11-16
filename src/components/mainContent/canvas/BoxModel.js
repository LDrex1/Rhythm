import React, { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function BoxModel() {
  const meshRef = useRef();
  const lineRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;

    if (!lineRef.current) {
      return;
    }
    lineRef.current.rotation.x += 0.005;
    lineRef.current.rotation.y += 0.008;
  });

  const points = [new Vector3(-3, 0, 0), new Vector3(3, 0, 0)];

  useLayoutEffect(() => {
    lineRef.current.geometry.setFromPoints(points);
  }, [points]);
  return (
    <>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="black" />
      </line>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"#222245"} />
      </mesh>
    </>
  );
}

export default BoxModel;
