"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full  overflow-hidden py-20">

      {/* LEFT BACKGROUND – THRISSUR MAP */}
      <div className="absolute left-0 top-0 h-full w-[45%] opacity-[0.12] z-[9999] pointer-events-none">
        <Image
          src="/images/bg1.svg"
          alt="Thrissur Map"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* RIGHT BACKGROUND – BLUEPRINT */}
      <div className="absolute right-0 top-0 h-full w-[50%] opacity-[0.08] pointer-events-none">
        <Image
          src="/images/about/bg2.svg"
          alt="Blueprint"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-10">

        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
            AUREX BUILDERS
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Aurex Builders is a trusted name in the construction industry,
            known for creating exceptional residential and commercial
            spaces across Thrissur and Kerala.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – IMAGE + BIG TEXT */}
          <div className="relative grid grid-cols-[200px_1fr] gap-6 items-start">

            {/* Building image (center-left) */}
            <div className="relative w-full h-[260px] z-10 shadow-xl">
              <Image
                src="/images/about/v1.webp"
                alt="Residential Project"
                fill
                className="object-cover"
              />
            </div>

            {/* Big statement text */}
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              BUILDING <br />
              TRUST WITH <br />
              EVERY <br />
              PROJECT
            </h3>
          </div>

          {/* RIGHT – TEXT + IMAGE */}
          <div className="relative grid grid-cols-1 gap-6">

            <p className="text-gray-600 leading-relaxed max-w-md">
              With a commitment to precision, innovation, and transparency,
              we’ve grown into one of the most reliable builders in Thrissur,
              delivering projects that reflect both quality and class.
              <br /><br />
              Our mission is simple — to transform ideas into lasting
              structures that inspire confidence and comfort.
            </p>

            {/* Building image (center-right) */}
            <div className="relative w-full h-[260px] z-10 shadow-xl">
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