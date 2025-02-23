import GlowingButton from '@/common/ButtonCommon'
import Description from '@/common/Description'
import GoogleReview from '@/common/GoogleReview'
import HeroImage from '@/common/HeroImage'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'
const HeroSection = () => {
  return (
    <div className=" bg-white  text-black px-6  pt-10 flex  ">
      <div className='flex flex-col gap-8 flex-1 pb-11 justify-center'>
        <TitleCommon titleText="Athwal Law" />
        <SubTitle subtitle="Experience Matters: Top Rated Criminal Lawyer" />
        <Description descriptionText="When you’re facing one of the toughest
            moments of your life, you need a criminal
            lawyer who’s ready to fight for you. At Athwal Law,
            we don’t just understand the complexities of the Canadian
            legal system—we know how to win. We have a proven record of
            success.
            The firm has defended hundreds of clients in tough criminal
            cases. Being charged with a crime is terrifying,
            and you deserve a lawyer who will stand by your side."/>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0F4C85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
            <span className='text-[16px] font-semibold'>
              500+ Criminal Cases Successfully Defended
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0F4C85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
            <span className='text-[16px] font-semibold'>
              Affordable & Experienced Legal Representation
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0F4C85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
            <span className='text-[16px] font-semibold'>
              Flexible Payment Plans
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0F4C85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
            <span className='text-[16px] font-semibold'>
              Speak Directly with a Lawyer
            </span>
          </div>
        </div>
        <GoogleReview />
        <div className="flex gap-9 w-[90%]">
          <GlowingButton text="Contact Us" variant="outline" onClick={() => console.log("Case Results clicked")} />
          <GlowingButton text="419-212-3112" variant="filled" onClick={() => console.log("Get in Touch clicked")} />
        </div>
      </div>
      <HeroImage />
    </div>
  )
}

export default HeroSection