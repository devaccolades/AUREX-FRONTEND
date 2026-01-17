"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Start animation after 5 seconds
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="absolute w-full h-full inset-0 flex">

        <div className="h-full w-full border-r-2 flex flex-col">
          <div className="h-full w-full border-b-2 ">
            <div className="h-full w-[50%] md:w-[60%] border-r-2 "></div>
            <div className="h-full w-[50%] md:w-[60%] border-r-2 "></div>
          </div>
          <div className="h-full w-full border-b-2 ">
            <div className="h-full w-[50%] md:w-[60%] border-r-2 "></div>
            <div className="h-full w-[50%] md:w-[60%] border-r-2 "></div>
          </div>
        </div>
        <div className="h-full w-full border-r-2 flex flex-col">
          <div className="h-full w-full border-b-2 ">
            <div className="h-full w-[50%] border-r-2 "></div>
            <div className="h-full w-[50%] border-r-2 "></div>
          </div>
          <div className="h-full w-full border-b-2 ">
            <div className="h-full w-[50%] border-r-2 "></div>
            <div className="h-full w-[50%] border-r-2 "></div>
          </div>
        </div>

      </div>
      {/* LEFT BACKGROUND – THRISSUR MAP */}
      <div className="absolute left-0 top-0 h-full w-[45%] opacity-40 z-0 pointer-events-none">
        <Image
          src="/images/about/bg1.svg"
          alt="Thrissur Map"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* RIGHT BACKGROUND – BLUEPRINT */}
      <div className="absolute right-0 top-80 h-full w-[40%] opacity-30 z-0 pointer-events-none">
        <Image
          src="/images/about/bg2.png"
          alt="Blueprint"
          height={200}
          width={800}
          className="object-contain object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-4 lg:px-10 items-center justify-center">
        {/* TOP HEADING */}
        <div
          className={`text-center max-w-3xl mx-auto mb-4 md:mb-10 lg:mb-16 transition-opacity duration-1000 ${
            animated ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="font-urban text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[24px] md:leading-[32px] lg:leading-[40px] tracking-wide">
            AUREX BUILDERS
          </h2> 
          <p className="mt-4 mx-auto max-w-[295px] text-black text-[12px] md:text-[13px] leading-[16px] md:leading-[18px]">
            Aurex Builders is a trusted name in the construction industry, known
            for creating exceptional residential and commercial spaces across
            Thrissur and Kerala.
          </p>
        </div>

        {/* MAIN LAYOUT - DESKTOP */}
        <div className="hidden md:grid grid-cols-2 gap-0 items-start">
          {/* LEFT SIDE – BUILDING IMAGE */}
          <div
            className={`relative justify-self-center md:justify-self-end shadow-2xl z-20 transition-all duration-1500 ease-in-out  ${
              animated
                ? "w-[150px] md:w-[170px] lg:w-[240px] xl:w-[280px] h-[118px] md:h-[180px] lg:h-[300px] xl:h-[320px]"
                : "w-[100vw] h-[50vh] md:w-[50vw] md:h-screen fixed top-0 left-0  md:mt-[-200px]  lg:mt-[-230px]"
            }`}
          >
            <Image
              src="/images/about/v1.webp"
              alt="Residential Project"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT SIDE – TEXT + IMAGE */}
          <div className="grid grid-cols-1 gap-2 lg:gap-22 xl:gap-28">
            {/* Big statement text */}
            <div
              className={`transition-opacity duration-1000 delay-700 ${
                animated ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="font-urban text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[24px] md:leading-[32px] lg:leading-[40px] mb-10">
                BUILDING <br />
                TRUST WITH <br />
                EVERY <br />
                PROJECT
              </h3>
            </div>

            {/* Text and image side by side */}
            <div className="grid grid-cols-2 gap-4 xl:gap-0 items-start">
              {/* Second building image */}
              <div
                className={`relative shadow-2xl z-20 transition-all duration-1500 ease-in-out ${
                  animated
                    ? "w-[164px] md:w-[170px] lg:w-[240px] xl:w-[280px] h-[118px] md:h-[180px] lg:h-[300px] xl:h-[320px]"
                    : "h-[50vh] w-[100vh] md:w-[50vw] md:h-screen fixed top-0 right-0 md:mt-[-380px] lg:mt-[-520px] xl:mt-[-540px]"
                }`}
              >
                <Image
                  src="/images/about/v3.webp"
                  alt="Commercial Project"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className={`hidden md:block text-black text-[12px] md:text-[13px] leading-[16px] md:leading-[18px] transition-opacity duration-1000 delay-700 ${
                  animated ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="mb-4">
                  With a commitment to precision, innovation, and transparency,
                  we've grown into one of the most reliable builders in
                  Thrissur, delivering projects that reflect both quality and
                  class.
                </p>
                <p>
                  Our mission is simple — to transform ideas into lasting
                  structures that inspire confidence and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex flex-col items-center gap-0 px-[16px]">
          <div className="flex w-full">
            {/* Top building image */}
              <div
              className={`relative shadow-2xl transition-all duration-1500 ease-in-out flex-1 ${
                animated
                  ? "w-full h-[118px]"
                  : "w-[110vw] h-[50vh] mt-[-180px] fixed top-[20%] left-1/2 -translate-x-1/2"
              }`}
            >
              <Image
                src="/images/about/v1.webp"
                alt="Residential Project"
                fill
                className="object-cover"
              />
            </div>

            {/* Heading */}
            <h3
              className={`font-urban text-[24px] font-bold leading-[26px] text-left transition-opacity duration-1000 delay-700 flex-1 ml-[8px] ${
                animated ? "opacity-100" : "opacity-0"
              }`}
            >
              BUILDING <br />
              TRUST WITH <br />
              EVERY <br />
              PROJECT
            </h3>
          </div>

          <div className="flex w-full">
            {/* Description text */}
            <div
              className={`max-w-[150px] text-[13px] leading-[18px] text-black transition-opacity duration-1000 delay-700 flex-1 ${
                animated ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="mb-3">
                With a commitment to precision, innovation, and transparency,
                we've grown into one of the most reliable builders in Thrissur,
                delivering projects that reflect both quality and class.
              </p>
              <p>
                Our mission is simple — to transform ideas into lasting
                structures that inspire confidence and comfort.
              </p>
            </div>

            {/* Bottom building image */}
            <div
              className={`relative shadow-2xl transition-all duration-1500 ease-in-out flex-1 ${
                animated
                  ? "w-full h-[133px]"
                  : "w-[110vw] h-[50vh] fixed bottom-[15%] left-1/2 ml-[-350px]"
              }`}
            >
              <Image
                src="/images/about/v3.webp"
                alt="Commercial Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}