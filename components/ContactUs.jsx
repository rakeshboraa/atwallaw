import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='my-20 '>
      <div className='flex flex-col gap-10 w-[50%]'>
        <TitleCommon titleText="Let's Work Together" />
        <Description descriptionText="Seeking guidance through legal challenges? Let us navigate the complexities and find solutions tailored to your needs." />
        <div className='flex flex-col  gap-5'>
          <h2 className='text-[24px] font-bold text-[#0F4C85]'>Other Cities We Service</h2>
          <div className="flex   space-x-2 font-bold text-2xl">
            <span className=' cursor-pointer'>Toronto</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Brampton</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Hamilton</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Kitchener</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Newmarket</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Oshawa</span>
            <span className="cursor-pointer before:content-['|'] before:mr-2">Vaughan</span>
          </div>
        </div>
        <div className="flex gap-9 w-[90%]">
          <button className="p-4 w-[50%] rounded-md border-[#0F4C85] border-solid border-2 text-[#0F4C85] shadow-[0_0_15px_#0F4C85]">
            Contact Us
          </button>
          <button className="p-4 w-[50%] rounded-md bg-[#0F4C85] text-white shadow-[0_0_15px_#0F4C85] transition-all duration-300 hover:shadow-[0_0_25px_#0F4C85]">
            419-212-3112
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs