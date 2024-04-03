import React from 'react'
import Overlay from '@components/ui/Overlay'
import heroImage from '@/assets/hero.jpg'

const Hero = ({ children }) => {
    return (
        <section
            className='w-full p-8 m-4 z-10'
        >
            <div
                className='relative border-2 border-black p-8 rounded-lg bg-cover bg-center flex items-center justify-center'
                style={{
                    height: '40vh',
                    backgroundImage: `url(${heroImage})`
                }}
            >
                <Overlay />
                
                { children }
            </div>
        </section>
    )
}

export default Hero