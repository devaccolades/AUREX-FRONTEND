"use client";

import Image from "next/image";
import {
  Home,
  Ruler,
  Maximize,
  Building2,
  MapPin,
  Crown,
  Route ,
  BadgeCheck,
} from "lucide-react";

/* =======================
   PROJECT DATA
======================= */

const projects = [
  {
    id: 2,
    title: "AUREX LIARD",
    logo: "/images/home/cascadelogo.svg",
    location: "Mulagunnathukavu, Thrissur",
    distance: "Near Medical College",
    rera: "K-RERA/PRJ/TSR/178/2023",
    totalArea: "48 Cents",
    totalUnits: "52 (B+G+10)",
    status: "Ready",
    bigImage: "/images/home/cas.jpg",
    description:
      "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
  },
];

/* =======================
   STATS
======================= */

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

/* =======================
   HIGHLIGHTS
======================= */

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
    icon: Route ,
  },
];

/* =======================
   COMPONENT
======================= */

export default function ProjectHero() {
  const project = projects[0];

  return (
    <section className="container py-12 lg:py-20">
      {/* ================= HEADER ================= */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <Image
            src={project.logo}
            alt={project.title}
            width={140}
            height={50}
            className="mb-4"
          />

          <h2 className="text-[32px] lg:text-[38px] font-urban font-semibold text-black">
            {project.title}
          </h2>

          <p className="text-[14px] text-gray-600 mt-3 max-w-xl">
            {project.description}
          </p>

          {/* LOCATION */}
          <div className="flex items-center gap-2 mt-4">
            <MapPin size={16} className="text-[#D8A95D]" />
            <span className="text-[13px] text-gray-700">
              {project.location}
            </span>
          </div>

          {/* RERA */}
          <div className="flex items-center gap-2 mt-2">
            <BadgeCheck size={16} className="text-[#0A6E50]" />
            <span className="text-[13px] text-gray-700">
              {project.rera}
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={project.bigImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md px-5 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#F6E8C6] rounded-xl flex items-center justify-center">
                <Icon size={22} className="text-[#D8A95D]" />
              </div>

              <div>
                <p className="text-[12px] text-gray-500">{item.label}</p>
                <p className="text-[14px] font-semibold text-black">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= HIGHLIGHTS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-[#FFF8EB] rounded-2xl px-5 py-4 flex items-start gap-4"
            >
              <div className="w-11 h-11 bg-[#F6E8C6] rounded-xl flex items-center justify-center">
                <Icon size={22} className="text-[#D8A95D]" />
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-black">
                  {item.title}
                </h4>
                <p className="text-[12px] text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
