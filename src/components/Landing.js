import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Aside from "./aside/Aside";
import Main from "./mainContent/Main";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import LoadingHome from "./loadingPages/LoadingHome";
import BigModel from "./mainContent/full_page_canvas/BigModel";

function Landing() {
  // const BigModel = lazy(() =>
  //   import("./mainContent/full_page_canvas/BigModel")
  // );
  return (
    <Box sx={{ position: "static", minHeight: "100vh" }}>
      <Suspense fallback={<LoadingHome />}>{<BigModel />}</Suspense>
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
