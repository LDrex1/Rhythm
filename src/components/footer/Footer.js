import React from "react";
import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        bottom: "4px",
        // top: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "5px",
      }}
    >
      <Typography sx={{ fontWeight: "650" }} component={"p"} vatiant={"h6"}>
        Created by
      </Typography>
      <Link
        sx={{ textDecoration: "none" }}
        variant="h6"
        href="https://github.com/LDrex1"
      >
        LDrex1
      </Link>
    </Box>
  );
}

export default Footer;
