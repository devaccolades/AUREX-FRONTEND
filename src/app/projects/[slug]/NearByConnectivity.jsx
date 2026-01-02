"use client";

import {
  GraduationCap,
  Hospital,
  ShoppingBag,
  UtensilsCrossed,
  Bus,
  Plane,
  Landmark,
  Building2,
} from "lucide-react";

const data = [
  {
    title: "Education",
    icon: GraduationCap,
    items: [
      { name: "St. Mary's School", distance: "1.2 Km" },
      { name: "Christ College", distance: "3.5 Km" },
      { name: "Government Engineering College", distance: "5.0 Km" },
    ],
  },
  {
    title: "Healthcare",
    icon: Hospital,
    items: [
      { name: "Jubilee Mission Hospital", distance: "2.8 Km" },
      { name: "Amala Institute", distance: "4.2 Km" },
      { name: "Medical Trust Hospital", distance: "3.5 Km" },
    ],
  },
  {
    title: "Shopping",
    icon: ShoppingBag,
    items: [
      { name: "Sobha City Mall", distance: "4.5 Km" },
      { name: "Big Bazaar", distance: "4.0 Km" },
    ],
  },
  {
    title: "Restaurants",
    icon: UtensilsCrossed,
    items: [
      { name: "Ming Palace", distance: "2.0 Km" },
      { name: "Dhe Puttu", distance: "3.5 Km" },
      { name: "Burger Junction", distance: "1.8 Km" },
    ],
  },
  {
    title: "Transport",
    icon: Bus,
    items: [
      { name: "Thrissur Railway Station", distance: "8.0 Km" },
      { name: "Private Bus Stand", distance: "5.5 Km" },
      { name: "KSRTC Bus Stand", distance: "7.2 Km" },
    ],
  },
  {
    title: "Airport",
    icon: Plane,
    items: [
      { name: "Cochin International Airport", distance: "45 Km" },
    ],
  },
  {
    title: "Places of Worship",
    icon: Landmark,
    items: [
      { name: "Vadakkumnathan Temple", distance: "6.5 Km" },
      { name: "Our Lady of Dolours", distance: "7.0 Km" },
    ],
  },
  {
    title: "IT Parks",
    icon: Building2,
    items: [
      { name: "Athani IT Park", distance: "10 Km" },
      { name: "Infopark Thrissur", distance: "12 Km" },
    ],
  },
];

export default function NearbyConnectivity() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container">

        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-2">
            EVERYTHING YOU NEED, JUST AROUND THE CORNER
          </h2>
          <p className="text-[13px] text-black mt-2 max-w-2xl mx-auto">
            Enjoy unmatched connectivity to Thrissur’s major landmarks, schools,
            and healthcare centers.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {data.map((block, idx) => {
            const Icon = block.icon;

            return (
              <div
                key={idx}
                className="border border-[#F0D6A8] rounded-2xl p-5 bg-[#FFF8EC]"
              >
                {/* TITLE */}
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-6 h-6 text-[#E39A2E]" />
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
