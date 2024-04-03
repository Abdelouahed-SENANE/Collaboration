import React from 'react'

const Hero = ({query, onQueryChange}) => {
    return (
        <section
            className='w-full p-8 m-4'
        >
            <div
                className='p-8 rounded bg-black text-white flex items-center justify-center'
            >
                <input
                    type="text"
                    value={query}
                    onChange={onQueryChange}
                    placeholder="Type something..."
                />
            </div>
        </section>
    )
}

export default Hero