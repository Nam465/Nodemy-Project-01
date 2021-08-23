import React from 'react'
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import ShortLink from '../components/short-link'
import AuthGuard from '../components/authGuard'

function Homepage() {
    return <div>
        <CustomHeader />

        <div className="homepage-main">
            
            <ShortLink />
        </div>

        <CustomFooter />
    </div>
}

export default Homepage