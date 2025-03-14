import AutoSlider from '@/common/AutoSlider'
import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'

const PracticesArea = () => {
  return (
    <div className='mt-20 practice_area md:mt-40 px-4 md:px-0'>
      <div className='flex flex-col gap-6 md:gap-10 w-full md:w-[50%]'>
        <TitleCommon titleText="Practice Areas" />
        <SubTitle subtitle="Areas We Have Successfully Handled" />
        <Description descriptionText="With a strong track record in defending individuals accused of sexual assault, firearm offences, drug crimes, and many more, we know how to fight for your rights. Explore our practice areas and discover the defence strategies that have made a real difference for others." />
      </div>
      <div className='flex justify-center items-center mt-6 md:mt-10 w-full'>
        <AutoSlider items={[1, 24, 4, 56, 6]} />
      </div>
    </div>
  )
}

export default PracticesArea