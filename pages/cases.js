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
        <div className='text-white mt-40 '>
            <div className='flex flex-col gap-10 w-[80%]'>
                <TitleCommon titleText="Cases" />
                <SubTitle subtitle="Defending Your Rights with Proven Success" />
                <Description descriptionText="Explore our track record of achieving favorable outcomes across a wide range of criminal cases. Your case deserves experienced and dedicated representation." />
                <GoogleReview />
            </div>
            <div className='mt-20'>
                <BrickLayout />
            </div>
            <div className='flex flex-col mt-20 gap-10 w-[70%]'>
                <TitleCommon titleText="Featured Case" />
                <SubTitle subtitle="Success Story in Criminal Defense" />
                <Description descriptionText="Explore the pivotal case where our strategic legal expertise has led to favorable outcomes, securing justice and protecting our clients’ rights." />
            </div>
            <div className='w-full flex rounded p-10 gap-10 bg-slate-900 '>
                <div className='flex flex-1 flex-col gap-4 w-full   rounded-lg'>
                    <div className='w-[100px] h-[100px] p-3 bg-slate-800 rounded-lg flex justify-center items-center'>
                        <VenusAndMars className="h-[90px] w-[90px] " />
                    </div>
                    <span className='text-xl font-boldtext-xl font-bold'>
                        R. v. C, K
                    </span>
                    <h1 className='text-xl'><span className='font-bold'>Charges: </span>
                        Sexual Assault x2 & Extortion
                    </h1>
                    <p className='text-xl leading-[45px]'>
                        <span className='font-bold'>Result: </span>
                        Charges dismissed following a five-day trial. At trial, counsel challenged the evidence of the complainant, highlighting issues with her credibility along with a motivation to fabricate. The client provided a false statement to the police. Despite this damaging piece of evidence, the client testified and gave an explanation that the judge accepted. As a result, the client was ultimately found not guilty of all charges.
                    </p>
                </div>
                <div className=' flex justify-center'>
                    <div className='h-[400px] w-[5s00px]'>
                        <img src='/ig.webp' className='rounded-lg w-full h-full' />
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