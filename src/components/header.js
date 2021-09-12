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
            <div className="branch-name">Tiny Url</div>

            <div className="header-right">
                <button className="header-button" onClick={handleOpen}>OpenMenu</button>
                <button className="header-button" onClick={handleLogout}>Đăng xuất</button>

                <Avatar src={authenticate.avatar} className="avatar" />
                <div>{authenticate.fullname}</div>
                <MenuRight openMenu={openMenu} handleClose={handleClose} />
            </div>
        </div>
    )
}

export default CustomHeader
