import React, { useRef } from "react";
import DatGui, { DatBoolean, DatColor } from "react-dat-gui";
import "../../../node_modules/react-dat-gui/dist/index.css";

function DatGu({ datData, setDatData }) {
  const guiRef = useRef();

  const handleGuiUpdate = (newData) => {
    setDatData((prevData) => {
      return { ...prevData, ...newData };
    });
  };

  console.log(guiRef);

  console.log(DatGui);
  return (
    <DatGui
      ref={guiRef}
      style={{ position: "absolute" }}
      data={datData}
      onUpdate={handleGuiUpdate}
    >
      <DatBoolean />
      <DatColor path="enviroment/color" label="enviroment" />
      <DatColor path="light.ambient" label="ambientLight" />
      <DatColor path="light.spot.color" label="spotLight" />
      <DatColor path="heart.color" label="heart" />
    </DatGui>
  );
}

export default DatGu;
