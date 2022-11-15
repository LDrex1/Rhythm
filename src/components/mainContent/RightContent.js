import React from "react";
import { Grid } from "@mui/material";
import styleMain from "../style/StyleMain";
import Model from "./canvas/Model";

function RightContent() {
  return (
    <Grid item md={6} sx={styleMain.rightContent}>
      <div style={{ height: "50vh" }}>
        <Model />
      </div>
    </Grid>
  );
}

export default RightContent;
