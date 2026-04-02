"use client";

import * as Icons from "lucide-react";

export default function NewAmenities({ amenities, staticData }) {
  if (!Array.isArray(amenities) || amenities.length === 0) return null;

  return (
    <section
      className="relative py-10 md:py-16 bg-[#FFFAEF] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/projects/amenities/bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container text-center">

        {/* Heading */}
        <h2 className="text-white text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
          {staticData?.[0]?.amenities_title || "Redefining Everyday Living"}
        </h2>

        <p className="text-white text-[13px]  mb-6 lg:mb-10">
          {staticData?.[0]?.amenities_description ||
            "Experience a world of comfort with a rich array of facilities"}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {amenities.map((item, index) => {
            const Icon = Icons[item.icon] || Icons.HelpCircle;

            return (
              <div
                key={index}
                className=" rounded-2xl p-4 flex flex-col items-center gap-2  transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl ">
                  <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>

                <p className="text-white font-urban text-[16px] lg:text-[18px] leading-[18px] font-semibold text-center">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}