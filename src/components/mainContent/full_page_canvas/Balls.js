import React from "react";
import Ball from "./Ball";

function Balls() {
  const sphereRadius = () => Math.random() * 0.2;
  const spherePosition = () => [
    ~~(-10 + Math.random() * 20),
    ~~(-5 + Math.random() * 10),
    ~~(-9 + Math.random() * 18),
  ];
  const ballsArray = new Array(100).fill(0);
  console.log(ballsArray);
  return ballsArray.map((each) => (
    <Ball ballRadius={sphereRadius()} ballPosition={spherePosition()} />
  ));
}

export default Balls;
