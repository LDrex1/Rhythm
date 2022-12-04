import React from "react";
import { Box } from "@mui/material";
import Aside from "./aside/Aside";
import Main from "./mainContent/Main";
import Navigation from "./navigation/Navigation";
import BigModel from "./mainContent/full_page_canvas/BigModel";
import Footer from "./footer/Footer";

function Landing() {
  return (
    <>
      <BigModel />
      <Box>
        <Navigation />
        <Aside />
        <Main />
        <Footer />
      </Box>
    </>
  );
}

export default Landing;
