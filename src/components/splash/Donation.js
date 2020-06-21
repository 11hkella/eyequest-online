import React from 'react';
import LinkList from '../base/LinkList'

import '../../style/splash/Donation.css'

function Donation() {
    const pageLinks = [
        {
            link: 'https://www.reclaimtheblock.org/home',
            title: 'RECLAIM THE BLOCK'
        }, {
            link: 'https://bailproject.org/',
            title: 'THE BAIL PROJECT'
        }, {
            link: 'https://www.atlantamutualaid.org/',
            title: 'METRO ATLANTA MUTUAL AID FUND'
        }, {
            link: 'https://www.gofundme.com/f/formerly-incarcerated-small-business-rescue-fund?utm_source=customer&utm_campaign=m_pd+share-sheet&utm_medium=copy_link-tip',
            title: 'FORMERLY INCARCERATED SMALL BUSINESS FUND'
        }, {
            link: 'https://www.housingjusticeleague.org/',
            title: 'HOUSING JUSTICE LEAGUE'
        }, {
            link: 'https://www.gofundme.com/f/homeless-black-trans-women-fund?utm_source=twitter&utm_medium=social&utm_campaign=p_cp+share-sheet',
            title: 'BLACK TRANS WOMAN FUND'
        },
    ]

    return (
        <div className='donation'>
            <h1>PLACES TO PUT YOUR $ SUPPORT</h1>
            <LinkList linksArr={pageLinks} />
        </div>
    )
}

export default Donation;