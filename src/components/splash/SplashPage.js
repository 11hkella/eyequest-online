import React from 'react';
import Navigation from './Navigation'
import Education from './Education'
import Donation from './Donation'

import '../../style/splash/SplashPage.css'


function SplashPage() {
    return (
        <div className='splash-page'>
            <div className='column'>
                <Education />
            </div>
            <div className='column'>
                <Navigation />
            </div>
            <div className='column col3'>
                <Donation />
            </div>
        </div>
    )
}

export default SplashPage;