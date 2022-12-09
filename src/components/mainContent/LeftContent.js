import React from "react";
import { Grid, Typography } from "@mui/material";
import styleMain from "../style/StyleMain";
import CustomThemeProvider from "../customThemes/CustomThemeProvider";

function LeftContent() {
  return (
    <Grid item md={6} sx={styleMain.leftContent.grid}>
      <CustomThemeProvider>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          textTransform={"uppercase"}
          sx={styleMain.leftContent.header}
        >
          Welcome to the 3d world
        </Typography>
      </CustomThemeProvider>
    </Grid>
  );
}

export default LeftContent;
