import React from "react";
import { Box } from "@mui/material";
import { CameraShake, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Balls from "./Balls";
import Points from "./Points";

function BigModel() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        pointerEvents: "none",
      }}
    >
      <Canvas>
        <Points />
        <Balls />
        <ambientLight intensity={1} color={"#ffffff"} />
        <OrbitControls
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
        />
        <axesHelper args={[4]} />
        <CameraShake
          maxPitch={0.015}
          maxYaw={0.01}
          maxRoll={0.018}
          pitchFrequency={0.1}
          yawFrequency={0.09}
          rollFrequency={0.06}
        />
      </Canvas>
    </Box>
  );
}

export default BigModel;
