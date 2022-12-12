import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Main() {
  const [showCanvas, setShowCanvas] = useState(true);

  return (
    <Container
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        pb: "50px",
      }}
    >
      <Grid container alignItems={"center"}>
        <LeftContent showCanvas={showCanvas} setShowCanvas={setShowCanvas} />
        <RightContent showCanvas={showCanvas} />
      </Grid>
    </Container>
  );
}

export default Main;
