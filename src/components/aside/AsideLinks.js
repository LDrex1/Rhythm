import React from "react";
import { Divider, List, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon, Box } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import styleAside from "../style/StyleAside";

const asideLinks = [
  {
    label: "Facebook",
    icon: <Facebook />,
    url: "#",
    color: "#4267b2",
  },
  { label: "Instagram", icon: <Instagram />, url: "#", color: "#d62976" },
  { label: "YouTube", icon: <YouTube />, url: "#", color: "#ff0000" },
  { label: "Twitter", icon: <Twitter />, url: "#", color: "#1da1f2" },
];

console.log(asideLinks[0].icon);
const ListBox = () => (
  <>
    <Box sx={styleAside.box}>
      <List>
        {asideLinks.map(({ label, icon, url, color }, index) => (
          <>
            <ListItem key={label}>
              <ListItemButton LinkComponent="a" href={url}>
                <ListItemIcon sx={{ color: color }}>{icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
            {index !== asideLinks.length - 1 ? (
              <Divider
                sx={{
                  background: "#ffffff",
                  width: "30%",
                  height: "0.1px",
                  margin: "0 auto",
                }}
              />
            ) : null}
          </>
        ))}
      </List>
    </Box>
  </>
);
export default ListBox;
