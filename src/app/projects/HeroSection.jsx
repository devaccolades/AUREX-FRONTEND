"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">

      {/*Background */}
      <Image
        src="/images/projects/p-hero.jpg"
        alt="Projects Background"
        fill
        priority
        className="object-cover"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[320px] bg-gradient-to-t from-white to-transparent z-[20]" />



      {/* ================= MOBILE EXPERIENCE CARD ================= */}
      <div
        className="
    md:hidden
    absolute
    bottom-1
   left-1/2 -translate-x-1/2
    z-30
    flex
    items-center
    gap-4
  "
      >
        {/* LEFT: 20+ */}
        <h2 className="text-[64px] leading-[44px] font-urban font-bold text-black">
          20+
        </h2>

        {/* RIGHT: text + button */}
        <div className="flex flex-col">
          <p className="text-[12px] text-black leading-tight text-center">
            Years of Industry <br /> Experience
          </p>

          <button className="whitespace-nowrap mt-0 w-fit px-4 py-2 rounded-full bg-black text-white font-urban text-[12px] hover:bg-gray-800 transition">
            Explore Projects
          </button>
        </div>
      </div>




      {/* ================= CENTER HEADING ================= */}
      <div className="relative z-10 container mx-auto pt-34 text-center">
        <p className="font-poppins uppercase tracking-widest text-sm text-[#B57C42] mb-1">
          #Projects
        </p>

        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-urban font-semibold leading-[24px] md:leading-[32px] lg:leading-[40px]">
          BUILDING LANDMARKS. <br />
          <span className="font-bold">CREATING LEGACIES.</span>
        </h1>

        <p className="mt-2 text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px] max-w-md mx-auto">
          Explore our diverse portfolio of residential, commercial, and
          contract projects that redefine excellence.
        </p>
      </div>

      {/* ================= LEFT AMBASSADOR ================= */}
      <div className="absolute bottom-[-40px] md:bottom-[-180px] lg:bottom-[-240px] xl:bottom-[-160px] left-[-50px] md:-left-10 z-10 w-[300px] md:w-[440px] lg:w-[500px] xl:w-[560px]">
        <Image
          src="/images/home/b.png"
          alt="Brand Ambassador"
          width={520}
          height={600}
          priority
          className="object-contain"
        />
      </div>


      {/* ================= RIGHT EXPERIENCE CARD ================= */}
      <div className="hidden md:block absolute right-6 md:right-16 top-[55%] lg:text-[45%] z-10 text-center">
        <h2 className="text-[44px] md:text-[64px] lg:text-[64px] leading-[40px] font-urban font-bold">20+</h2>

        <p className="text-12px] md:text-[13px] lg:text-sm text-black mt-1 leading-[16px] md:leading-[18px]">
          Years of Industry <br /> Experience
        </p>

        <button className="mt-3 px-3 md:px-6 py-2 rounded-full bg-black text-white font-urban text-[12px] md:text-[13px] leading-[12px] md:leading-[13px] hover:bg-gray-800 transition">
          Explore Projects
        </button>
      </div>

    </section>
  );
}
