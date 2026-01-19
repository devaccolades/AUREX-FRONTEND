"use client";

import { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
// import GlassSurface from "@/Components/GlassSurface";
const GlassSurface = dynamic(() => import("@/components2/GlassSurface"), {
  // Important: Setting ssr: false tells Next.js NOT to render this component on the server.
  ssr: false,
});
import EnquireNowButton from "@/components2/EnquireNowButton";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import ModalForm from "@/components2/forms/ModalForm";
import { useIsMobile } from "@/components2/hooks/useIsMobile";
import { ProjectsFetch } from "@/services/api";

const projects = [
  {
    name: "AUREX CASCADE CITY",
    location: "CHEMBUKKAVU, THRISSUR",
    rera: "K-RERA/PRJ/TSR/243/2024",
    logo: "/images/home/cascadelogo.svg",
    project_image: "/images/home/hero.jpg",
    mobile_project_image: "/images/home/heroMB.png",
    qrcode: "/images/home/qr.png",
  },
  {
    name: "AUREX LIARD",
    location: "CHEMBUKKAVU, THRISSUR",
    rera: "K-RERA/PRJ/TSR/243/2024",
    logo: "/images/home/cascadelogo.svg",
    project_image: "/images/home/cas.jpg",
    qrcode: "/images/home/qr.png",
  },
];

export default function HeroSection() {
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState(0);
  const [residentialProjects, setResidentialProjects] = useState([]);
  const project = residentialProjects[active];
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const wrapperRef = useRef(null);

  // 👇 Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    console.log("residentialProjects:", residentialProjects);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    ProjectsFetch().then((data) => {
      setResidentialProjects(
        data.filter((item) => item.project_type === "Residential"),
      );
    });
  }, []);

  useEffect(() => {
    console.log("project Data:", residentialProjects);
    console.log("project :", project);
  }, [residentialProjects]);

  useEffect(() => {
    if (project) {
      console.log("project image:", project.image);
    }
  }, [project]);

  if (!project) return <p>Loading...</p>;

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center">
      {/* BACKGROUND IMAGE */}
      <div ref={wrapperRef} className="hidden md:block absolute inset-0">
        <Image
          src={project?.image}
          alt="Project Image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div ref={wrapperRef} className=" md:hidden absolute inset-0">
        <Image
          src={project?.image}
          alt="Project Image"
          fill
          className="h-full object-cover object-bottom"
          priority
        />
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>

      {/* CONTENT */}
      <div className="container relative z-20 w-full h-full flex flex-col justify-between pb-6 ">
        {/* TOP AREA */}

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mt-[100px] md:mt-36 lg:mt-56 gap-[17px] md:gap-0">
          {/* LEFT TEXT */}
          <div className="text-white font-urban text-center ">
            <p className="text-[14px] lg:text-[20px] leading-[16px] lg:leading-[48px] opacity-90">
              At the heart of Thrissur,
            </p>

            <h1 className=" text-[40px] lg:text-[48px] font-semibold leading-[40px] md:leading-[48px] ">
              inspired by your dreams.
            </h1>

            <p className="mt-[8px] text-[12px] lg:text-[14px] leading-[100%] tracking-[0%] md:mt-3 max-w-[270px] mx-auto">
              At Aurex Builders, we bring the spirit of Thrissur into every
              project
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-center  font-urban text-white">
            <p className="font-urban font-bold text-[12px] leading-[16px] tracking-[0%] opacity-80 mt-2">
              AMENITIES THAT DEFINE
            </p>

            <h2 className=" text-[32px] md:text-[36px]  font-urban font-semibold">
              PREMIUM LIVING!
            </h2>
            <EnquireNowButton
              onClick={() => setOpenModal(true)}
              className="mx-auto"
            />
          </div>
        </div>

        {/* BOTTOM PROJECT INFO */}
        {isMobile ? (
          <div className="md:hidden absolute bottom-[16px] left-0 w-full px-0 z-30 flex justify-center">
            {/* <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 p-3 flex items-center gap-3 overflow-hidden"> */}

            <GlassSurface
              width={252}
              height={110}
              borderRadius={10}
              className="w-full flex items-center p-[5px] text-white"
            >
              {/* CONTENT */}
              {/* CONTENT */}
              <div className="flex flex-col  gap-3 flex-1">
                {/* ===== ROW 1: LOGO + NAME + LOCATION ===== */}
                <div className="flex items-center justify-between gap-2">
                  <div className="relative w-[72px] h-[30px] ">
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt="logo"
                        fill
                        className="object-cover md:object-contain"
                      />
                    )}
                  </div>

                  <div className="text-white leading-tight">
                    <h4 className="text-[13px] leading-[16px] font-urban font-semibold">
                      {project.name}
                    </h4>
                    <p className="text-[10px] leading-[16px] font-urban opacity-90">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* ===== ROW 2: QR + RERA ===== */}
                <div className="flex items-center justify-between gap-2">
                  <div className="relative w-8 h-8 shrink-0 bg-white rounded p-0">
                    {project.qr_code && (
                      <Image
                        src={project.qr_code}
                        alt="qr"
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>

                  <p className="text-[9px] leading-tight font-urban whitespace-nowrap text-white">
                    RERA REG. NO <br />
                    {project.rera}
                  </p>

                  {/* MAP ICON */}
                  <div className="relative w-10 h-10 bg-white rounded-full p-2 shrink-0">
                    <Image
                      src="/images/home/g-map.svg"
                      alt="map"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </GlassSurface>
            {/* </div> */}
          </div>
        ) : (
          <div className="hidden md:flex w-full justify-center mb-[16px]">
            <GlassSurface className="w-full !flex !flex-col md:!flex-row !items-center !h-auto !overflow-visible p-4 md:p-2 gap-4 md:gap-10 text-white">
              {/* <GlassSurface  className="w-full flex flex-col md:flex-row items-center md:items-center p-4 md:p-0 gap-4 md:gap-10 text-white"> */}
              {/* LOGO */}
              <div className="relative w-24 h-10 z-50 mx-auto md:mx-0">
                {project.logo && (
                  <Image
                    src={project?.logo}
                    alt={project?.logo_alt || "Project Logo"}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* NAME + LOCATION */}
              <div className="text-center md:text-left">
                <h4 className="font-semibold font-urban text-[14px] leading-[16px]">
                  {project.name}
                </h4>
                <p className="text-[10px] leading-[16px] font-urban">
                  {project.location}
                </p>
              </div>

              {/* QR + RERA */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0">
                  {project.qr_code && (
                    <Image
                      src={project.qr_code}
                      alt="QR Code"
                      fill
                      className="object-contain "
                    />
                  )}
                </div>

                <p className="text-[10px] leading-[16px]font-urban  whitespace-nowrap">
                  RERA REG. NO <br /> {project.k_rera}
                </p>
              </div>

              {/* GOOGLE MAP */}
              <div
                className="relative w-14 h-14 bg-white/20 rounded-full p-2 shrink-0"
                onMouseEnter={() => setOpen(true)}
              >
                <Image
                  src="/images/home/g-map.svg"
                  alt="map"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Map Popover */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={open ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`
          absolute bottom-full left-9/10 mb-4
          -translate-x-1/2
          w-[230px] h-[165px]
          bg-white rounded-2xl overflow-hidden
          shadow-[0_30px_60px_rgba(0,0,0,0.25)]
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          flex flex-col justify-center items-center
          ${
            open
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }
          
          sm:w-[230px] sm:h-[165px]
          xs:w-[240px]
        `}
              >
                {/* Map */}
                {project.map_iframe && (
                  <iframe
                    title="Location Map"
                    src={project.map_iframe}
                    className="relative w-[210px] h-[129px] border-0 rounded-2xl"
                    loading="lazy"
                  />
                )}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-30 w-full
                bg-gradient-to-t from-white to-transparent"
                />

                <p className="relative z-10 font-urban font-medium text-[14px] leading-[16px] tracking-[0%] text-[#357CFF]">
                  Get Direction
                </p>

                {/* Arrow */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2
                        w-0 h-0
                        border-l-8 border-r-8 border-t-8
                        border-l-transparent border-r-transparent
                        border-t-white"
                />
              </motion.div>
              {/* </div> */}
            </GlassSurface>
          </div>
        )}
        {/* <div className="w-ful flex justify-center py-0 px-4"> */}

        {/* ================= MOBILE HERO PROJECT CARD ================= */}

        {/* SLIDE CONTROLS */}
        <div className="absolute bottom-2 lg:bottom-6 right-4 text-white md:flex hidden items-center  gap-3">
          <span className="text-sm">
            {String(active + 1).padStart(2, "0")}/{residentialProjects.length}
          </span>

          <button
            onClick={() =>
              setActive(
                active === 0 ? residentialProjects.length - 1 : active - 1,
              )
            }
            className="w-5 lg:w-8 h-5 lg:h-8 rounded-full border border-white flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() =>
              setActive(
                active === residentialProjects.length - 1 ? 0 : active + 1,
              )
            }
            className="w-5 lg:w-8 h-5 lg:h-8 rounded-full border border-white flex items-center justify-center"
          >
            →
          </button>
        </div>
        {/* mobile slide bar */}
        <div className="relative z-30 md:hidden">
          <div className="absolute w-full bottom-[53px] right-0 lg:bottom-6  text-white flex md:hidden items-center justify-between  gap-3">
            {/* <span className="text-sm">
            {String(active + 1).padStart(2, "0")}/{residentialProjectss.length}
          </span> */}

            <button
              onClick={() =>
                setActive(
                  active === 0 ? residentialProjects.length - 1 : active - 1,
                )
              }
              className="w-5 lg:w-8 h-5 lg:h-8 rounded-full border border-white flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={() =>
                setActive(
                  active === residentialProjects.length - 1 ? 0 : active + 1,
                )
              }
              className="w-5 lg:w-8 h-5 lg:h-8 rounded-full border border-white flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative z-20">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <ModalForm />
          </div>
        </div>
      )}
    </section>
  );
}
