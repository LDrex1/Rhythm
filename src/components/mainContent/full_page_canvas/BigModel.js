import { Box } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Balls from "./Balls";

function BigModel() {
  return (
    <Box sx={{ position: "fixed", top: "0", left: "0" }}>
      <Canvas>
        <Balls />
        <ambientLight color={"#ffffff"} />
        <OrbitControls />
        <axesHelper args={[4]} />
      </Canvas>
    </Box>
  );
}

export default BigModel;
