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
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactModal from "@/components2/ContactModal";

export default function HeroSection({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [active, setActive] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [startSlider, setStartSlider] = useState(false);
  const [isMobiles, setIsMobiles] = useState(false);
  const [videoPlayCount, setVideoPlayCount] = useState(0);
  const [residentialProjects, setResidentialProjects] = useState(
    data.filter((item) => item.project_type === "Residential"),
  );
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

    // console.log("residentialProjects:", residentialProjects);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (project) {
      // console.log("project image:", project.image);
    }
  }, [project]);

  const handleMouseEnter = () => {
    // console.log("Mouse entered map icon");
    setOpen(true);
  };

  if (!project) return <p>Loading...</p>;

  useEffect(() => {
    if (!startSlider || !residentialProjects.length) return;

    const interval = setInterval(() => {
      setActive((prev) =>
        prev === residentialProjects.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [startSlider, residentialProjects.length]);

  useEffect(() => {
  const check = () => setIsMobiles(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);



  return (
    <section className="relative w-full h-[100vh] md:h-[580px] lg:h-[100vh] overflow-hidden flex items-center">
      {/* BACKGROUND IMAGE */}
      {showVideo && (
        <video
          src="/video/hero.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          onEnded={() => {
            setShowVideo(false);
            setStartSlider(true);
          }}
        />
      )}

      {!showVideo && (
        <>
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

          <div ref={wrapperRef} className="md:hidden absolute inset-0">
            <Image
              src={project?.image}
              alt="Project Image"
              fill
              className="h-full object-cover object-bottom"
              priority
            />
          </div>
        </>
      )}


      {/* OVERLAY GRADIENT */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div> */}

      {/* CONTENT */}
      <div className="container relative z-20 w-full h-full flex flex-col justify-between pb-6 xl:w-[80%]">
        {/* TOP AREA */}

        <div className="flex flex-col gap-[17px] mt-[94px] md:mt-[204px] md:flex-row md:items-center md:justify-between xl:mt-[211px]">
          {/* LEFT TEXT */}
          {/* <div className="text-white font-urban flex justify-start flex-col text-center ">
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
          </div> */}

          <div className=" text-white text-center flex flex-col items-center">
            <p className="font-urban font-semibold text-[14px] leading-[14px] tracking-[0%] xl:text-[20px] xl:leading-[20px] ">
              In the heart of Thrissur,
            </p>
            <h1 className="font-urban font-semibold text-[36px] leading-[35px] tracking-[0%] mt-[6px] md:max-w-[270px] xl:text-[48px] xl:leading-[43px] xl:max-w-[382px]">
              {" "}
              inspired by your dreams.
            </h1>
            <p className="mt-[15px] font-poppins text-[14px] leading-[100%] tracking-[0%] max-w-[249px] md:text-[12px] md:mt-[13px] xl:mt-[26px] xl:text-[14px]">
              At Aurex Builders, we bring the spirit of Thrissur into every
              project
            </p>
          </div>

          {/* RIGHT TEXT */}
          {/* <div className="text-center  font-urban text-white">
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
          </div> */}

          <div className="flex flex-col items-center text-white font-urban">
            <p className="text-[12px] leading-[16px] tracking-[0%] font-bold ">
              AMENITIES THAT DEFINE
            </p>
            <h2 className="text-[32px] leading-[16px] tracking-[0%] font-bold mt-[12px] xl:text-[36px]">
              PREMIUM LIVING!
            </h2>

            <div className="mt-[17px]">
              <EnquireNowButton
                onClick={() => setOpenModal(true)}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM PROJECT INFO */}
          {!showVideo && (
        isMobile ? (
          <div className="md:hidden absolute bottom-[16px] left-0 w-full px-0 z-30 flex justify-center">
            {/* <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 p-3 flex items-center gap-3 overflow-hidden"> */}

            <GlassSurface
              backgroundOpacity={0.5}
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
                    {project.k_rera}
                  </p>

                  {/* MAP ICON */}
                  <div className="relative w-10 h-10 bg-white rounded-full p-2 shrink-0 cursor-pointer z-40">
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
          <div className="hidden md:flex w-full justify-center mb-[16px] relative">
            <GlassSurface
              width={"480px"}
              height={"54px"}
              padding={"10px"}
              backgroundOpacity={0.5}
              // borderRadius={'10px'}
              className="w-full !flex !flex-col md:!flex-row !items-center !h-auto text-white gap-[10px] rounded-[10px]"
            >
              {/* <GlassSurface  className="w-full flex flex-col md:flex-row items-center md:items-center p-4 md:p-0 gap-4 md:gap-10 text-white"> */}
              {/* LOGO */}
              <div className="relative w-[73px] h-[30px] z-50 mx-auto md:mx-0">
                {project.logo && (
                  <Image
                    src={project?.logo}
                    alt={project?.logo_alt || "Project Logo"}
                    fill
                    className="object-contain h-full w-full"
                  />
                )}
              </div>

              {/* NAME + LOCATION */}
              <div className="text-center md:text-left">
                <h4 className="font-extrabold font-urban text-[13px] leading-[16px] tracking-[0%]">
                  {project.name}
                </h4>
                <p className="text-[10px] leading-[16px] tracking-[0%] font-bold font-urban">
                  {project.location}
                </p>
              </div>

              {/* QR + RERA */}
              <div className="flex items-center gap-[3px]">
                <div className="relative w-[30px] h-[30px] shrink-0">
                  {project.qr_code && (
                    <Image
                      src={project.qr_code}
                      alt="QR Code"
                      fill
                      className="object-contain "
                    />
                  )}
                </div>

                <p className="text-[10px] leading-[16px] tracking-[0%] font-urban  whitespace-nowrap">
                  RERA REG. NO <br /> {project.k_rera}
                </p>
              </div>

              {/* GOOGLE MAP */}
              <div
                className="relative w-[34px] h-[34px] bg-white/20 rounded-full p-2 shrink-0 z-40 cursor-pointer"
                onMouseEnter={handleMouseEnter}
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
          ${open
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
        ))}
        {/* <div className="w-ful flex justify-center py-0 px-4"> */}

        {/* ================= MOBILE HERO PROJECT CARD ================= */}

        {/* SLIDE CONTROLS */}
        {!showVideo && (
        <div className="absolute bottom-12 lg:bottom-6 right-4 text-white md:flex hidden items-center gap-[10px]  ">
          <div className="">
            <span className="font-urban font-medium text-[14px] leading-[32px] tracking-[0%]  text-[#D6A12B] ">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="font-urban font-medium text-[14px] leading-[32px] tracking-[0%] ">
              /0{residentialProjects.length}
            </span>
          </div>

          <button
            onClick={() =>
              setActive(
                active === 0 ? residentialProjects.length - 1 : active - 1,
              )
            }
            className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] rounded-full border border-white flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setActive(
                active === residentialProjects.length - 1 ? 0 : active + 1,
              )
            }
            className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] rounded-full border border-white flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
        )}
        {/* mobile slide bar */}
        <div className="relative w-full z-30 md:hidden -bottom-6">
          <div className="absolute w-full bottom-[53px] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 lg:bottom-6  text-white flex md:hidden items-center justify-between  gap-3">
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
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setActive(
                  active === residentialProjects.length - 1 ? 0 : active + 1,
                )
              }
              className="w-5 lg:w-8 h-5 lg:h-8 rounded-full border border-white flex items-center justify-center"
            >
              <ChevronRight />
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

            <ModalForm onSuccess={() => setShowContactModal(true)}
              onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
}
