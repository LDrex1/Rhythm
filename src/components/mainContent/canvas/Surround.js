import { Environment } from "@react-three/drei";
import React from "react";
import { BackSide } from "three";

function Surround() {
  return (
    <Environment background>
      <mesh scale={15}>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial color={"green"} side={BackSide} />
      </mesh>
    </Environment>
  );
}

export default Surround;
