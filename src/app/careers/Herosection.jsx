"use client";

import Image from "next/image";

export default function  HeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[420px] lg:h-[467px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/careers/bg-career.png" // replace with your image path
        alt="Build your career with Aurex"
        fill
        className="object-cover "
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 h-full container mx-auto px-0 md:px-4 flex items-center">
        <div className="max-w-xl text-white">

          <h1 className="font-urban text-[30px] md:text-[36px] lg:text-[48px] font-semibold leading-[30px] md:leading-[36px] lg:leading-[48px] mb-4">
            BUILD YOUR CAREER <br />
            WITH AUREX
          </h1>

          <p className="text-[13px] lg:text-[14px]  leading-[16px] lg:leading-[18px] text-white/90">
            At Aurex Builders Pvt. Ltd., we believe in creating spaces — and
            people. Every home, every project, and every design is built by
            passionate individuals who share one vision: to build with purpose,
            integrity, and excellence.
          </p>

        </div>
      </div>

    </section>
  );
}
