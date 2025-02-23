import CaseCard from '@/common/CaseCard'
import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TitleCommon from '@/common/Title'
import { SearchCheck, VenusAndMars } from 'lucide-react'
import React from 'react'
import Companies from './Companies'

const FeaturedSection = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col gap-10 w-[50%]'>
        <TitleCommon titleText="Featured Cases" />
        <SubTitle subtitle="Our Track Record" />
        <Description descriptionText="At Atwal Law, our remarkable successes in past cases showcase our experience in achieving favorable outcomes for clients just like you. Explore our track record and contact us today to see how we can make a difference in your criminal case." />
      </div>
      <div className='flex mt-14  gap-10'>
        <div className='flex-1'>
          <CaseCard
            icon={VenusAndMars}
            caseRef="R. v. S, K"
            title="Sexual Assault x2 & Extortion"
            description="The court dismissed all charges after a week of trial. Defence counsel revealed inconsistencies in the complainant’s testimony, undermining her credibility. Although the accused had lied to police at first, he later took the stand to clarify. The judge found his testimony credible, resulting in an acquittal."
            buttonText="Case Results"
          />

        </div>
        <div className='flex-1'>
          <CaseCard
            icon={SearchCheck}
            caseRef="R. v. S, K"
            title="Possession of a Loaded Firearm"
            description="Officers detected the smell of marijuana, prompting a vehicle search. They discovered a loaded firearm in the trunk. The defence strategy focused on the lack of evidence tying our client to the firearm. The lawyer argued that the client neither possessed nor knew about the gun or its loaded status. After two days of preliminary hearing, the Judge dismissed all charges."
            buttonText="Case Results"
          />
        </div>
      </div>
      <Companies />
    </div>
  )
}

export default FeaturedSection