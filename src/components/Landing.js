import { Box } from "@mui/material";
import React from "react";
import Aside from "./aside/Aside";
import LeftContent from "./mainContent/LeftContent";
import Navigation from "./navigation/Navigation";
import style from "./style/Style";

function Landing() {
  return (
    <Box>
      <Navigation />
      <Aside />
      <LeftContent />
    </Box>
  );
}

export default Landing;
