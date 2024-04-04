import React from 'react'

const Card = ({listing: {title, description, skills, date, location}}) => {
    console.log(typeof skills[0])
    return (
        <div
            className='w-64 h-64 shadow-lg bg-white rounded-lg space-y-4 flex justify-between'
        >
            <div className='h-full flex flex-col gap-4  p-4'>
                <p className='text-xl font-black'>{title}</p>
                <p className='text-sm'>{description}</p>
                <p className='flex flex-wrap gap-2'>
                        {skills.map((skill) => (
                            <span className='bg-secondary text-white p-2 rounded'>
                                {`${skill}`}
                            </span>
                        ))}
                    
                </p>
                <p> <span className='text-secondary font-black'>{date}</span> at {location}</p>
            </div>
            
            <button style={{margin: 0}} className='h-full w-12 bg-primary'>
                <p style={{transform: 'rotate(-90deg)'}} className='text-white text-2xl font-black text-center'>Apply</p>
            </button>
        </div>
    )
}

export default Card