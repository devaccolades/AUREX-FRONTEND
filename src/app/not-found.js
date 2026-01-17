'use client'

import Image from 'next/image'
import Link from 'next/link'
import AurexImg from '../../public/images/404error/aurex-logo.svg'
import Img1 from '../../public/images/404error/img1.svg'
import Img2 from '../../public/images/404error/img2.svg'
import Img3 from '../../public/images/404error/img3.png'
import Img4 from '../../public/images/404error/img4.svg'
import Img5 from '../../public/images/404error/img5.svg'
import arrow from '../../public/images/404error/arrow.svg'
 
export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-start px-4 md:px-12 py-6 z-0">

        {/* Logo */}
        <div className='xl:w-[76px] xl:h-[120px] lg:h-[] lg:w-[] h-[70px] md:w-[42px] w-[44px]'>
        <Image
          src={AurexImg}
          alt="Aurex Builders"
          className='w-full h-full'
        />
        </div>

        {/* Menu */}
        <div className="font-urban font-bold lg:text-[16px] text-[14px] leading-[16px] space-y-1 text-right text-[rgba(52, 52, 46, 1)]">
          <p>PROJECT</p>
          <p>SERVICES</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
      </div>

      {/* ================= 404 TEXT ================= */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex items-center justify-center gap-5 md:gap-16 xl:gap-100 font-urban font-thin text-[150px] md:text-[320px] xl:text-[460px]">
          <span>4.</span>
          <span>0</span>
          <span>4.</span>
        </div>
      </div>

      {/* ================= IMAGE COLLAGE ================= */}
      <div className="relative z-10 min-h-screen">

        {/* Main tall image */}
        <div className="absolute top-7 xl:top-6 md:top-5 left-18 xl:left-159 md:left-42 w-[130px] md:w-[230px] xl:w-[360px] xl:h-[560px] h-[250px] md:h-[400px]">
          <Image
            src={Img4}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right middle image */}
        <div className="absolute top-[34.3%] md:top-[52%] xl:top-[62%] left-[63%] md:left-[52%] h-[140px] w-[80px] md:w-[165px] xl:w-[255px]  md:h-[170px] xl:h-[230px]">
          <Image
            src={Img2}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        {/* Bottom left image */}
        <div className="absolute xl:-bottom-10 md:-bottom-0 bottom-58 left-[31%] md:left-[28%] xl:left-[37.3%] w-[100px] md:w-[180px] h-[160px] md:h-[215px]">
          <Image
            src={Img1}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        {/* Top small image */}
        <div className="absolute -top-13 md:-top-30 xl:-top-48 md:left-[52%] left-[63%] w-[100px] md:w-[180px] lg:w-[] xl:w-[280px]">
          <Image
            src={Img3}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        <div className="md:hidden absolute bottom-18 left-[63%] w-[120px] ">
          <Image
            src={Img5}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-6 md:px-8 py-10 z-20">

        {/* Bottom left */}
        <div className="">
          <p className='font-urban font-bold leading-[16px] lg:text-[16px] md:text-[14px] text-[12px] w-[95%]'>
            OOPS... THE PAGE YOU ARE<br />
            LOOKING FOR IS NOT FOUND
          </p>
          <Link
            href="/"
            className="inline-block font-urban font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] lg:leading-[24px] text-black mt-4 tracking-widest"
          >
            ( HOME )
          </Link>
        </div>

        {/* Bottom right */}
        <Link
          href="/contact"
          className="font-urban font-bold lg:text-[16px] text-[14px] tracking-widest flex items-center gap-2"
        >
          LETS TALK <span> <Image src={arrow} alt='arrow' /> </span>
        </Link>
      </div>
    </div>
  )
}