import React, { useEffect, useContext, useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import { getAllShortLink } from "../repositories/short-link"
import AuthenticateContext from "../context/authenticate"
import { Link, useHistory } from "react-router-dom"
import moment from "moment"
import PlaceHolder from "./placeholder"

function ShortLinkList(props) {
    const history = useHistory()
    const authenticate = useContext(AuthenticateContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const allLinks = await getAllShortLink(authenticate[0].token)
        setData(allLinks)
        setLoading(false)
    }

    const copy = (shortLink) => {
        navigator.clipboard.writeText(shortLink).then(
            function () {
                alert("Copying to clipboard was successful!")
            },
            function (err) {
                alert("Could not copy text: ", err)
            }
        )
    }

    const openShortLinkInNewTab = (shortLink) => {
        window.open(shortLink, "_blank").focus()
    }

    if (loading == true) return <PlaceHolder />

    return (
        <div>
            {data.map((item) => {
                return (
                    <div class="short-link" key={item._id}>
                        <div>
                            <div className="menu-orgin-link">
                                {item.originUrl}
                            </div>
                            <div className="menu-short-link">
                                {item.shorLink}
                            </div>
                            <div className="menu-create-time">
                                {moment(item.createdAt).format("L LT")}
                            </div>
                        </div>
                        <div class="short-link__buttons">
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => {
                                    openShortLinkInNewTab(item.shorLink)
                                }}
                            >
                                Mở short link
                            </Button>
                            <span> </span>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => {
                                    copy(item.shorLink)
                                }}
                            >
                                Copy to clipboard
                            </Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function MenuRight(props) {
    return (
        <Drawer
            anchor={"right"}
            open={props.openMenu}
            onClose={() => props.handleClose()}
        >
            <div className="menu-right">
                <h2>Danh sách link rút gọn</h2>
                <ShortLinkList />
            </div>
        </Drawer>
    )
}

export default MenuRight
