"use client";

import Image from "next/image";
import {
  Home,
  Ruler,
  Maximize,
  Building2,
  MapPin,
  Crown,
  Route,
  BadgeCheck,
} from "lucide-react";

/* ================= PROJECT DATA ================= */
const project = {
  title: "Aurex Liard",
  location: "Mulangunnathukavu, Thrissur",
  rera: "K-RERA/PRJ/TSR/178/2023",
  description:
    "A Home That Reflects Your Aspirations. Premium 2 & 3 BHK apartments at the heart of Thrissur with modern amenities and highway access.",
  image: "/images/home/cas.jpg",
};

/* ================= STATS ================= */
const stats = [
  {
    label: "Property Type",
    value: "2 & 3 BHK Apartments",
    icon: Home,
  },
  {
    label: "Total Area",
    value: "23.4 Cents",
    icon: Ruler,
  },
  {
    label: "Sqft Range",
    value: "951 – 1508 sqft",
    icon: Maximize,
  },
  {
    label: "Total Units",
    value: "31 | Structure B+G+8",
    icon: Building2,
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  {
    title: "Prime Location",
    desc: "Mulangunnathukavu, Thrissur",
    icon: MapPin,
  },
  {
    title: "Premium Apartments",
    desc: "2 & 3 BHK Luxury Living",
    icon: Crown,
  },
  {
    title: "Highway Facing",
    desc: "Excellent Connectivity",
    icon: Route,
  },
];

export default function ProjectHero() {
  return (
    <section className="relative w-full">
      {/* ================= HERO IMAGE ================= */}
      <div className="relative h-[520px] lg:h-[640px] w-full">
       <div className="relative h-[520px] lg:h-[640px] w-full overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* CURVE */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-[90px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C240,100 480,100 720,70 960,40 1200,0 1440,30 L1440,120 L0,120 Z"
        fill="#ffffff"
      />
    </svg>
  </div>
</div>



        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" /> */}

        {/* ================= HERO CONTENT ================= */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <span className="inline-block bg-[#1FA971] text-white text-xs px-3 py-1 rounded-full mb-4">
              Ready to Move
            </span>

            <h1 className="text-white text-[32px] lg:text-[42px] font-semibold max-w-xl">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 mt-3 text-white/90">
              <MapPin size={16} />
              <span className="text-sm">{project.location}</span>
            </div>

            <p className="text-white/80 text-sm max-w-lg mt-4">
              {project.description}
            </p>

            <div className="flex items-center gap-2 mt-4 text-white/90">
              <BadgeCheck size={16} className="text-green-400" />
              <span className="text-xs">{project.rera}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING STATS ================= */}
      <div className="container relative z-10 -mt-120">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  rounded-2xl shadow-xl p-4">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F6E8C6] rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-[#D8A95D]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= HIGHLIGHTS ================= */}
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#FFF8EB] rounded-2xl px-5 py-4 flex gap-4"
              >
                <div className="w-11 h-11 bg-[#F6E8C6] rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-[#D8A95D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
