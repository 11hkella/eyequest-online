import React from 'react';

function LinkList({ linksArr }) {
    return (
        <div className='links'>
            {linksArr.map((item, i) => {
                return (
                    <p key={i}><a target='_blank' rel='noopener' href='{item.link}'>{item.title}</a></p>
                )
            })}
        </div>
    )
}

export default LinkList;