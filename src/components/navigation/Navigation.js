import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import NavLinks from "./NavLinks";
import { Box, IconButton } from "@mui/material";
import { styleNav } from "../style/StyleNav";

function Navigation() {
  return (
    <Box sx={styleNav.box}>
      <IconButton></IconButton>
      <Toolbar component="nav" sx={styleNav.toolbar}>
        {NavLinks.map((link) => (
          <Link key={link.title} color="inherit" noWrap href={link.url}>
            {link.title}
          </Link>
        ))}
      </Toolbar>
    </Box>
  );
}

export default Navigation;
