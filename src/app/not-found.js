'use client'

import Image from 'next/image'
import Link from 'next/link'

import AurexImg from '../../public/images/404error/aurex-logo.svg'
import Bg404 from '../../public/images/404error/bg-lg.png'
import Bg405 from '../../public/images/404error/bg-sm.png'
import arrow from '../../public/images/404error/arrow.svg'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <Image
          src={Bg404}
          alt="404 Background"
          priority
          className="hidden md:block h-full"
        />

          <Image
          src={Bg405}
          alt="404 Background"
          priority
          className="h-full md:hidden"
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-start px-4 md:px-12 py-6 z-20">

        {/* Logo */}
        <div className="xl:w-[76px] xl:h-[120px] h-[70px] w-[44px] md:w-[42px]">
          <Image
            src={AurexImg}
            alt="Aurex Builders"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Menu */}
        <div className="flex flex-col font-urban font-bold lg:text-[16px] text-[14px] leading-[16px] space-y-1 md:space-y-2 text-right text-[rgba(52,52,46,1)]">
          <Link href="/projects">PROJECT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/about-us">ABOUT</Link>
          <Link href="/contact-us">CONTACT</Link>
        </div>
      </div>

      {/* ================= 404 TEXT ================= */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex items-center gap-5 md:gap-16 font-urban font-thin text-[150px] md:text-[320px] xl:text-[460px] text-black">
          <span>4.</span>
          <span>0</span>
          <span>4.</span>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-3 md:px-8 py-10 z-20">

        {/* Bottom left */}
        <div>
          <p className="font-urban font-bold leading-[16px] lg:text-[16px] md:text-[14px] text-[12px] w-[95%]">
            OOPS... THE PAGE YOU ARE<br />
            LOOKING FOR IS NOT FOUND
          </p>

          <Link
            href="/"
            className="inline-block font-urban font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] mt-4 tracking-widest"
          >
            ( HOME )
          </Link>
        </div>

        {/* Bottom right */}
        <Link
          href="/contact-us"
          className="font-urban font-bold lg:text-[16px] text-[14px] tracking-widest flex items-center gap-2"
        >
          LETS TALK
          <Image src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}