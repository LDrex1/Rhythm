import React from "react";
import { Divider, List, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import styleAside from "../style/StyleAside";

const asideLinks = [
  { label: "Facebook", icon: <Facebook />, url: "#" },
  { label: "Instagram", icon: <Instagram />, url: "#" },
  { label: "YouTube", icon: <YouTube />, url: "#" },
  { label: "Twitter", icon: <Twitter />, url: "#" },
];

const ListBox = () => (
  <>
    <Box sx={styleAside.box}>
      <List>
        {asideLinks.map(({ label, icon, url }, index) => (
          <>
            <ListItem key={label}>
              <ListItemButton LinkComponent="a" href={url}>
                <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                <ListItemText primary={label} sx={styleAside.itemButton} />
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
