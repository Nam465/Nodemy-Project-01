import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import AuthenticateContext from '../context/authenticate';

function AuthGuard(props) {

    const [authenticate] = useContext(AuthenticateContext)
    const history = useHistory()

    if (!authenticate) {
        history.push('/login')
    }

    return <div>
        {props.children}
    </div>
}

export default AuthGuard