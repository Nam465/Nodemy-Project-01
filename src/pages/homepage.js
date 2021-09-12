import React, { useContext } from 'react'
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import AuthenticateContext from '../context/authenticate'
import CreateShortLink from '../components/create-short-link'

function Homepage() {

    const authenticate = useContext(AuthenticateContext)

    return <div>
        <CustomHeader />

        <div className="homepage-main">
            <CreateShortLink />
        </div>

        <CustomFooter />
    </div>
}

export default Homepage