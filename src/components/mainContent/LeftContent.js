import React from "react";
import { Container, Grid, Typography } from "@mui/material";

function LeftContent() {
  return (
    <Container maxWidth="lg" sx={{ background: "yellow" }}>
      <Grid container>
        <Grid item md={6} sx={{ background: "#222222" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ textTransform: "uppercase" }}
          >
            Welcome to the 3d world
          </Typography>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </Container>
  );
}

export default LeftContent;
