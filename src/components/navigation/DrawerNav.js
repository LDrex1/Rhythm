import React from "react";
import { Box, Drawer, List, Stack } from "@mui/material";
import LinkList from "./LinkList";
import { Center } from "@react-three/drei";

function DrawerNav(props) {
  const drawerWidth = 150;
  const { mobileOpen, setMobileOpen } = props;
  const handleDrawerToggle = () => {
    setMobileOpen(() => !mobileOpen);
  };

  const container =
    window !== undefined ? document.querySelector(".page") : undefined;
  console.log(container);

  // const useStyles = makeStyles({
  //   drawer: {
  //     position: "relative",
  //     marginLeft: "auto",
  //     width: 200,
  //     "& .MuiBackdrop-root": {
  //       display: "none",
  //     },
  //     "& .MuiDrawer-paper": {
  //       width: 200,
  //       position: "absolute",
  //       height: "80vh",
  //       transition: "none !important",
  //     },
  //   },
  // });
  return (
    <Box component={"nav"} sx={{ display: "flex", alignItems: "center" }}>
      <Drawer
        container={container}
        variant={"temporary"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "flex", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            justifyContent: "center",
            width: drawerWidth,
            background: "none",
            boxShadow: "none",
            height: "60vh",
            background: "#222222",
            borderRadius: "0 0 8px 0",
          },
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
