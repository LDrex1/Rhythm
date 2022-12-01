import React from "react";
import Ball from "./Ball";

function Balls() {
  const sphereRadius = () => Math.random() * 0.8;
  const spherePosition = () => [
    ~~(-6 + Math.random() * 9),
    ~~(-5 + Math.random() * 10),
    ~~(-3 + Math.random() * 8),
  ];
  const ballsArray = Array(15).fill(0);
  return ballsArray.map((each) => (
    <Ball ballRadius={sphereRadius()} ballPosition={spherePosition()} />
  ));
}

export default Balls;
