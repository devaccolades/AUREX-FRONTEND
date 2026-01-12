"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const GlassSurface = dynamic(
  () => import('@/Components/GlassSurface'),
  {
    // Important: Setting ssr: false tells Next.js NOT to render this component on the server.
    ssr: false
  }
);

export default function ExtendedExpertiseSection() {
  return (
    <section className=" ">
      <div className="container ">
        {/* Main Wrapper */}
        <div className="relative bg-[#F4F3F1] rounded-3xl  overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="relative pr-2 md:pr-0 pl-2 md:pl-8 py-8">
              <h2 className="text-[20px] lg:text-[32px] font-medium leading-[20px] lg:leading-[38px] font-urban mb-4  md:mb-10">
                BEYOND CONSTRUCTION — <br />
                OUR EXTENDED EXPERTISE
              </h2>

              <div className="space-y-8 max-w-md">
                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    PROJECT MANAGEMENT
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[100%]">
                    Seamless coordination from planning to delivery, ensuring
                    timelines and budgets are always on track.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    STRUCTURAL & ARCHITECTURAL DESIGN
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[100%]">
                    From concept sketches to final execution, our in-house
                    experts ensure precision in every detail.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    AFTER-SALES SUPPORT
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[100%]">
                    Dedicated support to resolve post-handover queries, ensuring
                    100% homeowner satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative h-[290px] md:h-[420px] lg:h-[600px] ">
              {/* Blueprint Background */}
              <Image
                src="/images/services/ex.svg" // replace with your blueprint image
                alt="Blueprint"
                fill
                className="object-contain opacity-70"
              />

              {/* Glass Card */}
              <div className="absolute left-1 md:right-20 xl:right-60 top-1/2 -translate-y-1/2">
  {/* <GlassSurface
    width={360}
    height={300}
    borderRadius={18}
    className="p-4 lg:p-5 xl:p-6
    h-[240px] 
    sm:h-[260px] 
    lg:h-[300px] 
    xl:h-[340px]"
  > */}
  <GlassSurface
  width="100%"
  height="auto"
  borderRadius={18}
  style={{
    width: "clamp(280px, 40vw, 360px)",
    height: "clamp(240px, 30vw, 340px)",
  }}
  className="p-4 lg:p-5 xl:p-6"
>

    <div className="flex flex-col gap-3 text-left">
      <h4 className="text-sm lg:text-[16px] leading-[20px] font-urban font-bold uppercase mb-1">
        We Don’t Just Build — We Add Value.
      </h4>

      <p className="text-[12px] lg:text-[13px] text-black leading-[120%]">
        Our integrated approach ensures you enjoy every stage 
        of your property journey. Whether you’re buying, designing, 
        maintaining, or investing, Aurex stands by your side — 
        simplifying every step with transparency and trust.
      </p>
    </div>
  </GlassSurface>
</div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
