"use client";

import { useState } from "react";
import Image from "next/image";
import GlassSurface from "@/Components/GlassSurface";
import EnquireNowButton from "@/Components/EnquireNowButton";


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
    <section className="relative w-full h-[130vh] overflow-hidden flex items-center">

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
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pb-6">

        {/* TOP AREA */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start px-2 md:px-6 lg:px-34 mt-26 md:mt-36 lg:mt-56 gap-10 md:gap-0">


          {/* LEFT TEXT */}
          <div className="max-w-md text-white font-urban text-center ">
            <p className="text-[14px] lg:text-[20px] leading-tight opacity-90">
              At the heart of Thrissur,
            </p>

            <h1 className="text-[40px] lg:text-[48px] font-semibold leading-[48px] ">
              inspired by your <br /> dreams.
            </h1>

            <p className="opacity-90 text-[14px] leading-tight mt-3 max-w-[250px] mx-auto">
              At Aurex Builders, we bring the spirit of Thrissur into every project
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-center  font-urban text-white">
            <p className="text-sm tracking-wider opacity-80 mt-2">
              AMENITIES THAT DEFINE
            </p>

            <h2 className="text-[32px] md:text-[36px] leading-[16px] font-urban font-semibold my-4">
              PREMIUM LIVING!
            </h2>
            <EnquireNowButton className="mx-auto" />

          </div>
        </div>




        {/* BOTTOM PROJECT INFO */}
        <div className="w-ful flex justify-center px-4">
          <div className="md:hidden flex">
            <button
              onClick={() => setActive(active === 0 ? projects.length - 1 : active - 1)}
              className="w-6 h-6 rounded-full text-white  border border-white md:hidden flex items-center justify-center"
            >
              ←

            </button>
          </div>
          <GlassSurface className="w-full !flex !flex-col md:!flex-row !items-center !h-auto !overflow-visible p-4 md:p-0 gap-4 md:gap-10 text-white">

          {/* <GlassSurface  className="w-full flex flex-col md:flex-row items-center md:items-center p-4 md:p-0 gap-4 md:gap-10 text-white"> */}
            {/* LOGO */}
            <div className="relative w-24 h-10 z-50 mx-auto md:mx-0">
              <Image src={project.logo} alt="Logo" fill className="object-contain" />
            </div>

            {/* NAME + LOCATION */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[10px] leading-[16px]">{project.name}</h4>
              <p className="text-xs">{project.location}</p>
            </div>

            {/* QR + RERA */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image src={project.qrcode} alt="QR Code" fill className="object-contain " />
              </div>

              <p className="text-[10px] leading-[14px] whitespace-nowrap">
                RERA REG. NO <br /> {project.rera}
              </p>
            </div>

            {/* GOOGLE MAP */}
            <div className="relative w-14 h-14 bg-white/20 rounded-full p-2 shrink-0">
              <Image src="/images/home/g-map.svg" alt="map" fill className="object-contain" />
            </div>

          </GlassSurface>

          <div className="md:hidden flex">
            <button
              onClick={() => setActive(active === projects.length - 1 ? 0 : active + 1)}
              className="w-6 h-6 rounded-full text-white border border-white  items-center justify-center"
            >
              →

            </button>
          </div>
        </div>



        {/* SLIDE CONTROLS */}
        <div className="absolute bottom-6 right-10 text-white md:flex hidden items-center gap-3">
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



