"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      
      {/* 🔥 Background Image */}
      <Image
        src="/images/projects/p-hero.jpg"
        alt="Projects Background"
        fill
        priority
        className="object-cover"
      />

      {/* Soft white fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-[1]" />

       {/* 🏗 Center – Heading */}
        <div className="relative z-10 text-center container">
          <p className="uppercase tracking-widest text-sm text-gray-700 mb-3">
            #Projects
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
            BUILDING LANDMARKS. <br />
            <span className="font-bold">CREATING LEGACIES.</span>
          </h1>

          <p className="mt-5 text-gray-700 max-w-md mx-auto">
            Explore our diverse portfolio of residential, commercial, and
            contract projects that redefine excellence.
          </p>
        </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-row items-center gap-10">

        {/* 👩 Left – Ambassador Image */}
        <div className="relative flex justify-center lg:justify-start">
          <Image
            src="/images/home/b.png"
            alt="Brand Ambassador"
            width={380}
            height={520}
            className="relative -mb-20 lg:-mb-32 object-contain"
            priority
          />
        </div>

       

        {/* 📊 Right – Experience Card */}
        <div className="flex justify-center lg:justify-end">
          <div className=" px-8 py-6 text-center">
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="text-sm text-gray-700 mt-1">
              Years of Industry <br /> Experience
            </p>

            <button className="mt-5 px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">
              Explore Projects
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
