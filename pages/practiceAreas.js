import GlowingButton from '@/common/ButtonCommon'
import ContactForm from '@/common/ContactForm'
import Description from '@/common/Description'
import GoogleReview from '@/common/GoogleReview'
import HeroImage from '@/common/HeroImage'
import LegalTermsGrid from '@/common/LegalTermGrid'
import SimilarArticles from '@/common/SimilarArticles'
import SubTitle from '@/common/SubTitle'
import TestimonialCard from '@/common/TestimonialCard'
import TitleCommon from '@/common/Title'
import React from 'react'

const practiceAreas = () => {
    return (
        <>
            <div className=" h-[50vh] px-6 w-[80%] pt-5 flex  ">
                <div className='flex flex-col gap-10 justify-end flex-1 lg-pb-11  '>
                    <TitleCommon titleText="Practice Areas" />
                    <SubTitle subtitle="Explore Our Practice Areas" />
                    <Description descriptionText="Delve into detailed case studies across a variety of legal practice areas, showcasing our strategic defense and successful outcomes." />
                    <GoogleReview />
                </div>
            </div>
            <div className='flex flex-col  mt-20 px-3'>
                <TitleCommon titleText="Practice Areas" />
                <LegalTermsGrid />
            </div>
            <div className="flex flex-col gap-0 xl:gap-10 lg:flex-row px-4">
                <div className='flex gap-7 w-[100%] sm:w-[80%] md:w-[75%] lg:w-[75%] xl:w-[65%] flex-col  my-20'>
                    <TitleCommon titleText="Assault with a Weapon" />
                    <SubTitle subtitle="Navigating the Legal Battle: Securing a Skilled Assault with a Weapon Lawyer" />
                    <div className='flex flex-col '>
                        <h1 className="flex flex-col sm:flex-row text-xl sm:text-2xl gap-2">
                            <span className="font-extrabold whitespace-nowrap">Our Location:</span>
                            <p className="sm:whitespace-normal">
                                Toronto, Brampton, Hamilton, Kitchener, Milton, Newmarket, Oshawa
                            </p>
                        </h1>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='font-extrabold text-4xl'>Assault with a Weapon Lawyer</h1>
                        <Description descriptionText="If you or your loved one is charged with Assault with a Weapon, you need to hire a skilled lawyer immediately. As compared to simple assault, assault with a weapon is a more serious crime and has severe consequences. Even if you did not actually strike the other person, you could be charged and face consequences. We are here to help you win the legal battle. Athwal Law is a recognized criminal law firm offering excellent criminal defense solutions.  In legal terms, assault is defined as the application of force against another individual without their consent. Assault with a Weapon is a broad criminal category because anything can be a weapon- a gun, knife, or any other object used with force to cause harm. The consequence of this type of offense could be sentencing for ten years in prison. If you are found guilty of Assault with a Weapon, you will have a permanent criminal record that can impact your employment prospects and may even restrict travel freedom.  Over the years, we have successfully represented individuals accused of Assault with a Weapon. We find every possible way to reduce the penalties or eliminate charges completely.  As an experienced criminal lawyer, we have handled several cases of Assault with a Weapon. It is essential to hire an experienced criminal defence lawyer as soon as possible to ensure the best possible outcome of your case. Contact us today for a consultation to discuss the unique facts surrounding your case, and let us get to work defending the allegations made against you!" />
                    </div>
                    <div className="flex flex-col gap-6 w-full border-2 border-[#0F4C85] p-6 sm:p-8 md:p-12 lg:p-16 rounded-md">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[40px] sm:leading-[50px] md:leading-[55px]">
                            Need Legal Guide? <br />
                            Look to Antar's Side!
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl">
                            Seeking guidance through legal challenges? Let us navigate the complexities together and find solutions tailored to your needs.
                        </p>
                        <div className="w-full sm:w-3/4 md:w-2/4">
                            <GlowingButton text="Get in Touch" variant="filled" />
                        </div>
                    </div>
                    <div className='flex flex-col mt-8 gap-4'>
                        <SubTitle font={4} subtitle="What Is Assault with a Weapon According to the Criminal Code?" />
                        <Description descriptionText={
                            <>
                                <p>Assault is defined under section 265 of Canada’s Criminal Code as the deliberate application of force against someone, either directly or indirectly, against their will. A person can be prosecuted for assault with a deadly weapon or assault causing bodily harm according to section 267 of the Code if they:</p>
                                <ul className="list-disc pl-5">
                                    <li>Carry, threaten to use, or make use of a weapon or an imitation thereof</li>
                                    <li>Afflict bodily harm</li>
                                    <li>Choke, strangle, or smother the victim</li>
                                </ul>
                                <p className='mt-5'>Anyone who uses a weapon or an imitation of a weapon to knowingly exert force or threaten to apply force to someone else can be accused of assaulting that person with a weapon. Assault with a weapon might be as simple as throwing a cellphone at someone. In the event of assault causing serious bodily harm, the assault must result in physical harm to the victim. The injury must interfere with the victim’s wellbeing or comfort significantly.</p>
                            </>
                        } />
                    </div>
                    <div className='flex flex-col mt-8 gap-4'>
                        <SubTitle font={4} subtitle="What Is a Weapon?" />
                        <Description descriptionText={
                            <>
                                <p>Section 2 of the Code defines weapons as any object used, intended to be used, or designed to be used to:</p>
                                <ul className="list-disc pl-5">
                                    <li>Cause death or serious injury</li>
                                    <li>Threaten or intimidate someone</li>
                                </ul>
                                <p className='mt-5'>Moreover, proving that the weapon was not used to inflict injury is insufficient to dismiss the criminal charges. A charge could still be made out if the Crown Attorney can establish that the accused used the weapon during the crime or intimidated the alleged victim</p>
                            </>
                        } />
                    </div>
                    <div className='flex flex-col mt-8 gap-4'>
                        <SubTitle font={4} subtitle="Examples of Weapons" />
                        <Description descriptionText={
                            <>
                                <p>Here are a few examples of weapons used in many cases of assault with a weapon:</p>
                                <ul className="list-disc pl-5">
                                    <li>Knives and other sharp objects</li>
                                    <li>A Cellphone</li>
                                    <li>A firearm or an imitation firearm</li>
                                    <li>Glass bottles</li>
                                    <li>Shovels, clubs, and other similar objects </li>
                                </ul>
                            </>
                        } />
                    </div>
                    <div className='flex flex-col mt-8 gap-4'>
                        <SubTitle font={4} subtitle="The Consequences of Assault with a Weapon" />
                        <Description descriptionText={
                            <>
                                <p>Assault with a weapon is considered a hybrid offence. The Crown Attorney will decide whether the crime will be classified as a somewhat less serious summary conviction or an indictable offence, which is more serious and carries severe consequences. The circumstances of the assault, such as the use of a weapon or the severity of the injuries inflicted, will be taken into account when making this determination. An assault with a weapon in a domestic context will likely require a bail hearing. Upon release, the individual will be subjected to certain bail conditions i.e. prohibiting contact with the victim.</p>
                            </>
                        } />
                    </div>
                    <h1 className="my-4 text-xl sm:text-2xl md:text-3xl">
                        The Penalties for a Summary Conviction Versus an Indictable Offence
                    </h1>
                    <div className="h-[15rem] sm:h-[18rem] md:h-[20rem] w-[90%] sm:w-[80%] md:w-[30rem] mx-auto">
                        <img src="https://images.surferseo.art/f9f764a6-b5b5-4fc5-bf02-8bc721264a1f.png" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xl mb-6">
                        Anyone convicted or found guilty of assault with a weapon can face a maximum penalty of 18 months in jail for a summary conviction. If the accused is found guilty of a more serious criminal offence, he or she faces a maximum sentence of ten years imprisonment. Discuss your options with your criminal defence lawyer to determine the best possible outcome for your case. The court will be more understanding of your circumstances as a first-time offender. Expect to receive a stiffer sentence if it is not your first offence.
                    </p>

                    <SubTitle font={4} subtitle="What Must Be Proved for a Criminal Conviction?" />

                    <div className="h-80 w-full md:w-[30rem] mx-auto my-6">
                        <img
                            src="https://images.surferseo.art/c18ac33b-19c8-436b-8923-831e7fab638c.png"
                            alt="Evidence"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <SubTitle font={4} subtitle="What If the Victim Gave Consent?" />
                        <Description
                            descriptionText={
                                <p>
                                    Anyone convicted or found guilty of assault with a weapon can face a maximum penalty of 18 months in jail for a summary conviction. If the accused is found guilty of a more serious criminal offence, he or she faces a maximum sentence of ten years imprisonment. Discuss your options with your criminal defence lawyer to determine the best possible outcome for your case. The court will be more understanding of your circumstances as a first-time offender. Expect to receive a stiffer sentence if it is not your first offence.
                                </p>
                            }
                        />
                    </div>

                    <div className="flex flex-col mt-8 gap-4">
                        <SubTitle font={4} subtitle="Examples of Weapons" />
                        <Description
                            descriptionText={
                                <>
                                    <p>Here are a few examples of weapons used in many cases of assault with a weapon:</p>
                                    <ul className="list-disc pl-5">
                                        <li>Knives and other sharp objects</li>
                                        <li>A Cellphone</li>
                                        <li>A firearm or an imitation firearm</li>
                                        <li>Glass bottles</li>
                                        <li>Shovels, clubs, and other similar objects</li>
                                    </ul>
                                </>
                            }
                        />
                    </div>

                </div>
                <div className='flex flex-col gap-9'>
                    <ContactForm />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <SimilarArticles />
                </div>
            </div>
            <div className="px-6 flex flex-col mt-8 lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
                <div className="flex flex-col gap-8 flex-1 pb-11 justify-center text-center lg:text-left">
                    <TitleCommon titleText="Get In Touch" />
                    <SubTitle
                        subtitle={
                            <>
                                Need Legal Guide? <br /> Look to Antar's Side!
                            </>
                        }
                    />
                    <Description descriptionText="Seeking guidance through legal challenges? Let us navigate the complexities together and find solutions tailored to your needs." />
                    <div className="flex gap-6 sm:gap-9 w-full sm:w-[90%]">
                        <GlowingButton text="Contact Us" variant="outline" onClick={() => console.log("Case Results clicked")} />
                        <GlowingButton text="419-212-3112" variant="filled" onClick={() => console.log("Get in Touch clicked")} />
                    </div>
                </div>
                <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                    <HeroImage />
                </div>
            </div>
        </>
    )
}

export default practiceAreas