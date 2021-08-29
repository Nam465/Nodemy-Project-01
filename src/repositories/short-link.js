import axios from "axios";
import ShortLink from "../models/short-link";

export const getAllShortLink = async (token) => {
    console.log(token)
    const response = await axios.request({
        method: 'GET',
        url: process.env.REACT_APP_API_HOST + '/short-link/all',
        headers: { Authorization: token }
    })
    return response.data.items.map(item => {
        return new ShortLink(item._id, item.userId, item.originUrl, item.expireDate, item.createdAt)
    })
}