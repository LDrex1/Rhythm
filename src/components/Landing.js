import React from "react";
import { Box } from "@mui/material";
import Aside from "./aside/Aside";
import Main from "./mainContent/Main";
import Navigation from "./navigation/Navigation";
import BigModel from "./mainContent/full_page_canvas/BigModel";
import Footer from "./footer/Footer";
import CustomThemeProvider from "./customThemes/CustomThemeProvider";

function Landing() {
  return (
    <Box sx={{ position: "static", minHeight: "100vh" }}>
      <BigModel />
      <Box className="page">
        <Navigation />
        <Aside />
        <Main />
      </Box>
      <Footer />
    </Box>
  );
}

export default Landing;
