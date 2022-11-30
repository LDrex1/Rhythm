import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function OrbitControl() {
  const orbitControlsRef = useRef();

  useFrame((state) => {
    if (!!orbitControlsRef?.current) {
      const { x, y } = state.mouse;
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef?.current) {
    }
  }, [orbitControlsRef?.current]);

  return <OrbitControls ref={orbitControlsRef} />;
}

export default OrbitControl;
