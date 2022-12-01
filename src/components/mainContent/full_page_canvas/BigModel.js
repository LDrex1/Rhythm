import { Box } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Balls from "./Balls";

function BigModel() {
  return (
    <Box sx={{ position: "absolute", height: "100vh", width: "100%" }}>
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
