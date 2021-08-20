import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

function MenuRight(props) {

  return (
    <Drawer
      anchor={"right"}
      open={props.openMenu}
      onClose={() => props.handleClose()}
    >
      <div>My Content</div>
    </Drawer>
  );
}

export default MenuRight
