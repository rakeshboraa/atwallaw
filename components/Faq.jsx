import Description from '@/common/Description'
import FaqDropDown from '@/common/FaqDropDown'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'

const Faq = () => {
  return (
    <div className='mt-20 sm:mt-40 px-4 sm:px-6 '>
      <div className='flex flex-col gap-6 w-full sm:w-[70%] md:w-[50%] '>
        <TitleCommon titleText="FAQ" />
        <SubTitle subtitle="Your Questions, Our Clarity" />
        <Description descriptionText="Explore answers to common questions regarding legal processes, rights, and procedures. Get clarity on your concerns with our comprehensive FAQ." />
      </div>
      <div className=''>
        <FaqDropDown />
      </div>
    </div>
  )
}

export default Faq
