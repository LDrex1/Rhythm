import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { styleNav } from "../style/StyleNav";
import NavLinks from "./NavLinks";
import LinkList from "./LinkList";

function DrawerNav(props) {
  const drawerWidth = 150;
  const { mobileOpen, setMobileOpen } = props;
  const handleDrawerToggle = () => {
    setMobileOpen(() => !mobileOpen);
  };

  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box component={"nav"}>
      <Drawer
        container={container}
        variant={"temporary"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Stack onClick={handleDrawerToggle}>
          <List>
            <LinkList />
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
}

export default DrawerNav;
