import React from 'react';
import Navigation from './Navigation'
import Education from './Education'
import Donation from './Donation'


function SplashPage() {
    return (
        <div className='splash-page'>
            <div className='column'>
                <Navigation />
            </div>
            <div className='column'>
                <Education />
            </div>
            <div className='column'>
                <Donation />
            </div>
        </div>
    )
}

export default SplashPage;