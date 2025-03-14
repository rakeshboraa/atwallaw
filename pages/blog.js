import GoogleReview from '@/common/GoogleReview'
import LegalGuide from '@/common/LegalGuide'
import { Star } from 'lucide-react'
import React from 'react'

const Blog = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="my-6 lg:my-10 flex flex-col w-full lg:w-2/3">
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

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-2">
                        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg">Previous</button>
                        <button className="px-3 py-1 rounded-lg">1</button>
                        <button className="px-3 py-1 rounded-lg">2</button>
                        <button className="px-3 py-1 rounded-lg">3</button>
                        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg">Next</button>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 mt-6 lg:mt-14">
                    <div className="w-[150px] h-[60px] mb-4">
                        <img src="/google.png" className="w-full h-full" alt="Google" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex gap-3 items-center">
                            <span className="font-medium text-3xl">5.0</span>
                            <div className="flex">
                                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                                <Star className="w-6 h-6 text-yellow-500" fill="currentColor" stroke="none" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 mt-7 items-center lg:items-start w-full">
                        <h1 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
                            Get a Consultation Right Now
                        </h1>
                        <h3 className="text-sm md:text-base text-center lg:text-left">CALL US 24/7</h3>
                        <h2 className="text-xl md:text-2xl text-center lg:text-left">(1844) 978-8444</h2>
                    </div>

                    <div className="mt-10 lg:mt-20 text-center lg:text-left w-full">
                        <h1 className="text-xl md:text-2xl font-extrabold">Service Locations</h1>
                        <ul className="text-base md:text-lg flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
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

export default Blog