import React, {useContext} from "react"
import { authWithUsername } from "../repositories/user"
import { Input, Button } from "@material-ui/core"
import { login, register } from "../repositories/user"
import {useHistory, useLocation, useParams} from "react-router-dom"
import AuthenticateContext from "../context/authenticate"

function Login(props) {

    const [authenticate, setAuthenticate] = useContext(AuthenticateContext)
    const history = useHistory()
    const location = useLocation()
    const params = useParams()

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    React.useEffect(() => {
        console.log('location', location)
        console.log('params', params)
    }, [])

    const handLogin = async () => {
        try {
            // Call to server to get data
            const user = await login(email, password)
            // Save data to localstorage
            const converted = JSON.stringify(user)
            localStorage.setItem("user", converted)
            // Cập nhật lại useContext
            setAuthenticate(user)
            // Redirect to homepage
            history.push('/')
        } catch (error) {
            console.log(error)
            alert("Có lỗi xảy ra")
        }
    }

    return (
        <form>
            <Input
                fullWidth={true}
                placeholder="Email"
                inputProps={{ "aria-label": "description" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="input"
            />
            <Input
                fullWidth={true}
                placeholder="Password"
                inputProps={{ "aria-label": "description" }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input"

            />
            <Button onClick={handLogin} variant="outlined" color="primary">Login</Button>
            <p onClick={props.onCreateAccount} className="link">Create a new account</p>
        </form>
    )
}

export default Login