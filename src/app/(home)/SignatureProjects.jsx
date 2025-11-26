
"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignatureProjects() {
  const projects = [
    {
      id: 1,
      title: "AUREX CASCADE CITY",
      logo: "/images/home/cascadelogo.svg",
      brochur: "",
      feature: "",
      location: "Chembukkavu, Thrissur",
      distance: "900 mtr From Swaraj Round",
      rera: "K-RERA/PRJ/TSR/263/2024",
      totalArea: "32 Cents",
      totalUnits: "45 (B+G+9)",
      status: "Ongoing",
      tagColor: "#E7DB75",
      smallImage: "/images/home/hero.jpg",
      bigImage: "/images/home/hero.jpg",
      description:
        "This premium villa project seamlessly marries contemporary aesthetics with enduring quality.",
    },
    {
      id: 2,
      title: "AUREX LIARD",
      logo: "/images/home/cascadelogo.svg",
      brochur: "",
      location: "Mulagunnathukavu, Thrissur",
      distance: "Near Medical College",
      rera: "K-RERA/PRJ/TSR/178/2023",
      totalArea: "48 Cents",
      totalUnits: "52 (B+G+10)",
      status: "Ready",
      tagColor: "#D8A95D",
      smallImage: "/images/home/cas.jpg",
      bigImage: "/images/home/cas.jpg",
      description:
        "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
    },
  ];

  const [hovered, setHovered] = useState(null);

  const defaultExpanded = projects[0].id;
  const activeCard = hovered ? hovered : defaultExpanded;

  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex w-full h-full justify-start opacity-10 pointer-events-none">
        <Image
          src="/images/home/Group (3).svg"
          alt="decor-left"
          fill
          className="object-cover md:object-contain md:object-left w-full h-full"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h4 className="text-[16px] font-poppins mb-0">
          <span className="text-[#006A54]">#Residential </span>
          <span className="text-gray-600">Projects</span>
        </h4>
        <h2 className="text-[32px] md:text-[38px] font-urban font-medium leading-[48px] text-black">
          OUR SIGNATURE PROJECTS
        </h2>
        <p className="text-black text-[14px] leading-[100%] opacity-90">
          Turning your ideas into reality through meticulous planning and expert execution.
        </p>
      </div>

      {/* CARD SECTION */}
      <div className="w-[90%] xl:w-[80%] mx-auto md:flex hidden gap-0 xl:gap-6 overflow-hidden no-scrollbar px-0 xl:px-10">
        {projects.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden shadow-xl
                ${activeCard === p.id
                ? "min-w-[520px] lg:min-w-[620px] xl:min-w-[850px] h-[460px] lg:h-[460px] xl:h-[520px]"
                : "min-w-[240px] xl:min-w-[300px] h-[460px] lg:h-[460px] xl:h-[520px] scale-[.96] opacity-85"
              }`} 
          >
            {/* Cover Image */}
            <Image
              src={activeCard === p.id ? p.bigImage : p.smallImage}
              alt={p.title}
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* TOP BADGE ROW */}
            {activeCard === p.id && (
              <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-3 z-20">

                {/* PROJECT STATS ROW */}
                <div className="flex flex-wrap items-center gap-4 mt-5">

                  <div className="flex items-center  bg-[#A8731C] text-white px-3 py-2 rounded-full shadow-sm">
                    <span className="text-[13px] leading-[13px] font-medium">{p.status}</span>
                  </div>
                  {/* TOTAL AREA */}
                  <div className="flex items-center gap-2">

                    {/* LABEL BLOCK */}
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                      <Image src="/images/home/area.svg" width={16} height={16} alt="area icon" />
                      <span className="text-[13px] leading-[13px] font-medium">Total Area</span>
                    </div>

                    {/* VALUE BLOCK (Dynamic) */}
                    <div className="bg-white px-3 py-2 rounded-full shadow-sm">
                      <span className="text-[13px] leading-[13px] font-semibold">{p.totalArea}</span>
                    </div>
                  </div>

                  {/* TOTAL UNITS */}
                  <div className="flex items-center gap-2">

                    {/* LABEL BLOCK */}
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                      <Image src="/images/home/appart.svg" width={16} height={16} alt="units icon" />
                      <span className="text-[13px] leading-[13px] font-medium">Total Units</span>
                    </div>

                    {/* VALUE BLOCK */}
                    <div className="bg-white px-3 py-2 rounded-full shadow-sm">
                      <span className="text-[13px] leading-[13px] font-semibold">{p.totalUnits}</span>
                    </div>
                  </div>

                </div>


                <div className="flex items-center gap-2">

                  {/* LABEL BLOCK */}
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                    <Image src="/images/home/rera.svg" width={14} height={14} alt="units icon" />
                    <span className="text-[13px] leading-[13px] font-medium">K-RERA</span>
                  </div>

                  {/* VALUE BLOCK */}
                  <div className="bg-white px-3 py-2 rounded-full shadow-sm">
                    <span className="text-[13px] leading-[13px] font-semibold">{p.rera}</span>
                  </div>
                </div>

              </div>
            )}

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 p-6 w-full text-white z-20">

              {activeCard === p.id && (
                <Image src={p.logo} alt="logo" width={130} height={50} className="mb-3 opacity-90" />
              )}

              <p className="text-[13px]  leading-[100%] font-urban opacity-80">{p.location}</p>
              <h3 className="text-[24px] leading-[24px] font-urban font-semibold mt-1">{p.title}</h3>

              {activeCard === p.id && (
                <p className="text-[13px] leading-[100%] mt-2 opacity-95 max-w-[80%]">{p.description}</p>
              )}

              <div className="flex gap-4 mt-5">
                {activeCard === p.id ? (
                  <>
                    <button className="px-6 py-2 font-urban text-[14px] leading-[100%] bg-white text-black rounded-full font-normal">
                      BROCHURE
                    </button>
                    <button className="px-6 py-2 font-urban text-[14px] leading-[100%] bg-[#0A6E50] text-white rounded-full font-semibold flex items-center gap-2">
                      BOOK SITE VISIT <span>↗</span>
                    </button>
                  </>
                ) : (
                  <button className="px-6 py-2 text-sm bg-white/20 border border-white text-white rounded-full font-semibold">
                    View Project →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW ONLY */}
      <section className="block md:hidden px-4 py-10">

        {/* Heading */}


        {/* PROJECT LIST (GRID COL-1) */}
        <div className="grid grid-cols-1 gap-6">

          {projects.map((p) => (
            <div
              key={p.id}
              className="relative w-full rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <div className="h-[350px] w-full relative">
                <Image
                  src={p.bigImage}
                  alt={p.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 w-full text-white">

                {/* LOGO */}
                <Image
                  src={p.logo}
                  alt="logo"
                  width={120}
                  height={50}
                  className="mb-2 opacity-90"
                />

                {/* LOCATION */}
                <p className="text-xs opacity-80">{p.location}</p>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mt-1">{p.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-sm mt-2 opacity-95">
                  {p.description}
                </p>

                {/* BUTTONS */}
                <div className="flex items-center justify-between mt-4">
                  <button className="px-4 py-2 text-sm bg-white text-black rounded-full font-semibold">
                    View Project →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </section>
  );
}
