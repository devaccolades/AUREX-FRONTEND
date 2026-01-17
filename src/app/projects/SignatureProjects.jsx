"use client";

import { ChevronRight, DoorOpen, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SignatureProjects() {
  const projects = [
    {
      id: 1,
      title: "AUREX CASCADE CITY",
      logo: "/images/home/cascadelogo.svg",
      location: "Chembukkavu, Thrissur",
      distance: "900 mtr From Swaraj Round",
      rera: "K-RERA/PRJ/TSR/263/2024",
      totalArea: "32 Cents",
      totalUnits: "45 (B+G+9)",
      status: "Ongoing",
      bigImage: "/images/home/hero.jpg",
      description:
        "This premium villa project seamlessly marries contemporary aesthetics with enduring quality.",
    },
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

  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section className="py-16 relative bg-gradient-to-b from-[#FFF7EA] to-white">
      {/* HEADING */}

      <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-4 md:mb-8">
        OUR SIGNATURE PROJECTS
      </h2>

      {/* DESKTOP VIEW */}
      <div className="container hidden md:grid grid-cols-[280px_1fr] gap-8 mt-10">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* FILTER */}
          <select className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <option>ONGOING</option>
            <option>READY TO OCCUPY</option>
          </select>

          {/* PROJECT LIST */}
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className={`cursor-pointer border rounded-2xl p-4 transition
                             ${
                               activeId === p.id
                                 ? "border-[#A8731C] shadow-md"
                                 : "border-gray-200"
                             }`}
              >
                <Image
                  src={p.logo}
                  alt={p.title}
                  width={140}
                  height={40}
                  className="mx-auto mb-2"
                />
                <p className="text-center text-[13px] leading-[13px] font-semibold font-urban">
                  {p.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FEATURED PROJECT */}
        <div className="relative h-[520px] rounded-[24px] overflow-hidden shadow-xl">
          <Image
            src={activeProject.bigImage}
            alt={activeProject.title}
            fill
            className="object-cover"
            priority
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
            {/* TOP BADGES */}
            <div className="flex justify-between items-start">
              <span className="bg-[#A8731C] px-4 py-1 rounded-full text-xs">
                {activeProject.status}
              </span>

              <div className="flex gap-2 text-xs">
                <span className="bg-white text-black px-4 py-2 rounded-[24px]">
                  KERA
                </span>
                <span className="bg-white text-black px-4 py-2 rounded-[24px]">
                  {activeProject.rera}
                </span>
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div>
              <span className="inline-block bg-red-600 px-3 py-1 text-xs rounded-full mb-2">
                {activeProject.distance}
              </span>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/icons/locu.svg" // <-- your location icon path
                  alt="location"
                  width={14}
                  height={14}
                  className="opacity-80"
                />

                <p className="text-[12px] leading-[100%] opacity-80 font-urban">
                  {activeProject.location}
                </p>
              </div>

              <h3 className="text-[20px] lg:text-[24px] leading-[24px] font-urban font-semibold mt-1">
                {activeProject.title}
              </h3>

              <p className="text-[12px] lg:text-[13px] leading-[100%] mt-0 lg:mt-2 opacity-95 ">
                {activeProject.description}
              </p>

              <div className="flex gap-4 mt-4">
                {/* LEFT OUTLINE BUTTON */}
                <button
                  className="
                                         flex-1
                                         px-6 py-3
                                         font-urban text-[14px]
                                         border border-white text-white
                                         rounded-[10px] font-medium
                                         flex items-center justify-between gap-2
                                       "
                >
                  VIEW PROJECT DETAILS
                  <Image
                    src="/images/icons/download.svg"
                    alt="download"
                    width={18}
                    height={18}
                  />
                </button>

                {/* RIGHT GREEN BUTTON */}
                <button
                  className="
                                        flex-1
                                        px-6 py-3
                                        font-urban text-[14px]
                                        bg-[#0A6E50] text-white
                                        rounded-[10px] font-semibold
                                        flex items-center justify-between gap-2
                                      "
                >
                  BOOK SITE VISIT
                  <Image
                    src="/images/icons/arrow-up.svg"
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden container grid grid-cols-1 gap-6 mt-10">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* FILTER */}
          <select className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <option>ONGOING</option>
            <option>READY TO OCCUPY</option>
          </select>

          {/* PROJECT LIST */}
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className={`cursor-pointer border rounded-2xl p-4 transition
                             ${
                               activeId === p.id
                                 ? "border-[#A8731C] shadow-md"
                                 : "border-gray-200"
                             }`}
              >
                <Image
                  src={p.logo}
                  alt={p.title}
                  width={140}
                  height={40}
                  className="mx-auto mb-2"
                />
                <p className="text-center text-[13px] leading-[13px] font-semibold font-urban">
                  {p.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {projects.map((p) => (
          <div
            key={p.id}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[468px]"
          >
            <Image
              src={p.bigImage}
              alt={p.title}
              fill
              className="object-cover"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-0 p-[10px] flex flex-col justify-between text-white">
              {/* TOP BADGES */}
              <div className="flex justify-between items-start">
                <span className="bg-[#A8731C] px-[8.5px] py-[8px] rounded-full text-[12px] leading-[13px] tracking-[0%] font-bold ">
                  {activeProject.status}
                </span>

                <div className="flex text-[12px] leading-[100%] tracking-[0%] font-normal font-urban ">
                  <span className="flex gap-2 items-center bg-white text-black px-[8px] py-[8px] rounded-[24px] border-[1px] border-[#E1E1E1]">
                    <span>
                      <DoorOpen size={14} strokeWidth={1.5} />
                    </span>
                    KERA
                  </span>
                  <span className="bg-white text-black px-[8px] py-[8px] rounded-[24px] ">
                    {activeProject.rera}
                  </span>
                </div>
              </div>

              <div className=" text-white">
                <span className="inline-block bg-red-600 px-3 py-[6px] px-[10px] rounded-full mb-2 font-urban text-[14px] leading-[100%] tracking-[0%] font-black">
                  {activeProject.distance}
                </span>
                {/* <Image
                  src={p.logo}
                  alt="logo"
                  width={100}
                  height={30}
                  className="mb-2"
                /> */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/locu.svg" // <-- your location icon path
                    alt="location"
                    width={14}
                    height={14}
                    className="opacity-80"
                  />

                  <p className="text-[12px] leading-[100%] opacity-80 font-urban">
                    {p.location}
                  </p>
                </div>
                <h3 className="text-[20px] font-semibold mt-1">{p.title}</h3>
                <p className="text-xs opacity-90 mt-1">{p.description}</p>

                <div className="w-full flex justify-between gap-[10px]">
                  <button className="flex gap-2 mt-4 border border-white px-[10px] py-[8px] rounded-2xl text-[11px] leading-[100%] tracking-[0%] max-w-[140px] w-full text-left">
                    VIEW PROJECT DETAILS
                    <span className="h-[7px]">
                      <ChevronRight />
                    </span>
                  </button>
                  <button className="flex justify-between text-left mt-4 bg-[#006A54] px-[10px] py-[8px] rounded-2xl text-[11px] leading-[100%] tracking-[0%] w-full">
                    DOWNLOAD BROCHURE
                    <span className="h-[7px]">
                      <Download />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
