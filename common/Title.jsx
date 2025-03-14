import React from 'react'

const TitleCommon = ({ titleText }) => {
  return (
    <h1 className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#0F4C85] to-blue-500 mr-2 sm:mr-4"></span>
      {titleText}
    </h1>
  )
}

export default TitleCommon