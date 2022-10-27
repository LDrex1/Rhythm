import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <>
      <Toolbar component="nav" sx={{ justifyContent: "space-between" }}>
        {NavLinks.map((link) => (
          <Link key={link.title} color="inherit" noWrap href={link.url}>
            {link.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default Navigation;
