import React from 'react'

const Description = ({ descriptionText }) => {
    return (
        <div className='text-base sm:text-lg md:text-xl lg:text-2xl leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]'>
            {descriptionText}
        </div>
    )
}

export default Description