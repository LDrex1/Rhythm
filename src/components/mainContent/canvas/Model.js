import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxModel from "./BoxModel";

function Model() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[2, 10, 3]} />
      <BoxModel />
      <OrbitControls />
    </Canvas>
  );
}

export default Model;
