import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import { Star } from 'lucide-react'
import React from 'react'
import ReviewSlider from './ReviewSlider'

const Testimonial = () => {
  return (
    <div className='mt-10 px-4 sm:px-6 lg:px-0'>
      <div className='flex flex-col gap-10 w-full md:w-[70%] lg:w-[50%]'>
        <TitleCommon titleText="Testimonials" />
        <SubTitle subtitle="What Our Clients Say" />
        <Description descriptionText="At Athwal Law, we believe it’s crucial for you to know us. So, take a moment to read our Google reviews. They highlight our dedication to clients and our drive for successful outcomes." />
      </div>

      <div className='w-full flex flex-wrap gap-10 mt-16 lg:mt-20'>
        <div className='flex mt-8 flex-col gap-2 items-center w-full sm:w-auto'>
          <h1 className='uppercase font-medium text-2xl'>Excellent</h1>
          <div className='flex'>
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" fill="currentColor" stroke="none" />
            ))}
          </div>
          <p className='text-lg sm:text-xl font-semibold'>Based on 129 reviews</p>
          <div className='w-20 h-20 sm:w-28 sm:h-28'>
            <img src="/google.png" alt="" />
          </div>
        </div>
        <div className='flex-1 w-full sm:w-auto'>
          <ReviewSlider items={[1, 2, 3, 4, 5, 6, 7]} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
