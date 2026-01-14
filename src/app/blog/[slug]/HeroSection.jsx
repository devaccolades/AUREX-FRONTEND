import React from 'react'
import Image from 'next/image'
import MainImg from '../../../../public/images/blog-inner/main.svg'
import chat from '../../../../public/images/blog-inner/message.svg'
import whatsapp from '../../../../public/images/blog-inner/whatsapp.svg'

export default function HeroSection() {
  return (
      <div className="relative w-full h-[300px] lg:h-[500px] xl:h-[700px] border-b border-gray-200">
    <Image
      src={MainImg}
      alt="main-img"
      fill
      className="object-cover"
      priority
    />

    {/* Overlay text */}
    <div className="absolute inset-0 flex flex-col justify-end items-center text-white lg:mb-3 xl:mb-6">
      <div className="inline-flex items-center gap-1 font-urban font-medium text-[13px] text-black bg-white px-4 py-1.5 mb-2 rounded-full border border-black">
        🏠 Home Design
      </div>

      <div className="font-urbanist font-bold lg:text-[28px] xl:text-[36px] text-center text-black w-[35%] leading-[110%]">
        DESIGNING SPACES THAT FEEL LIKE HOME
      </div>
    </div>

    {/* Right-center icons */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
      <Image src={whatsapp} alt="whatsapp-icon" className="cursor-pointer" />
      <Image src={chat} alt="chat-icon" className="cursor-pointer" />
    </div>
  </div>
  )
}
