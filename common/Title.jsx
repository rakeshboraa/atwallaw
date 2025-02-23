import React from 'react'

const TitleCommon = ({ titleText }) => {
  return (
    <h1 className="flex items-center  gap-4 text-5xl font-bold ">
      <span className="w-24 h-[3px] bg-gradient-to-r from-[#0F4C85] to-blue-500 mr-4"></span>
      {titleText}
    </h1>
  )
}

export default TitleCommon