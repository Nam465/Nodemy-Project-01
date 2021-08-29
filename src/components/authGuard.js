import React, { useEffect, useContext } from "react"
import { useHistory, Redirect } from "react-router-dom"
import AuthenticateContext from "../context/authenticate"

function AuthGuard(props) {
    const [authenticate] = useContext(AuthenticateContext)

    if (authenticate) {
        return <div>{props.children}</div>
    } else {
        return <Redirect to="/login" />
    }
}

export default AuthGuard
