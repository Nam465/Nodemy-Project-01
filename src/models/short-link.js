class ShortLink {
    constructor(_id , userId, originUrl, expireDate, createdAt) {
        this._id = _id 
        this.userId = userId
        this.originUrl = originUrl 
        this.expireDate = expireDate
        this.createdAt = createdAt
        this.shorLink = process.env.REACT_APP_API_HOST + '/' + _id
    }
}

export default ShortLink






