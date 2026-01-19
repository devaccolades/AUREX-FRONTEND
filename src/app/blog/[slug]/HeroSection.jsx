import React from 'react'
import Image from 'next/image'
import MainImg from '../../../../public/images/blog-inner/main.svg'
import chat from '../../../../public/images/blog-inner/message.svg'
import whatsapp from '../../../../public/images/blog-inner/whatsapp.svg'

export default function HeroSection({data}) {
  return (
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] border-b border-gray-200">
    <Image
      src={MainImg}
      alt="main-img"
      fill
      className="object-cover"
      priority
    />

    {/* Overlay text */}
    <div className="absolute inset-0 flex flex-col justify-end items-center text-white mb-3 md:mb-4 lg:mb-6">
      <div className="inline-flex items-center gap-1 font-urban font-medium text-[12px] lg:text-[13px] text-black bg-white px-2 py-1.5 mb-2 md:mb-3 lg:mb-4 rounded-full border border-black leading-[12px] lg:leading-[13px]">
        {data.type}
      </div>

      <div className="font-urbanist font-bold text-[18px] leading-[20px] md:text-[21px] md:leading-[24px] lg:text-[28px] lg:leading-[28px] xl:text-[36px] xl:leading-[36px] text-center text-black w-[80%] md:w-[35%]">
        {data.title}
      </div>
    </div>

    {/* Right-center icons */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-1 hidden lg:flex">
      <Image src={whatsapp} alt="whatsapp-icon" className="cursor-pointer " />
      <Image src={chat} alt="chat-icon" className="cursor-pointer" />
    </div>
  </div>
  )
}
