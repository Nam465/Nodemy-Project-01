import React from "react"
import Login from '../components/login'
import Register from "../components/register"

function LoginScreen() {
    const [isShowRegister, setShow] = React.useState(false)

    const showRegister = () => {
        setShow(true)
    }

    const handleCreateSuccess = () => {
        setShow(false)
    }

    return (
        <div>
            { isShowRegister == false && <Login onCreateAccount={showRegister} />}
            { isShowRegister == true && <Register onSuccessCreate={handleCreateSuccess} />}
        </div>
    )
}

export default LoginScreen
