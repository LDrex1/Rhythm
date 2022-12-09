import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styleNav } from "../style/StyleNav";
import NavLinks from "./NavLinks";

function LinkList() {
  return (
    <>
      {NavLinks.map((link) => (
        <ListItem key={link.title}>
          <ListItemButton sx={styleNav.link} href={link.url}>
            <ListItemIcon sx={{ color: "whitesmoke", minWidth: "35px" }}>
              {link.icon}
            </ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

export default LinkList;
