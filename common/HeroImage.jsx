import React from 'react'

const HeroImage = () => {
    return (
        <div className='flex-1 justify-center items-center flex '>
            <div className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] md:h-[650px] lg:h-[760px]'>
                <img src="/athwal.png" alt="" className='w-full h-full relative bottom-[20px] sm:bottom-[25px] md:bottom-[30px] lg:bottom-[33px] rounded-b-lg' />
            </div>
        </div>
    )
}

export default HeroImage