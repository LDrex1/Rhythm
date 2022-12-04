import React from "react";
import { Grid, Typography } from "@mui/material";
import styleMain from "../style/StyleMain";

function LeftContent() {
  return (
    <Grid item md={6} sx={styleMain.leftContent.grid}>
      <Typography component="h1" variant="h1" sx={styleMain.leftContent.header}>
        Welcome to the 3d world
      </Typography>
    </Grid>
  );
}

export default LeftContent;
