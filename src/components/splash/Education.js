import React from 'react';
import LinkList from '../base/LinkList'

import '../../style/splash/Education.css'

function Education() {
    const pageLinks = [
        {
            link: 'https://www.showingupforracialjustice.org/white-supremacy-culture-characteristics.html?fbclid=IwAR3mpybf0V2BU4ZVH10vCDdoLjlhjTRyKF1jbEHQCsNpS3gK6-5FuKxFSYw',
            title: 'CHARACTERISTICS OF WHITE SUPREMACY CULTURE'
        }, {
            link: 'https://docs.google.com/document/d/1BRlF2_zhNe86SGgHa6-VlBO-QgirITwCTugSfKie5Fs/mobilebasic',
            title: 'ANTI RACISM RESOURCES FOR WHITE PEOPLE'
        }, {
            link: 'https://writeaprisoner.com/',
            title: 'WRITE A PRISONER'
        }, {
            link: 'https://www.blackandpink.org/',
            title: 'BLACK AND PINK'
        }, {
            link: 'http://www.abcf.net/prisoner-info/',
            title: 'ANARCHIST BLACK CROSS PRSIONER LIST'
        }, {
            link: 'https://www.mpd150.com/what-are-we-talking-about-when-we-talk-about-a-police-free-future/',
            title: 'POLICE FREE FUTURE? ABC’S!'
        }, {
            link: 'https://www.mpd150.com/faq/',
            title: 'FAQ’S OF POLICE ABOLITION'
        }, {
            link: 'https://bookshop.org/shop/elizabeths',
            title: 'READING LISTS'
        },
    ]

    return (
        <div className='education'>
            <h2>IN SOLIDARITY WITH THE BLACK LIVES MATTER MOVEMENT WE OFFER THESE RESOURCES</h2>
            <p>>>>>> Please take a moment to read through before continuing to the zine. <br />>>>></p>
            <LinkList linksArr={pageLinks} />
        </div >
    )
}

export default Education;