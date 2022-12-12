import React from "react";
import { Box, Grid } from "@mui/material";
import styleMain from "../style/StyleMain";
import Model from "./canvas/Model";

function RightContent({ showCanvas }) {
  return (
    <Grid
      item
      md={showCanvas ? 6 : 0}
      xs={showCanvas ? 12 : 0}
      sx={{
        maxWidth: showCanvas ? "100%" : "0 !important",
        overflowX: "hidden",
        transition: { md: "all 0.5s ease-out", xs: "all 0.5s ease-out" },
      }}
    >
      <Box sx={styleMain.rightContent}>
        <Model />
      </Box>
    </Grid>
  );
}

export default RightContent;
