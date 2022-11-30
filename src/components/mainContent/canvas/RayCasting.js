import React from "react";
import { Raycaster } from "three";

const rayCaster = new Raycaster();
let windowHeight, windowWidth;

if (window.innerWidth < 900) {
  windowHeight = window.innerHeight / 2.1;
  windowWidth = window.innerWidth;
} else {
  windowWidth = window.innerWidth / 2;
  windowHeight = window.innerHeight / (70 / 100);
}

const mouse = {};

const onMouseMove = (ev) => {
  mouse.x = (ev.clientX / windowWidth) * 2 - 1;
  mouse.y = (ev.clientY / windowHeight) * 2 + 1;
};

const hoverObjects = () => {
  rayCaster.setFromCamera(mouse);
};
