import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxModel from "./BoxModel";
import Surround from "./Surround";
import PlaneA from "./planes/PlaneA";

function Model() {
  return (
    <Canvas shadows>
      <ambientLight />
      {/* <pointLight position={[2, 10, 3]} /> */}
      <spotLight
        args={["#ffff67", 1.2, 13, 1.2, 0.4]}
        position={[0, 4, 0.2]}
        castShadow
      />
      <BoxModel />
      <OrbitControls />
      <axesHelper args={[5]} />
      <Surround />
      <PlaneA />
    </Canvas>
  );
}

export default Model;
