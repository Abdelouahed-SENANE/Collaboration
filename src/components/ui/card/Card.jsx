import React from 'react'

const Card = ({
    title,
    description,
    skills,
    date,
    location,
    organizer 
}) => {
    return (
        <div
            className='w-64 h-64 shadow-lg bg-yellow-400 rounded-lg p-4'
        >
            <p>{title}</p>
        </div>
    )
}

export default Card