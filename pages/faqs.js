import Description from '@/common/Description'
import FaqDropDown from '@/common/FaqDropDown'
import GoogleReview from '@/common/GoogleReview'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import React from 'react'

const Faqs = () => {
    return (
        <div className='mt-20 md:mt-40 px-4 '>
            <div className='flex flex-col gap-10 '>
                <TitleCommon titleText="FAQ" />
                <SubTitle subtitle="Frequently Asked Questions About Our Law Firm" />
                <Description descriptionText="Athwal Law Professional Corporation strives to provide cost-efficient legal solutions. Recognizing that criminal charges are largely an unplanned expense, Athwal Law offers clients the option of an affordable monthly payment plan. The firm is committed on providing you with the best representation in an affordable and stress-free manner." />
                <GoogleReview />
            </div>
            <div className='p-4  max-h-screen'>
                <FaqDropDown />
            </div>
        </div>
    )
}

export default Faqs;
