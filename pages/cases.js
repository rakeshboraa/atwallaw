import BrickLayout from '@/common/BrickLayout'
import CaseResults from '@/common/CaseResults'
import Description from '@/common/Description'
import GoogleReview from '@/common/GoogleReview'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import { VenusAndMars } from 'lucide-react'
import React from 'react'

const cases = () => {
    return (
        <div className='mt-12 px-4 md:px-8 '>
            <div className='flex flex-col gap-10 w-full '>
                <TitleCommon titleText="Cases" />
                <SubTitle subtitle="Defending Your Rights with Proven Success" />
                <Description descriptionText="Explore our track record of achieving favorable outcomes across a wide range of criminal cases. Your case deserves experienced and dedicated representation." />
                <GoogleReview />
            </div>

            <div className='mt-20'>
                <BrickLayout />
            </div>

            <div className='flex flex-col mt-20 gap-10 w-full '>
                <TitleCommon titleText="Featured Case" />
                <SubTitle subtitle="Success Story in Criminal Defense" />
                <Description descriptionText="Explore the pivotal case where our strategic legal expertise has led to favorable outcomes, securing justice and protecting our clients’ rights." />
            </div>

            <div className='w-full flex flex-col lg:flex-row rounded p-6 gap-10 border-[#0F4C85] mt-10 border-2'>
                <div className='flex-1 flex flex-col gap-4'>
                    <div className='w-24 h-24 p-3 border-[#0F4C85] border-2 rounded-lg flex justify-center items-center'>
                        <VenusAndMars className="h-20 w-20" />
                    </div>
                    <span className='text-xl font-bold'>R. v. C, K</span>
                    <h1 className='text-xl'><span className='font-bold'>Charges: </span>Sexual Assault x2 & Extortion</h1>
                    <p className='text-lg leading-relaxed'>
                        <span className='font-bold'>Result: </span>
                        Charges dismissed following a five-day trial. At trial, counsel challenged the evidence of the complainant, highlighting issues with her credibility along with a motivation to fabricate. The client provided a false statement to the police. Despite this damaging piece of evidence, the client testified and gave an explanation that the judge accepted. As a result, the client was ultimately found not guilty of all charges.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <div className='h-64 w-64 md:h-96 md:w-96'>
                        <img src='/ig.webp' className='rounded-lg w-full h-full object-cover' />
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <TitleCommon titleText="Explore Similar Cases" />
                <CaseResults />
            </div>
        </div>
    )
}

export default cases
