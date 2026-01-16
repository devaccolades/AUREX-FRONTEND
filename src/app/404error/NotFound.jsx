'use client'

import Image from 'next/image'
import Link from 'next/link'
import AurexImg from '../../../public/images/404error/aurex-logo.svg'
import Img1 from '../../../public/images/404error/img1.svg'
import Img2 from '../../../public/images/404error/img2.svg'
import Img3 from '../../../public/images/404error/img3.svg'
import Img4 from '../../../public/images/404error/img4.svg'
import arrow from '../../../public/images/404error/arrow.svg'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-start px-6 md:px-12 py-8 z-20">

        {/* Logo */}
        <div className=''>
        <Image
          src={AurexImg}
          alt="Aurex Builders"
          className='w-full h-full'
        />
        </div>

        {/* Menu */}
        <div className="font-urbanist font-bold lg:text-[16px] text-[14px] space-y-2 text-right text-[rgba(52, 52, 46, 1)]">
          <p>PROJECT</p>
          <p>SERVICES</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
      </div>

      {/* ================= 404 TEXT ================= */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="flex items-center gap-24 text-[180px] md:text-[280px] font-light leading-none">
          <span>4.</span>
          <span>0</span>
          <span>4.</span>
        </div>
      </div>

      {/* ================= IMAGE COLLAGE ================= */}
      <div className="relative z-10 min-h-screen">

        {/* Main tall image */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[260px] md:w-[340px] h-[460px] md:h-[560px]">
          <Image
            src={Img1}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Right middle image */}
        <div className="absolute top-[55%] left-[58%] w-[200px] md:w-[260px] h-[150px] md:h-[180px]">
          <Image
            src={Img2}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom left image */}
        <div className="absolute bottom-24 left-[32%] w-[220px] md:w-[280px] h-[160px] md:h-[200px]">
          <Image
            src={Img3}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Top small image */}
        <div className="absolute top-0 left-[52%] w-[160px] md:w-[200px] h-[120px] md:h-[150px]">
          <Image
            src={Img4}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-6 md:px-12 py-10 z-20">

        {/* Bottom left */}
        <div className="leading-relaxed">
          <p className='font-urbanist font-bold lg:text-[16px] text-[14px]'>
            OOPS... THE PAGE YOU ARE<br />
            LOOKING FOR IS NOT FOUND
          </p>
          <Link
            href="/"
            className="inline-block font-urban font-medium lg:text-[24px] lg:leading-[24px] text-black mt-4 tracking-widest"
          >
            ( HOME )
          </Link>
        </div>

        {/* Bottom right */}
        <Link
          href="/contact"
          className="font-urbanist font-bold lg:text-[16px] text-[14px] tracking-widest flex items-center gap-2"
        >
          LETS TALK <span> <Image src={arrow} alt='arrow' /> </span>
        </Link>
      </div>
    </div>
  )
}
