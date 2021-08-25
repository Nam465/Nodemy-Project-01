import React, { useContext } from "react"
import "../styles/header.css"
import MenuRight from "./menu-right"
import { Button, Avatar } from "@material-ui/core"
import AuthenticateContext from "../context/authenticate"

function CustomHeader() {

    const [authenticate, setAuthenticate] = useContext(AuthenticateContext)
    const [openMenu, setOpenMenu] = React.useState(false)

    const handleClose = () => {
        setOpenMenu(false)
    }
    const handleOpen = () => {
        setOpenMenu(true)
    }

    const handleLogout = () => {
        // Clear Localstorage
        localStorage.removeItem("user")
        // Clear Authenticate Context
        setAuthenticate(null)
    }

    return (
        <div className="main-header">
            <Avatar src={authenticate.avatar} />
            <div>{authenticate.fullname}</div>
            <Button onClick={handleLogout}>Đăng xuất</Button>
            <div className="branch-name">Tiny Url</div>
            <button onClick={handleOpen}>OpenMenu</button>
            <MenuRight openMenu={openMenu} handleClose={handleClose} />
        </div>
    )
}

export default CustomHeader
