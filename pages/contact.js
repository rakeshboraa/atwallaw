import ContactForm from '@/common/ContactForm'
import Description from '@/common/Description'
import TitleCommon from '@/common/Title'
import React from 'react'

const contact = () => {
    return (
        <div className='mt-10 text-white'>
            <div className='flex flex-1'>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-10 mt-7 w-[90%]'>
                        <TitleCommon titleText="Contact Us" />
                        <Description descriptionText="Discover a personalized approach to criminal law at our firm. Our firm is committed to providing individualized attention to every client. Don’t navigate the complexities alone – contact me today for a confidential consultation. Together, we’ll protect your rights and secure the best possible outcome." />
                    </div>
                    <div className='mt-20 flex flex-col gap-11'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[30px]'>Address</h1>
                            <p2 className='text-[23px]'>223-6200 Dixie Rd, Mississauga, ON L5T 2E1</p2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[30px]'>Phones</h1>
                            <p2 className='text-[23px]'>(844) 978-8444</p2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[30px]'>E-mail</h1>
                            <p2 className='text-[23px]'>info@atwal.com</p2>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                 <div className='h-[550px] w-[700px]'>
                    <img src="/location.png" className='h-full w-full'/>
                 </div>
                </div>

            </div>
            <ContactForm />
        </div>
    )
}

export default contact