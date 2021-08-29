import React from 'react'
import {useParams} from 'react-router-dom'

function ShortLink() {

    const params = useParams()

    React.useEffect(() => {
        const id = params._id
        // Gọi dữ liệu dựa trên id 
    }, [])

    return <div>
        Short Link Id: { params._id }
    </div>
}

export default ShortLink