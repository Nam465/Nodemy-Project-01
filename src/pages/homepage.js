import React, { useContext } from 'react'
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import AuthenticateContext from '../context/authenticate'

function Homepage() {

    const authenticate = useContext(AuthenticateContext)

    return <div>
        <CustomHeader />

        <div className="homepage-main">
            
        </div>

        <CustomFooter />
    </div>
}

export default Homepage