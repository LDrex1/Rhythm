import React from "react";
import { Box, Grid } from "@mui/material";
import styleMain from "../style/StyleMain";
import Model from "./canvas/Model";

function RightContent() {
  return (
    <Grid item md={6} sx={styleMain.rightContent}>
      <Box
        sx={{
          height: { sm: "60vh", md: "50vh", lg: "70vh" },
          borderRadius: "15px",
        }}
      >
        <Model />
      </Box>
    </Grid>
  );
}

export default RightContent;
