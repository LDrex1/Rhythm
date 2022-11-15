import React from "react";
import { Canvas } from "@react-three/fiber";
import BoxModel from "./BoxModel";

function Model() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[2, 10, 3]} />
      <BoxModel />
    </Canvas>
  );
}

export default Model;
