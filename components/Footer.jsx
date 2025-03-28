import { Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=' flex flex-col md:flex-row mb-2 mt-20 px-4 md:px-0'>
        <div className='flex flex-col w-full md:w-1/4 gap-5'>
          <div className='font-bold text-3xl'>Athwal Law</div>
          <p className='text-xl'>Don’t leave your defence to chance! Contact a Criminal Lawyer Mississauga today.</p>
          <div className="flex gap-6">
            <div className="border-2 cursor-pointer border-solid p-3 rounded-full border-red-800 shadow-lg transition-all duration-300 hover:shadow-red-500/50 hover:scale-110">
              <Youtube size={30} className="text-red-800 drop-shadow-[0_0_10px_#ff0000]" />
            </div>
            <div className="border-2 cursor-pointer border-solid p-3 rounded-full border-blue-400 shadow-lg transition-all duration-300 hover:shadow-blue-400/50 hover:scale-110">
              <Twitter size={30} className="text-blue-400 drop-shadow-[0_0_10px_#00acee]" />
            </div>
            <div className="border-2 cursor-pointer border-solid p-3 rounded-full border-blue-800 shadow-lg transition-all duration-300 hover:shadow-blue-800/50 hover:scale-110">
              <Linkedin size={30} className="text-blue-800 drop-shadow-[0_0_10px_#0077b5]" />
            </div>
          </div>
          <div className='flex flex-col gap-1 text-xl'>
            <h1 className='uppercase'>OPEN HOUR</h1>
            <h2 className='text-lg'>Monday to Saturday, 9:00 AM - 10:00 PM</h2>
          </div>
        </div>

        <div className='flex flex-wrap w-full md:w-3/4 mt-10 md:mt-0 gap-8'>
          <div className='flex-1 min-w-[200px]'>
            <h2 className='uppercase text-2xl'>Practice areas</h2>
            <ul className='flex flex-col gap-4 my-6 text-[18px]'>
              <li>Assault</li>
              <li>Bail Hearing</li>
              <li>Break and Enter</li>
              <li>Criminal Harassment</li>
              <li>Domestic Assault</li>
              <li>Drug Possession Offence</li>
            </ul>
          </div>

          <div className='flex-1 min-w-[200px]'>
            <h2 className='uppercase text-2xl'>Additional Services</h2>
            <ul className='flex flex-col gap-4 my-6 text-[18px]'>
              <li>Impaired Driving</li>
              <li>Fraud</li>
              <li>Gun Offences</li>
              <li>Mischief</li>
              <li>Theft</li>
              <li>Youth Offences</li>
            </ul>
          </div>

          <div className='flex-1 min-w-[200px]'>
            <h2 className='uppercase text-2xl'>head office</h2>
            <ul className='flex flex-col gap-4 my-6 text-[18px]'>
              <li>Athwal Law Professional Corporation</li>
              <li>223-6200 Dixie Rd, Mississauga, ON L5T 2E1</li>
              <li>Email: info@kahlonlaw.com</li>
              <li>Phone: 416-502-8555</li>
              <li>Get Directions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className="border-white" />
      <div className='flex flex-wrap gap-4 my-7 text-black w-full text-[18px] justify-center px-4'>
        <span>Terms and Conditions</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>© 2023 Athwals Law</span>
        <span>|</span>
        <span>All rights reserved</span>
      </div>
    </>
  )
}

export default Footer
