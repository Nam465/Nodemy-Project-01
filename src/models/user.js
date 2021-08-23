class User {
    constructor(_id , fullname, email, createdAt, token) {
        this._id = _id 
        this.fullname = fullname
        this.email = email 
        this.createdAt = createdAt
        this.token = token
    }
}

export default User