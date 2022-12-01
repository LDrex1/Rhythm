import React, { useState } from "react";
import DatGui, { DatBoolean, DatColor, DatSelect } from "react-dat-gui";
import "../../../node_modules/react-dat-gui/dist/index.css";

function DatGu({ datData, setDatData }) {
  const handleGuiUpdate = (newData) => {
    setDatData((prevData) => {
      return { ...prevData, ...newData };
    });
  };

  return (
    <DatGui data={datData} onUpdate={handleGuiUpdate}>
      <DatBoolean />
      <DatColor path="enviroment/color" label="enviroment" />
      <DatColor path="light.ambient" label="ambientLight" />
      <DatColor path="light.spot.color" label="spotLight" />
      <DatColor path="heart.color" label="heart" />
    </DatGui>
  );
}

export default DatGu;
