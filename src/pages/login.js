import React from "react"
import Login from "../components/login"
import Register from "../components/register"

function LoginScreen() {
    const [isShowRegister, setShow] = React.useState(false)

    const showRegister = () => {
        setShow(true)
    }

    const handleCreateSuccess = () => {
        setShow(false)
    }

    const handleBack = () => {
        setShow(false)
    }

    return (
        <div className="login">
            <div className="login-inner">
                {isShowRegister == false && (
                    <Login onCreateAccount={showRegister} />
                )}
                {isShowRegister == true && (
                    <Register
                        onSuccessCreate={handleCreateSuccess}
                        back={handleBack}
                    />
                )}
            </div>
        </div>
    )
}

export default LoginScreen
