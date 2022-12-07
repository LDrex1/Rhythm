import React, { useRef, useLayoutEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide, Shape, Vector3 } from "three";

function BoxModel() {
  const meshRef = useRef();
  const lineRef = useRef();
  const genPosition = [0, 0, 0];

  const HeartShape = () => {
    const x = 0,
      y = 0;
    const heartpaths = new Shape();

    heartpaths.moveTo(x + 5, y + 5);
    heartpaths.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartpaths.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartpaths.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartpaths.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartpaths.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartpaths.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    const extrudeSettings = {
      // curveSegments: 26,
      steps: 1,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 25,
    };
    return (
      <mesh scale={[0.1, 0.1, 0.1]}>
        <extrudeGeometry args={[heartpaths, extrudeSettings]} />
        <meshStandardMaterial color={"orange"} side={DoubleSide} />
      </mesh>
    );
  };

  let step = 0,
    speed = 0.02;
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
    meshRef.current.position.x = 2 * Math.sin(step);
    step += speed;

    if (!lineRef.current) {
      return;
    }
    lineRef.current.rotation.x += 0.005;
    lineRef.current.rotation.y += 0.008;
  });

  const dg = -3;
  // const points = [new Vector3(-3, 0, 0), new Vector3(3, 0, 0)];
  const pointsMemo = useMemo(
    () => [new Vector3(dg, 0, 0), new Vector3(3, 0, 0)],
    [dg]
  );

  useLayoutEffect(() => {
    lineRef.current.geometry.setFromPoints(pointsMemo);
  }, [pointsMemo]);
  return (
    <>
      <HeartShape />
      <line ref={lineRef}>
        <bufferGeometry />

        <lineBasicMaterial color="black" />
      </line>
      <mesh position={genPosition} ref={meshRef} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial metalness={0.3} color={"#222255"} />
      </mesh>
    </>
  );
}

export default BoxModel;
