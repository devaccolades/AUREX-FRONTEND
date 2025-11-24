"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignatureProjects() {
  const projects = [
    {
      id: 1,
      title: "AUREX CASCADE CITY",
      location: "Chembukkavu, Thrissur",
      distance: "900 mtr From Swaraj Round",
      rera: "K-RERA/PRJ/TSR/263/2024",
      totalArea: "32 Cents",
      totalUnits: "45 (B+G+9)",
      status: "Ongoing",
      tagColor: "#E7DB75",
      smallImage: "/images/home/hoero.jpg",
      bigImage: "/images/home/hero.jpg",
      description:
        "This premium villa project seamlessly marries contemporary aesthetics with enduring quality.",
    },
    {
      id: 2,
      title: "AUREX LIARD",
      location: "Mulagunnathukavu, Thrissur",
      distance: "rrrr",
      rera: "rrr",
      totalArea: "rrr",
      totalUnits: "rr",
      status: "Ready",
      tagColor: "#D8A95D",
      smallImage: "/images/home/cas.jpg",
      bigImage: "/images/home/cas.jpg",
      description:
        "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
    },
     {
      id: 1,
      title: "AUREX CASCADE CITY",
      location: "Chembukkavu, Thrissur",
      distance: "900 mtr From Swaraj Round",
      rera: "K-RERA/PRJ/TSR/263/2024",
      totalArea: "32 Cents",
      totalUnits: "45 (B+G+9)",
      status: "Ongoing",
      tagColor: "#E7DB75",
      smallImage: "/images/home/hoero.jpg",
      bigImage: "/images/home/hero.jpg",
      description:
        "This premium villa project seamlessly marries contemporary aesthetics with enduring quality.",
    },
    {
      id: 2,
      title: "AUREX LIARD",
      location: "Mulagunnathukavu, Thrissur",
      distance: "222",
      rera: "222",
      totalArea: "22",
      totalUnits: "222",
      status: "Ready",
      tagColor: "#D8A95D",
      smallImage: "/images/home/cas.jpg",
      bigImage: "/images/home/cas.jpg",
      description:
        "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
    },
     {
      id: 2,
      title: "AUREX LIARD",
      location: "Mulagunnathukavu, Thrissur",
      distance: "444",
      rera: "44",
      totalArea: "4444",
      totalUnits: "444",
      status: "Ready",
      tagColor: "#D8A95D",
      smallImage: "/images/home/cas.jpg",
      bigImage: "/images/home/cas.jpg",
      description:
        "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
    },
     {
      id: 2,
      title: "AUREX LIARD",
      location: "Mulagunnathukavu, Thrissur",
      distance: "hhj",
      rera: "jhj",
      totalArea: "hhh",
      totalUnits: "hhh",
      status: "Ready",
      tagColor: "#D8A95D",
      smallImage: "/images/home/cas.jpg",
      bigImage: "/images/home/cas.jpg",
      description:
        "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
    },
    
  ];

  const [hovered, setHovered] = useState(null);
  return (
    <section className="containers py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[#3BB77E] font-semibold text-sm">#Residential Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          OUR SIGNATURE PROJECTS
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Turning your ideas into reality through meticulous planning and expert execution.
        </p>
      </div>

      {/* SCROLLABLE CONTAINER */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-10">
        {projects.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-2xl transition-all duration-300 cursor-pointer 
                ${
                  hovered === p.id
                    ? "min-w-[650px] h-[420px]"
                    : "min-w-[300px] h-[420px]"
                }
                overflow-hidden shadow-md`}
          >
            {/* BACKGROUND IMAGE */}
            <Image
              src={hovered === p.id ? p.bigImage : p.smallImage}
              alt={p.title}
              fill
              className="object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 text-white space-y-2 w-full">

              {/* Status Tag */}
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
                style={{ backgroundColor: p.tagColor }}
              >
                {p.status}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold">{p.title}</h3>

              {/* Location */}
              <p className="text-[14px] opacity-80">{p.location}</p>

              {/* Description (only on hover for large card) */}
              {hovered === p.id && (
                <p className="text-xs mt-1 opacity-90">{p.description}</p>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {hovered === p.id ? (
                  <>
                    <button className="px-5 py-2 text-sm bg-white text-black rounded-full font-semibold">
                      BROCHURE
                    </button>
                    <button className="px-6 py-2 text-sm bg-[#0A6E50] text-white rounded-full font-semibold flex items-center gap-2">
                      BOOK SITE VISIT
                      <span>↗</span>
                    </button>
                  </>
                ) : (
                  <button className="px-5 py-2 text-sm bg-white/20 border border-white text-white rounded-full font-semibold flex items-center gap-2">
                    View Project →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
