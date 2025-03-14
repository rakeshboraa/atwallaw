import GlowingButton from '@/common/ButtonCommon'
import Description from '@/common/Description'
import GoogleReview from '@/common/GoogleReview'
import HeroImage from '@/common/HeroImage'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-10 pt-6 sm:pt-10 flex flex-col lg:flex-row">
      <div className='flex flex-col gap-6 sm:gap-8 flex-1 pb-8 sm:pb-11 justify-center'>
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
        <div className='flex flex-col gap-3 sm:gap-4'>
          {[
            "500+ Criminal Cases Successfully Defended",
            "Affordable & Experienced Legal Representation",
            "Flexible Payment Plans",
            "Speak Directly with a Lawyer"
          ].map((text, index) => (
            <div key={index} className='flex items-center gap-3 sm:gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F4C85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
              <span className='text-sm sm:text-[16px] font-semibold'>{text}</span>
            </div>
          ))}
        </div>
        <GoogleReview />
        <div className="flex gap-6 sm:gap-9 w-full sm:w-[90%]">
          <GlowingButton text="Contact Us" variant="outline" onClick={() => console.log("Case Results clicked")} />
          <GlowingButton text="419-212-3112" variant="filled" onClick={() => console.log("Get in Touch clicked")} />
        </div>
      </div>
      <HeroImage />
    </div>
  )
}

export default HeroSection
