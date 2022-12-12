import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styleMain from "../style/StyleMain";
import CustomThemeProvider from "../customThemes/CustomThemeProvider";

function LeftContent({ showCanvas, setShowCanvas }) {
  const handleClick = () => {
    setShowCanvas((prevState) => !prevState);
  };

  return (
    <Grid item xs={12} md={showCanvas ? 6 : 12} sx={styleMain.leftContent.grid}>
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
        <Button
          variant={"contained"}
          sx={{ color: "inherit", textAlign: "center", mt: 2 }}
          onClick={handleClick}
        >
          {showCanvas ? "Hide Canvas" : "Show Canvas"}
        </Button>
      </CustomThemeProvider>
    </Grid>
  );
}

export default LeftContent;
