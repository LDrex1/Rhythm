import { Drawer, SwipeableDrawer } from "@mui/material";
import React from "react";

function Aside() {
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={true}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </>
  );
}

export default Aside;
