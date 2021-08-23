import React from 'react'
import {useParams, Link} from 'react-router-dom'

function ShortLink() {

    const params = useParams()
    const [blogs , setBlogs] = React.useState([{id: 123}])

    React.useEffect(() => {
        const _id = params._id

        // Call api tới server để lấy thông tin về param có _id 
    })

    return <div>
        abc
        { blogs.map(blog => {
            return <Link to={ '/blog/' + blog.id }>Protected Page</Link>
        })}
    </div>
}

export default ShortLink