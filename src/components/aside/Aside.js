import React, { useState } from "react";
import { Button, SwipeableDrawer } from "@mui/material";
import List from "./AsideLinks";
import styleAside from "../style/StyleAside";

function Aside() {
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor(open);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Swipe</Button>
      <SwipeableDrawer
        sx={styleAside.swiper}
        anchor={"left"}
        hideBackdrop={true}
        open={anchor}
        onClick={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <List />
      </SwipeableDrawer>
    </>
  );
}

export default Aside;
