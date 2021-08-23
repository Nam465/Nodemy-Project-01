import axios from "axios";
import User from '../models/user'

export async function login(email, password) {
    const response = await axios.request({
        method: 'post',
        url: process.env.REACT_APP_API_HOST + '/users/login',
        data: {
            email: email,
            password: password
        }
    })
    const user = new User(
        response.data.user._id,
        response.data.user.FullName,
        response.data.user.Email,
        response.data.user.CreatedAt,
        response.data.jwt
    )
    return user
}

export async function register(email, fullname, avatar, password) {
    return await axios.request({
        method: 'post',
        url: process.env.REACT_APP_API_HOST + '/users/register',
        data: {
            email: email,
            fullname: fullname,
            avatar: avatar,
            password: password
        }
    })
}
