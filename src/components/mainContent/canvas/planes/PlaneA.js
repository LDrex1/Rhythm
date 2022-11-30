import React from "react";
import { DoubleSide } from "three";

function PlaneA() {
  return (
    <mesh position={[0, -2, -2]} rotation={[90, 0, 0]} receiveShadow>
      <planeGeometry args={[8, 15]} />
      <meshStandardMaterial color={"#ffffff"} side={DoubleSide} />
    </mesh>
  );
}

export default PlaneA;
