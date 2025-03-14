import Description from '@/common/Description'
import TitleCommon from '@/common/Title'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='my-20 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 w-full sm:w-[70%]  '>
        <TitleCommon titleText="Let's Work Together" />
        <Description descriptionText="Seeking guidance through legal challenges? Let us navigate the complexities and find solutions tailored to your needs." />
        <div className='flex flex-col gap-5'>
          <h2 className='text-[20px] sm:text-[24px] font-bold text-[#0F4C85]'>Other Cities We Service</h2>
          <div className="flex flex-wrap gap-2 font-bold text-lg sm:text-2xl">
            <span className='cursor-pointer'>Toronto</span>
            <span className="cursor-pointer before:content-['|'] before:mx-2">Brampton</span>
            <span className="cursor-pointer before:content-['|'] before:mx-2">Hamilton</span>
            <span className="cursor-pointer before:content-['|'] before:mx-2">Kitchener</span>
            <span className="cursor-pointer before:content-['|'] before:mx-2">Newmarket</span>
            <span className="cursor-pointer before:content-['|'] before:mx-2">Oshawa</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button className="p-4 w-full sm:w-[50%] rounded-md border-[#0F4C85] border-solid border-2 text-[#0F4C85] shadow-[0_0_15px_#0F4C85]">
            Contact Us
          </button>
          <button className="p-4 w-full sm:w-[50%] rounded-md bg-[#0F4C85] text-white shadow-[0_0_15px_#0F4C85] transition-all duration-300 hover:shadow-[0_0_25px_#0F4C85]">
            419-212-3112
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs