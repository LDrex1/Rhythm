import React from "react";
import { Box } from "@mui/material";
import Aside from "./aside/Aside";
import Main from "./mainContent/Main";
import Navigation from "./navigation/Navigation";
import BigModel from "./mainContent/full_page_canvas/BigModel";

function Landing() {
  return (
    <Box>
      <BigModel />
      <Navigation />
      <Aside />
      <Main />
    </Box>
  );
}

export default Landing;
