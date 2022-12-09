import React, { useCallback, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Points() {
  const bufferAttrRef = useRef();

  let yo = -6,
    ts = 0,
    freq = 1,
    amp = 1;

  const graphWave = useCallback(
    (x, y) => {
      return (
        (0.7 - Math.abs(Math.sin(freq * (x + ts) ** 2 + 0.05 * y ** 2))) * amp +
        yo
      );
    },
    [ts, amp, freq, yo]
  );

  const count = 200;
  const step = 1;
  const positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi += step) {
      for (let zi = 0; zi < count; zi += step) {
        let x = 2 + (step + xi - count / 2);
        let z = 2 + (step + zi - count / 2);
        let y = graphWave(x, z);
        // let y = -4;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [step, count, graphWave]);

  console.log(positions);
  let j = 0;
  let changes = { ts: true, j: true };
  useFrame(() => {
    const positions = bufferAttrRef.current.array;
    if (changes.ts) {
      ts += 0.01;
    } else {
      if (ts < 4) changes.ts = !changes.ts;
      ts -= 0.01;
    }
    if (ts > 9) {
      changes.ts = !changes.ts;
    }
    if (changes.j) {
      j += 0.001;
    } else {
      if (j < 2) changes.j = !changes.j;
      j -= 0.001;
    }

    if (j > 8) changes.j = !changes.j;

    amp = 0.3 + 2.2 * Math.sin(j);
    // amp = 1;
    freq = 10 * Math.sin(j * 0.0003);
    // freq = 0.05;
    let i = 0;
    for (let xi = 0; xi < count; xi += step) {
      for (let zi = 0; zi < count; zi += step) {
        let x = step + (xi - count / 2);
        let z = step + (zi - count / 2);
        positions[i + 1] = graphWave(x, z);
        i += 3;
      }
    }
    bufferAttrRef.current.needsUpdate = true;
  });
  return (
    <>
      <points scale={6}>
        <bufferGeometry attach={"geometry"}>
          <bufferAttribute
            attach={"attributes-position"}
            ref={bufferAttrRef}
            array={positions}
            count={positions.length / 3}
            itemSize={3}
            needsUpdate={true}
          />
        </bufferGeometry>
        <pointsMaterial opacity={1} transparent={false} color={"#22223f"} />
      </points>
    </>
  );
}

export default Points;
