import GoogleReview from '@/common/GoogleReview'
import LegalGuide from '@/common/LegalGuide'
import { Star } from 'lucide-react'
import React from 'react'

const blog = () => {
    return (
        <div>
            <div className='flex  gap-10'>
                <div className='my-10 flex flex-col w-[75%]'>
                    <LegalGuide
                        title="A Guide to Sexual Assault Charges And Their Consequences"
                        description="Being charged with a sexual assault crime can be a traumatic and overwhelming experience. It's important to remember that you have the right to seek legal advice from a criminal..."
                    />
                    <LegalGuide
                        title="A Guide to Sexual Assault Charges And Their Consequences"
                        description="Being charged with a sexual assault crime can be a traumatic and overwhelming experience. It's important to remember that you have the right to seek legal advice from a criminal..."
                    />
                    <LegalGuide
                        title="A Guide to Sexual Assault Charges And Their Consequences"
                        description="Being charged with a sexual assault crime can be a traumatic and overwhelming experience. It's important to remember that you have the right to seek legal advice from a criminal..."
                    />
                    <LegalGuide
                        title="A Guide to Sexual Assault Charges And Their Consequences"
                        description="Being charged with a sexual assault crime can be a traumatic and overwhelming experience. It's important to remember that you have the right to seek legal advice from a criminal..."
                    />

                    <div className="mt-6 flex  space-x-2">
                        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg">Previous</button>
                        <button className="px-3 py-1  text-white rounded-lg">1</button>
                        <button className="px-3 py-1  text-white rounded-lg">2</button>
                        <button className="px-3 py-1  text-white rounded-lg">3</button>
                        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg">Next</button>
                    </div>
                </div>
                <div className='flex flex-col mt-14 flex-1 text-white items-center w-full'>
                    <div className='w-[150px] h-[60px] '>
                        <img src="/google.png" className='w-full h-full' alt="" />
                    </div>
                    <div className='flex flex-col  '>
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

                    </div>
                    <div className='flex flex-col  gap-4 mt-7'>
                        <h1 className='text-[25px] font-semibold'>
                            Get a Consultation Right Now
                        </h1>
                        <h3 className='text-[15px] text-center'>CALL US 24/7</h3>
                        <h2 className='text-[25px] text-center'>(1844) 978-8444</h2>
                    </div>

                    <div className='mt-20  text-start w-full'>
                        <h1 className='text-[24px] font-extrabold'>Service Locations</h1>
                        <ul className='text-[20px] flex flex-col gap-8 mt-6'>
                            <li>Criminal Lawyer Toronto</li>
                            <li>Trusted Criminal Lawyer</li>
                            <li>Criminal Lawyer Oakville</li>
                            <li>Criminal Lawyer Newmarket</li>
                            <li>Criminal Lawyer Hamilton</li>
                            <li>Criminal Lawyer Scarborough</li>
                            <li>Criminal Lawyer Vaughan</li>
                            <li>Criminal Lawyer Kitchener</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blog