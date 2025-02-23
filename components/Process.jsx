import Description from '@/common/Description'
import SubTitle from '@/common/SubTitle'
import TimelineProcess from '@/common/TimelineProcess'
import TitleCommon from '@/common/Title'

const Process = () => {
  return (
    <div className='flex flex-col gap-[140px] mt-40 '>
      <div className='flex flex-col gap-10  '>
        <TitleCommon titleText="The Court Process" />
        <SubTitle subtitle="Navigating Your Criminal Charges" />
        <Description
          descriptionText={
            <div className='flex flex-col gap-6'>
              <p>A skilled criminal lawyer in Mississauga can guide their clients through the court process, which includes several stages. Disclosure is a crucial part of this process as it involves gathering all the evidence the Crown intends to rely on in your case. Upon receipt of the disclosure, the experienced lawyer will review it with his client and formulate a defence strategy.</p>
              <p>The next stage involved discussing the case with the Crown Attorney. During these meetings, issues such as resolution, outstanding disclosure and trial estimates may be discussed. A successful negotiation might lead to a favourable resolution, avoiding the high costs associated with trial.</p>
              <p>If a resolution is not reached, the matter will proceed to a judicial pre-trial which consists of a meeting between the Crown, Defence and Judge. If the matter proceeds to trial, the Judicial Pre-Trial Judge will not be your trial Judge. </p>
            </div>
          } />
      </div>
      <div>
        <div className='w-[50%] flex flex-col gap-10'>
          <TitleCommon titleText="Why Athwals Law?" />
          <SubTitle subtitle="Commitment To You" />
          <Description descriptionText="As leading criminal lawyers in Mississauga, we specialise in a wide range of criminal defence cases, from minor charges to serious offences. Our team at Athwal Law has successfully handled cases involving theft, assault, drug offences, DUI, white-collar crimes, and more. We have built a reputation for our dedication, knowledge, and proven track record in the courtroom." />
        </div>
        <TimelineProcess />
      </div>
    </div>
  )
}

export default Process