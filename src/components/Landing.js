import React from "react";
import { Box } from "@mui/material";
import Aside from "./aside/Aside";
import Main from "./mainContent/Main";
import Navigation from "./navigation/Navigation";

function Landing() {
  return (
    <Box>
      <Navigation />
      <Aside />
      <Main />
    </Box>
  );
}

export default Landing;
