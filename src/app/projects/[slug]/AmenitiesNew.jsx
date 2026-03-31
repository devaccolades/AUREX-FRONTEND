"use client";

import * as Icons from "lucide-react";

export default function NewAmenities({ amenities, staticData }) {
  if (!Array.isArray(amenities) || amenities.length === 0) return null;

  return (
    <section className="py-10 md:py-16 bg-[#FFFAEF]">
      <div className="container text-center">

        {/* Heading */}
       <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
          {staticData?.[0]?.amenities_title || "Redefining Everyday Living"}
        </h2>

         <p className="text-[13px] text-gray-500 mb-6">
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
                className="bg-[#FAF5E9] rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FAEDD2]">
                  <Icon className="w-5 h-5 text-yellow-600" />
                </div>

                <p className="font-urban text-[16px] lg:text-[18px] leading-[18px] font-semibold text-center">
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