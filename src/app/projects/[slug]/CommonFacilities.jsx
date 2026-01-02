"use client";

import {
  Zap,
  Fingerprint,
  ParkingCircle,
  ShieldCheck,
  Droplet,
  Wind,
  BellRing,
} from "lucide-react";

const facilities = [
  {
    title: "Standby Generator",
    desc: "24/7 power backup",
    icon: Zap,
  },
  {
    title: "Bio-metric Entry",
    desc: "Smart card access control",
    icon: Fingerprint,
  },
  {
    title: "Ample Parking Space",
    desc: "Covered parking for residents",
    icon: ParkingCircle,
  },
  {
    title: "24/7 Security",
    desc: "CCTV surveillance",
    icon: ShieldCheck,
  },
  {
    title: "Standby Generator",
    desc: "24/7 power backup",
    icon: Droplet,
  },
  {
    title: "Bio-metric Entry",
    desc: "Smart card access control",
    icon: Wind,
  },
  {
    title: "Ample Parking Space",
    desc: "Covered parking for residents",
    icon: BellRing,
  },
  {
    title: "24/7 Security",
    desc: "CCTV surveillance",
    icon: ShieldCheck,
  },
];

export default function CommonFacilities() {
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
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-start gap-2 lg:gap-4 shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-8 xl:w-10 h-8 xl:h-10 rounded-[10px] bg-[#FFF4E5] flex items-center justify-center shrink-0">
                  <Icon className="w-4 lg:w-6 h-4 lg:h-6 text-[#E39A2E]" />
                </div>

                {/* TEXT */}
                <div>
                 <h3 className="text-[16px] md:text-[18px] leading-[18px] font-semibold font-urban  mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[156%] text-black">
                    {item.desc}
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
