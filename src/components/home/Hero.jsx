import React from 'react'
import Shadow from '@components/ui/Shadow'
import heroImage from '@/assets/hero.jpg'
import Sticker from '@components/ui/Sticker'

const Hero = ({ children }) => {
    return (
        <section
            className='w-full p-8 m-4 z-10'
        >
            <div
                className='relative border-2 border-black p-8 rounded-lg bg-cover bg-center flex flex-col items-center justify-center'
                style={{
                    height: '40vh',
                    backgroundImage: `url(${heroImage})`
                }}
            >
                <Shadow />

                <Sticker classes='bg-black'>
                    Help Us Help You
                </Sticker>

                { children }
            </div>
        </section>
    )
}

export default Hero