import React from 'react'

const SubTitle = ({ subtitle, font }) => {
    return (
        <h2 className={`text-${font ? font : 5}xl font-bold w-[100%] `}>{subtitle}</h2>
    )
}

export default SubTitle