"use client";

import * as LucideIcons from "lucide-react";

  const getIconComponent = (iconName) => {
  if (!iconName) return null;

  return LucideIcons[iconName] || null;
};



export default function CommonFacilities({facilities}) {
   if (!Array.isArray(facilities) || facilities.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16">
      <div className="container">

        {/* HEADING */}
        <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-start mb-8">
          Common Facilities
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {facilities.map((item, index) => {
              const Icon = getIconComponent(item.icon);

            if (!item?.name && !Icon) return null;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-start gap-2 lg:gap-4 shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                {/* <div className="w-8 xl:w-10 h-8 xl:h-10 rounded-[10px] bg-[#FFF4E5] flex items-center justify-center shrink-0">
                  <Icon className="w-4 lg:w-6 h-4 lg:h-6 text-[#E39A2E]" />
                </div> */}
                  {Icon && (
                  <div className="w-8 xl:w-10 h-8 xl:h-10 rounded-[10px] bg-[#FFF4E5] flex items-center justify-center shrink-0">
                    <Icon className="w-4 lg:w-6 h-4 lg:h-6 text-[#E39A2E]" />
                  </div>
                )}

                {/* TEXT */}
                <div>
                   {item?.name && (
                 <h3 className="text-[16px] md:text-[18px] leading-[18px] font-semibold font-urban  mb-1">
                    {item.name}
                  </h3>
                   )}
                  {item?.subtext && (
                    <p className="text-[13px] md:text-[14px] leading-[156%] text-black">
                      {item.subtext}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
