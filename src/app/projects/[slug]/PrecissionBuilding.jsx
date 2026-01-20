"use client";


import * as LucideIcons from "lucide-react";

  const getIconComponent = (iconName) => {
  if (!iconName) return null;

  return LucideIcons[iconName] || null;
};


// const specs = [
//   {
//     title: "Foundation & Structure",
//     description:
//       "Reinforced Cement Concrete framed structure with pile foundation and solid cement block partition walls. Earthquake resistance for zone 3.",
//     icon: Building2,
//   },
//   {
//     title: "Flooring",
//     description:
//       "Good quality vitrified tiles for the entire apartment. Common areas and lobbies use anti-skid quality designer tiles for entrance lobby & staircase. Antiskid ceramic tiles for kitchen and ceramic tiles for toilets.",
//     icon: Layers,
//   },
//   {
//     title: "Kitchen",
//     description:
//       "Good quality counter top with polished granite, single bowl stainless steel sink with drain board, glazed tile dado above and provision for exhaust fan.",
//     icon: Utensils,
//   },
//   {
//     title: "Plumbing & Sanitary Fittings",
//     description:
//       "Good quality plumbing materials, premium class CP fittings with wall mounted shower, towel rods, western style white wall mounted EWC, and provision for geyser in all toilets.",
//     icon: Droplets,
//   },
//   {
//     title: "Electrical",
//     description:
//       "Concealed channel wiring with high quality insulated copper wires suitable light, fan, A/C points etc., controlled by ELCB & MCB with individual meters. Provision for cable TV in living room & master bed room and telephone conduit point in the living room.",
//     icon: Plug,
//   },
//   {
//     title: "Doors & Windows",
//     description:
//       "Good quality Thick glass door for lobby entrance. Decorative factory moulded wooden frame & shutter for entrance. All internal door frames & shutters are good quality factory moulded engineered wood and engineered factory moulded doors for all toilets. Good quality UPVC sliding doors for balcony and windows with MS grills.",
//     icon: DoorOpen,
//   },
//   {
//     title: "Generator for Backup",
//     description:
//       "Generator backup for common area like lifts, pump sets, common lighting etc., and connected load up to 500 watts per apartment.",
//     icon: Zap,
//   },
// ];

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
