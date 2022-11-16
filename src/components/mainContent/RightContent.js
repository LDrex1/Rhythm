import React from "react";
import { Box, Grid } from "@mui/material";
import styleMain from "../style/StyleMain";
import Model from "./canvas/Model";

function RightContent() {
  return (
    <Grid item md={6} sx={styleMain.rightContent}>
      <Box sx={{ height: { md: "50vh", lg: "70vh" } }}>
        <Model />
      </Box>
    </Grid>
  );
}

export default RightContent;
