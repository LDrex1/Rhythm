import React from "react";
import Toolbar from "@mui/material";
import Link from "@mui/material";
import NavLinks from "./NavLinks";

function navigation() {
  return (
    <>
      <Toolbar>
        {NavLinks.map((link) => (
          <Link key={link.title} color="inherit" noWrap href={link.url}>
            {link.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default navigation;
