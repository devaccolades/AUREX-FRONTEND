"use client";


import * as LucideIcons from "lucide-react";

  const getIconComponent = (iconName) => {
  if (!iconName) return null;

  return LucideIcons[iconName] || null;
};




export default function PrecisionBuiltSection({specs}) {
   if (!Array.isArray(specs) || specs.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-[#F5F5F5] rounded-[10px">
      <div className="container">

        {/* HEADING */}
        <div className="text-start  mb-4 md:mb-8 lg:mb-10">
          <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-start">
            BUILT WITH PRECISION, DESIGNED FOR PERFECTION
          </h2>
          <p className="mt-2 text-[12px] md:text-sm leading-[18px] text-gray-600 text-start">
            From the foundation to the finishing, every detail is engineered to
            ensure lasting strength, safety, and elegance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">

          {specs.map((item, index) => {
            const Icon = getIconComponent(item.icon);

            if (!item?.name && !Icon) return null;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-3 md:p-4 lg:p-6 flex gap-2 md:gap-4 shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="shrink-0 w-8 lg:w-10 h-8 lg:h-10 rounded-[10px] bg-[#A77200] flex items-center justify-center">
                  <Icon className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-[16px] md:text-[18px] leading-[18px] font-semibold font-urban  mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[156%] text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
