import { Box, Typography } from "@mui/material";
import React from "react";

function LoadingHome() {
  return (
    <Box
      sx={{
        position: "absolute",
        background: "#222222",
        height: "100vh",
        color: "#222245",
        width: "100%",
        zIndex: 10,
      }}
      flex
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography align={"center"} component={"h2"} variant={"h2"}>
        Loading...
      </Typography>
    </Box>
  );
}

export default LoadingHome;
