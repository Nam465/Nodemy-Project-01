import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function AuthGuard(props) {

    const history = useHistory()

    React.useEffect(() => {
        // Kiểm tra user trong localStorage
        const user = localStorage.getItem('user')
        // Nếu User không tồn tại redireact sang login page
        if (!user) {
            history.push('/login')
        }
    })

    return <div>
        {props.children}
    </div>
}

export default AuthGuard