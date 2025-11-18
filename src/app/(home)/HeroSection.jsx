"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "AUREX CASCADE CITY",
    location: "CHEMBUKKAVU, THRISSUR",
    rera: "K-RERA/PRJ/TSR/243/2024",
    logo: "/images/home/cascadelogo.svg",
    project_image: "/images/home/hero.jpg",
    qrcode: "/images/home/qr.png",
  },
  {
    name: "AUREX LIARD",
    location: "CHEMBUKKAVU, THRISSUR",
    rera: "K-RERA/PRJ/TSR/243/2024",
    logo: "/images/home/cascadelogo.svg",
    project_image: "/images/home/hero.jpg",
    qrcode: "/images/home/qr.png",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={project.project_image}
          alt="Project Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pb-6">

        {/* TOP AREA */}
        <div className="flex justify-between items-start px-6 md:px-16 mt-20">

          {/* LEFT TEXT */}
          <div className="max-w-md  text-white font-urban">
            <p className="text-lg opacity-90 justify-center">At the heart of Thrissur,</p>

            <h1 className="text-5xl md:text-[48px] font-urban justify-center font-semibold leading-[43px] ">
              inspired by your <br /> dreams.
            </h1>

            <p className="opacity-90 font-[14px] leading-[100%]  max-w-sm font-urban">
              At Aurex Builders, we bring the spirit of Thrissur into every project
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-right font-urban text-white">
            <p className="text-sm tracking-wider opacity-80">
              AMENITIES THAT DEFINE
            </p>

            <h2 className="text-3xl md:text-[36px] leading-[16px] font-urban font-semibold">
              PREMIUM LIVING!
            </h2>

            <button className="flex items-center gap-2 mt-3 bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-md hover:translate-y-[1px] transition">
              <span className="text-xs">💬</span> ENQUIRE{" "}
              <span className="text-red-600 font-bold">NOW</span>
            </button>
          </div>
        </div>

        {/* BOTTOM PROJECT INFO */}
        <div className="w-full flex justify-center px-4">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 flex items-center gap-6 md:gap-10">

            {/* LOGO */}
            <div className="relative w-20 h-12">
              <Image
                src={project.logo}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* DETAILS */}
            <div>
              <h4 className="font-semibold">{project.name}</h4>
              <p className="text-xs text-gray-600">{project.location}</p>
            </div>

            {/* QR */}
            <div className="relative w-16 h-16">
              <Image
                src={project.qrcode}
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>

            {/* RERA */}
            <p className="text-xs text-gray-800 whitespace-nowrap">
              RERA REG. NO <br /> {project.rera}
            </p>

            {/* LOCATION ICON */}
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* SLIDE CONTROLS */}
        <div className="absolute bottom-6 right-10 text-white flex items-center gap-3">
          <span className="text-sm">
            {String(active + 1).padStart(2, "0")}/{projects.length}
          </span>

          <button
            onClick={() => setActive(active === 0 ? projects.length - 1 : active - 1)}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => setActive(active === projects.length - 1 ? 0 : active + 1)}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
