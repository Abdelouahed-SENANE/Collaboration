import React from 'react'

const CardWrapper = ({ links, children }) => {
    const activeLink = links.find((e) => e.active)
    return (
        <div
            className='w-full p-8 m-4 grid grid-cols-4 gap-8'
        >
            { children }

            <p>{ activeLink.label }</p>
        </div>
    )
}

export default CardWrapper