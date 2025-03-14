import ContactForm from '@/common/ContactForm'
import Description from '@/common/Description'
import TitleCommon from '@/common/Title'
import React from 'react'

const Contact = () => {
    return (
        <div className='mt-10 px-4 md:px-6 lg:px-8 '>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex flex-col lg:w-1/2'>
                    <div className='flex flex-col gap-6 md:gap-10 mt-4 md:mt-7 w-full'>
                        <TitleCommon titleText="Contact Us" />
                        <Description descriptionText="Discover a personalized approach to criminal law at our firm. Our firm is committed to providing individualized attention to every client. Don't navigate the complexities alone – contact me today for a confidential consultation. Together, we'll protect your rights and secure the best possible outcome." />
                    </div>
                    <div className='mt-10 md:mt-20 flex flex-col gap-8 md:gap-11'>
                        <div className='flex flex-col gap-2 md:gap-4'>
                            <h1 className='text-2xl md:text-3xl font-bold'>Address</h1>
                            <p className='text-lg md:text-xl lg:text-2xl'>223-6200 Dixie Rd, Mississauga, ON L5T 2E1</p>
                        </div>
                        <div className='flex flex-col gap-2 md:gap-4'>
                            <h1 className='text-2xl md:text-3xl font-bold'>Phones</h1>
                            <p className='text-lg md:text-xl lg:text-2xl'>(844) 978-8444</p>
                        </div>
                        <div className='flex flex-col gap-2 md:gap-4'>
                            <h1 className='text-2xl md:text-3xl font-bold'>E-mail</h1>
                            <p className='text-lg md:text-xl lg:text-2xl'>info@Athwal.com</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0 lg:w-1/2'>
                    <div className='h-64 sm:h-80 md:h-96 lg:h-[550px] w-full'>
                        <img 
                            src="/location.png" 
                            className='h-full w-full object-cover rounded-lg'
                            alt="Office location"
                        />
                    </div>
                </div>
            </div>
            <div className='mt-10 md:mt-16'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact