import React from "react";
import Aside from "./aside/Aside";
import LeftContent from "./mainContent/LeftContent";
import Navigation from "./navigation/Navigation";

function Landing() {
  return (
    <>
      <Navigation />
      <Aside />
      <LeftContent />
    </>
  );
}

export default Landing;
