import { Star } from 'lucide-react'
import React from 'react'

const GoogleReview = () => {
    return (
        <div className='flex items-center'>
            <div className='w-[120px] h-[60px]'>
                <img src="/Glogo.png" className='w-full h-full' alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                    <span className=' font-medium text-3xl'>5.0</span>
                    <div className='flex'>
                        <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                        <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                        <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                        <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                        <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                    </div>
                </div>
                <div>
                    Based on 100+ reviews
                </div>
            </div>
        </div>
    )
}

export default GoogleReview