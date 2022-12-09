import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxModel from "./BoxModel";
import Surround from "./Surround";
import PlaneA from "./planes/PlaneA";
import DatGu from "../../gui/DatGui";

function Model() {
  const defaultData = {
    light: { ambient: "yellow", spot: { color: "yellow", angle: "0.5" } },
    enviroment: { color: "green" },
    box: { color: "#234321", size: 2 },
    heart: { size: 3, color: "#23232" },
  };
  const [datData, setDatData] = useState(defaultData);
  return (
    <>
      <Canvas shadows>
        <ambientLight args={[datData.light.ambient]} />
        {/* <pointLight position={[2, 10, 3]} /> */}
        <spotLight
          args={[datData.light.spot.color, 1.2, 13, 1.2, 0.4]}
          position={[0, 4, 0.2]}
          castShadow
        />
        <BoxModel />
        <OrbitControls />
        <axesHelper args={[5]} />
        <Surround />
        <PlaneA />
      </Canvas>
      <DatGu datData={datData} setDatData={setDatData} />
    </>
  );
}

export default Model;
