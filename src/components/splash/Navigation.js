import React from 'react';
import LinkList from '../base/LinkList'

import '../../style/splash/Navigation.css'

function Navigation() {
    const pageLinks = [
        {
            link: 'http://eyequest.online/',
            title: 'EYEQUEST ONLINE ZINE'
        }
    ]
    return (
        <div className='navigation'>
            <LinkList linksArr={pageLinks} />
        </div>
    )
}

export default Navigation;