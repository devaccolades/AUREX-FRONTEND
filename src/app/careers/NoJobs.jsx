import React from 'react'
import Image from 'next/image'
import docImg from '../../../public/images/careers/doc-img.svg'

export default function NoJobs() {
  return (
    <>
    <div className='flex justify-center items-center pt-6 lg:pt-16'>
        <Image src={docImg} alt='doc-img' />
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
        <h1 className='uppercase font-urban font-extrabold lg:text-[16px] md:text-[14px] text-[12px]'>No open positions at the moment</h1>
        <p className='font-poppins font-normal text-[12px] md:text-[14px] leading-[18px] w-[90%] lg:w-[50%] text-center'>We’re not hiring right now, but we’re always excited to connect with skilled individuals. Share your resume, and we’ll reach out when a suitable opportunity opens up.</p>
        <button className='rounded-full bg-black text-white px-2 py-2 font-urban font-bold text-[12px] md:text-[13px] leading-[12px]'>Submit Your Resume</button>
    </div>
    </>
  )
}
