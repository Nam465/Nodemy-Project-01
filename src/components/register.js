import React from "react"
import { Input, Button } from "@material-ui/core"
import { login, register } from "../repositories/user"

function Register(props) {
    const [email, setEmail] = React.useState("")
    const [fullname, setFullname] = React.useState("")
    const [avatar, setAvatar] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [password2, setPassword2] = React.useState("")

    const handleRegister = async () => {
        try {
            // Validate input
            if (!email || !fullname || !password || !password2) {
                alert("Input không hợp lệ")
                return
            }
            if (password !== password2) {
                alert("Input không hợp lệ")
                return
            }

            // Call api tới server để tạo tài khoản
            await register(email, fullname, avatar, password)

            // Thông báo là tạo tài khoản thành công
            alert("Tạo tài khoản thành công")
            props.onSuccessCreate()
        } catch (error) {
            console.log(error)
            alert("Có lỗi xảy ra")
        }
    }

    const back = () => {
        props.back()
    }

    return (
        <form>
            <Input
                fullWidth={true}
                placeholder="Email *"
                inputProps={{ "aria-label": "description" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="input"
            />
            <Input
                fullWidth={true}
                placeholder="Fullname *"
                inputProps={{ "aria-label": "description" }}
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
                className="input"
            />
            <Input
                fullWidth={true}
                placeholder="Avatar Url"
                inputProps={{ "aria-label": "description" }}
                value={avatar}
                onChange={(event) => setAvatar(event.target.value)}
                className="input"
            />
            <Input
                fullWidth={true}
                placeholder="Password *"
                inputProps={{ "aria-label": "description" }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input"
            />
            <Input
                fullWidth={true}
                placeholder="Password 2 *"
                inputProps={{ "aria-label": "description" }}
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
                className="input"
            />
            <Button onClick={handleRegister} variant="outlined" color="primary">
                Register
            </Button>
            <Button onClick={back}>Back</Button>
        </form>
    )
}

export default Register
