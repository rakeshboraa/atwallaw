import React from 'react'

const SubTitle = ({ subtitle, font }) => {
    return (
        <h2 className={`text-${font ? font : '2xl'} sm:text-${font ? font : '3xl'} md:text-${font ? font : '4xl'} lg:text-${font ? font : '5xl'} font-bold w-[100%]`}>{subtitle}</h2>
    )
}

export default SubTitle