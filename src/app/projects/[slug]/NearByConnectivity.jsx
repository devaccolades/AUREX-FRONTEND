"use client";

import * as LucideIcons from "lucide-react";

import MapSection from "./MapSection";

  const getIconComponent = (iconName) => {
  if (!iconName) return null;

  return LucideIcons[iconName] || null;
};




export default function NearbyConnectivity({data}) {
  const transformLocationData = (apiData = []) => {
  return apiData.map((row) => {
    const items = [];

    for (let i = 1; i <= 5; i++) {
      const name = row[`advantage_${i}`];
      const distance = row[`distance_${i}`];

      if (name && distance) {
        items.push({ name, distance });
      }
    }

    return {
      title: row.category,
      icon: row.icon, // string like "GraduationCap"
      items,
    };
  }).filter(block => block.items.length > 0);
};


   if (!Array.isArray(data) || data.length === 0) return null;

  const blocks = transformLocationData(data);

  if (blocks.length === 0) return null;
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container">

        {/* HEADING */}
        {/* <div className="text-center mb-6">
          <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
            EVERYTHING YOU NEED, JUST AROUND THE CORNER
          </h2>
          <p className="text-[13px] text-black mt-2 max-w-2xl mx-auto">
            Enjoy unmatched connectivity to Thrissur’s major landmarks, schools,
            and healthcare centers.
          </p>
        </div> */}
        <MapSection />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
           {blocks.map((block, idx) => {
            const Icon = getIconComponent(block.icon);
            if (!Icon) return null;
            return (
              <div
                key={idx}
                className="border border-[#F0D6A8] rounded-2xl p-5 bg-[#FFF8EC]"
              >
                {/* TITLE */}
                <div className="flex items-center gap-2 mb-4">
                  {/* <Icon className="w-6 h-6 text-[#E39A2E]" /> */}
                   {Icon && <Icon className="w-6 h-6 text-[#E39A2E]" />}
                   <h3 className="text-[16px] md:text-[18px] leading-[18px] font-semibold font-urban text-[#E09B07] mb-1">
                    {block.title}
                  </h3>
                </div>

                {/* ITEMS */}
                <div className="space-y-3">
                  {block.items.map((item, i) => (
                    <div
                      key={i}    
                      className="flex items-center justify-between gap-3"
                    >
                      <p className="text-[13px] text-gray-800 leading-[13px]">
                        {item.name}
                      </p>

                      <span className="text-[13px] leading-[13px] font-urban px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shrink-0">
                        {item.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
