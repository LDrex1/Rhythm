import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, IconButton, Stack, Typography } from "@mui/material";
import { Menu, ViewInAr } from "@mui/icons-material";
import DrawerNav from "./DrawerNav";
import LinkList from "./LinkList";

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box>
      <AppBar
        position={"static"}
        sx={{ background: "none", boxShadow: "unset" }}
      >
        <Toolbar component="nav">
          <IconButton
            onClick={setMobileOpen}
            sx={{ mr: { xs: "auto", md: 2 }, display: { md: "none" } }}
            edge="start"
          >
            <Menu />
          </IconButton>
          <IconButton arial-label={"logo"}>
            <ViewInAr sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography
            variant={"h6"}
            component={"div"}
            sx={{ flexGrow: { md: 1 } }}
          >
            3D
          </Typography>
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            component={"ul"}
            direction={"row"}
            spacing={1}
          >
            <LinkList />
          </Stack>
        </Toolbar>
      </AppBar>
      <DrawerNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </Box>
  );
}

export default Navigation;
