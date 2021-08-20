import React from "react";
import "../styles/header.css";
import MenuRight from "./menu-right";

function CustomHeader() {
    const [openMenu, setOpenMenu] = React.useState(false)

  const handleClose = () => {setOpenMenu(false)};
  const handleOpen = () => {setOpenMenu(true)}

  return (
    <div className="main-header">
      <div className="branch-name">Tiny Url</div>
        <button onClick={handleOpen}>OpenMenu</button>
      <MenuRight openMenu={openMenu} handleClose={handleClose} />
    </div>
  );
}

export default CustomHeader;
