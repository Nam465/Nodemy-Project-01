import React, { useEffect, useContext, useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import { getAllShortLink } from "../repositories/short-link"
import AuthenticateContext from "../context/authenticate"
import { Link, useHistory } from "react-router-dom"
import moment from "moment"
import PlaceHolder from './placeholder'

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
                        <Link to={"/short-link/" + item._id}>
                            <div>
                                <div>{item.originUrl}</div>
                                <div>{item.shorLink}</div>
                                <div>{ moment(item.createdAt).format('L LT') }</div>
                            </div>
                        </Link>
                        <div class="short-link__buttons">
                            <Button
                                onClick={() => {
                                    openShortLinkInNewTab(item.shorLink)
                                }}
                            >
                                Mở short link
                            </Button>
                            <Button
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
            <div>Danh sách link rút gọn</div>
            <ShortLinkList />
        </Drawer>
    )
}

export default MenuRight
