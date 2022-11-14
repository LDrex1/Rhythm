import React from "react";
import { Container, Grid } from "@mui/material";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Main() {
  return (
    <Container>
      <Grid container alignItems={"center"}>
        <LeftContent />
        <RightContent />
      </Grid>
    </Container>
  );
}

export default Main;
