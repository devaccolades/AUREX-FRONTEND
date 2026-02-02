"use client";

import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="w-full bg-white">
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="mx-4 md:ml-12 xl:ml-20 md:max-w-[246px] lg:max-w-sm xl:max-w-lg">
          <p className="font-poppins text-[12px] md:text-[14px] lg:text-[16px] font-medium mb-1 md:mb-3">     
             <span className="text-[#006A54]">#Our</span>{" "}
            <span className="text-gray-500">Journey</span>
          </p>

          <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-urban font-semibold leading-[20px] md:leading-[24px] lg:leading-[36px] mb-2 md:mb-6">
            EVERY BRICK TELLS <br className="hidden md:block" />
            OUR STORY.
          </h2>

          <p className="text-black text-[12px] md:text-[13px] lg:text-[15px] leading-[18px] lg:leading-[22px]">
            What began as a small initiative in the cultural capital of Kerala
            has evolved into a brand synonymous with reliability and
            craftsmanship. Over the years, Aures Builders has completed a
            series of residential and commercial projects in Thrissur, setting
            new benchmarks in construction quality and customer satisfaction.
            <br /><br />
            We take pride in being part of Thrissur’s growth story, combining
            local insights with global standards in design and construction.
          </p>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative w-full mt-6 md:mt-0">

          {/* Main Large Image */}
          <div className="relative w-full h-[320px] md:h-[385px] lg:h-[436px]  overflow-hidden">
            <Image
              src="/images/about/main.jpg" 
              alt="Main Building"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Small Image */}
          <div 
        //   className="absolute items-center left-20 bottom-60 
        //   md:-left-19 lg:-left-26 md:bottom-30 w-[160px] md:w-[163px] 
        //   lg:w-[220px] h-[135px] lg:h-[171px] overflow-hidden  bg-white">
         className="
      absolute
      top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[160px] h-[135px]
      bg-white shadow-lg

      md:top-auto md:bottom-24
      md:-left-19 md:translate-x-0 md:translate-y-0
      md:w-[163px] md:h-[135px]

      lg:-left-20 lg:bottom-28
      lg:w-[220px] lg:h-[171px]
    ">
            <Image
              src="/images/about/small.jpg" // replace with your image
              alt="Secondary Building"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
