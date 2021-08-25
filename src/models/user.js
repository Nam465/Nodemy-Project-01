class User {
    constructor(_id , fullname, email, createdAt, token, avatar) {
        this._id = _id 
        this.fullname = fullname
        this.email = email 
        this.createdAt = createdAt
        this.token = token
        this.avatar = avatar
    }
}

export default User