import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import { Star } from 'lucide-react'
import React from 'react'
import ReviewSlider from './ReviewSlider'

const Testimonial = () => {
  return (
    <div className=' mt-10 '>
      <div className='flex flex-col gap-10 w-[50%]'>
        <TitleCommon titleText="Testimonials" />
        <SubTitle subtitle="What Our Clients Say" />
        <Description descriptionText="At Athwal Law, we believe it’s crucial for you to know us. So, take a moment to read our Google reviews. They highlight our dedication to clients and our drive for successful outcomes." />
      </div>
      <div className='w-full flex gap-20 mt-20'>
        <div className='flex mt-8  flex-col gap-2 items-center'>
          <h1 className='uppercase font-medium text-2xl'>Excellent</h1>
          <div className='flex'>
            <Star className="w-8 h-8 text-yellow-500" fill="currentColor" stroke="none" />
            <Star className="w-8 h-8 text-yellow-500" fill="currentColor" stroke="none" />
            <Star className="w-8 h-8 text-yellow-500" fill="currentColor" stroke="none" />
            <Star className="w-8 h-8 text-yellow-500" fill="currentColor" stroke="none" />
            <Star className="w-8 h-8 text-yellow-500" fill="currentColor" stroke="none" />
          </div>
          <p className='text-xl font-semibold'>Based on 129 reviews</p>
          <div className='w-28 h-28 '>
            <img src="/google.png" alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <ReviewSlider items={[1, 2, 3, 4, 5, 6, 7]} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial