import { Environment, GradientTexture } from "@react-three/drei";
import React from "react";
import { BackSide } from "three";

function Surround() {
  return (
    <Environment background>
      <mesh scale={0.1}>
        <boxGeometry args={[50, 100, 100]} />

        <meshBasicMaterial side={BackSide}>
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={["#ffff45", "skyblue", "blue"]}
          />
        </meshBasicMaterial>
      </mesh>
    </Environment>
  );
}

export default Surround;
