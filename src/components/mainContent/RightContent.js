import React from "react";
import { Box, Grid } from "@mui/material";
import styleMain from "../style/StyleMain";
import Model from "./canvas/Model";

function RightContent() {
  return (
    <Grid item md={6}>
      <Box sx={styleMain.rightContent}>
        <Model />
      </Box>
    </Grid>
  );
}

export default RightContent;
