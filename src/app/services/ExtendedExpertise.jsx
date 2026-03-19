"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const GlassSurface = dynamic(
  () => import('@/components2/GlassSurface'),
  {
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
                BEYOND CONSTRUCTION: <br />
                OUR EXTENDED EXPERTISE
              </h2>

              <div className="space-y-8 max-w-md">
                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    PROJECT MANAGEMENT - From Blueprint to Handover, On Time & On Budget
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[130%]">
                    Our dedicated project managers oversee every phase of construction —
                    from site planning and material procurement to worker scheduling and quality checks.
                    You receive regular progress updates so you always know exactly where your project stands, without the stress.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    STRUCTURAL & ARCHITECTURAL DESIGN - Precision Engineering for Every Thrissur Home
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[130%]">
                    Our in-house architects and structural engineers handle everything from concept
                    sketches to working drawings and on-site execution. Every design is engineered for
                    Kerala's climate, soil conditions, and RERA compliance — ensuring safety, longevity,
                    and aesthetic excellence in every build.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm lg:text-[16px] leading-[20px] font-bold font-urban mb-1">
                    AFTER-SALES SUPPORT - A Relationship That Lasts Beyond Your Keys
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-black leading-[130%]">
                    Our after-sales support team is dedicated to resolving post-handover queries
                    with speed and care. From warranty claims to routine maintenance scheduling,
                    we make sure every Aurex homeowner in Thrissur enjoys a seamless and stress-free
                    ownership experience.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative h-[290px] md:h-[420px] lg:h-[600px] ">
              {/* Blueprint Background */}
              <Image
                src="/images/services/ex.svg" 
                alt="Blueprint"
                fill
                className="object-contain opacity-70"
              />

              {/* Glass Card */}
              <div className="absolute left-1 md:right-20 xl:right-60 top-1/2 -translate-y-1/2">

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
                      Why Choose Aurex Builders — Complete Real Estate Solutions in Thrissur
                    </h4>

                    <p className="text-[12px] lg:text-[13px] text-black leading-[120%]">
                      Whether you are buying, designing, investing, or maintaining a property in Thrissur,
                      Aurex Builders is your end-to-end partner. Our integrated approach connects interior
                      designers, construction experts, and aftercare teams under one roof — simplifying
                      every step with complete transparency. Because a great home does not just get built —
                      it gets designed, refined, and cared for, for life.
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
