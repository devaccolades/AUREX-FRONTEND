"use client";

import Image from "next/image";

const tabs = [
  { label: "AMENITIES", id: "amenities" },
  { label: "FLOOR PLANS", id: "floor-plans" },
  { label: "SPECIFICATIONS", id: "specifications" },
  { label: "LOCATION MAP", id: "location-map" },
];
export default function ProjectOverviewSection() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="relative w-full bg-white py-14">
      <div className="">
        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-900 transition cursor-pointer">
            DOWNLOAD BROCHURE
            <Image
                                  src="/images/icons/download.svg"
                                  alt="download"
                                  width={18}
                                  height={18}
                                />
          </button>
        </div>

        {/* Heading */}
        <div className="container text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[40px] md:leading-[30px]  leading-[20px] font-urban font-semibold ">
            A HOME THAT REFLECTS <br />
            YOUR ASPIRATIONS
          </h2>

          <p className="mt-4 text-sm leading-[18px]  ">
            Nestled in one of Thrissur’s most sought-after locations, Aurex
            Liard combines architectural finesse with functional design to
            deliver a perfect home for you and your family. With world-class
            amenities, advanced security, and exceptional build quality, this
            project promises a life of peace, prosperity, and pride.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleScroll(tab.id)}
                className="py-4 text-sm md:text-[16px] font-urban font-medium border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
              >
                {tab.label}
              </button>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
