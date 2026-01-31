"use client";

import ProjectEnquiryModal from "@/components2/forms/ProjectEnquiryModal";
import SuccessModal from "@/components2/SuccessModal";
import { ProjectsFetch } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignatureProjects({ data }) {
  const [projects, setProjects] = useState(
    data.filter((item) => item.project_type === "Residential"),
  );

  // useEffect(() => {
  //   ProjectsFetch().then((data) => {
  //     setProjects(data.filter((item) => item.project_type === "Residential"));
  //   });
  // }, []);

  const [hovered, setHovered] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const defaultExpanded = projects[0]?.id;
  const activeCard = hovered ? hovered : defaultExpanded;
  const [selectedProject, setSelectedProject] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <section className="relative py-10 md:py-16 lg:py-24 xl:py-22">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex w-full h-full justify-start opacity-10 pointer-events-none">
        <Image
          src="/images/home/Group (3).svg"
          alt="decor-left"
          fill
          className="object-cover md:object-contain md:object-left w-full h-full"
        />
      </div>

      {/* === Decorative 4 Corner Arrows === */}
      <div className=" pointer-events-none absolute inset-0 z-20">
        {/* Top Left */}
        <div className="absolute top-6 left-2 md:left-6 lg:left-10 rotate-0">
          <Image
            src="/images/icons/topLeft.svg"
            alt="corner"
            width={24}
            height={24}
          />
        </div>

        {/* Top Right */}
        <div className="absolute top-6 right-2 md:right-6 lg:right-10 rotate-0">
          <Image
            src="/images/icons/topRight.svg"
            alt="corner"
            width={24}
            height={24}
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-4 lg:bottom-6 right-2 md:right-6 lg:right-10 rotate-0">
          <Image
            src="/images/icons/downRight.svg"
            alt="corner"
            width={24}
            height={24}
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-4 lg:bottom-6 left-2 md:left-6 lg:left-10 rotate-0">
          <Image
            src="/images/icons/downLeft.svg"
            alt="corner"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Heading */}
      <div className="container text-center mb-24 relative z-10">
        <h4 className="text-[16px] font-poppins mb-0">
          <span className="text-[#006A54]">#Residential </span>
          <span className="text-gray-600">Projects</span>
        </h4>
        <h2 className="text-[32px] md:text-[38px] font-urban font-medium leading-[32px] md:leading-[48px] text-black">
          OUR SIGNATURE PROJECTS
        </h2>
        <p className="text-black text-[14px] leading-[100%] opacity-90 mb-0 md:mb-10">
          Turning your ideas into reality through meticulous planning and expert
          execution.
        </p>
      </div>

      {/* CARD SECTION */}
      <div className="container items-center justify-center md:flex hidden gap-1 lg:gap-4 overflow-hidden no-scrollbar  ">
        {projects.map((p) => {
          const text = p.land_mark;
          const match = text.match(/^(\d+\s*\w+)\s*(.*)$/);
          return (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden shadow-xl
                ${activeCard === p.id
                  ? "w-[511px] lg:w-[600px] xl:w-[880px] 2xl:w-[1000px] h-[347px] lg:h-[460px] xl:h-[520px]"
                  : "w-[200px] lg:w-[300px] xl:w-[360px] 2xl:w-[420px] h-[347px] lg:h-[460px] xl:h-[520px]  opacity-85"
                }`}
            >
              {/* Cover Image */}
              <Image
                src={activeCard === p.id ? p.image : p.image}
                alt={p.name}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* TOP RIGHT ICON */}
              {activeCard !== p.id && (
                <div className="absolute top-4 right-4 z-30  rounded-full w-[36px] h-[36px] flex items-center justify-center ">
                  <Image
                    src="/images/icons/top-right.svg" // <-- your icon path
                    alt="open"
                    width={30}
                    height={30}
                  />
                </div>
              )}

              {/* TOP BADGE ROW */}
              {activeCard === p.id && (
                <div
                  className="
      absolute top-3 left-3 right-3
      md:top-5 md:left-5 md:right-5
      z-20 flex flex-wrap
      gap-2 md:gap-3 lg:gap-4
    "
                >
                  {/* STATUS PILL */}
                  <div
                    className="
        flex items-center
        bg-[#A8731C] text-white
        rounded-[24px] shadow-sm
        px-[8px] py-[6px]
        md:px-[10px] md:py-[8px]
        lg:px-[12px] lg:py-[10px]
      "
                  >
                    <span
                      className="
          font-urban font-medium
          text-[11px]
          md:text-[12px]
          lg:text-[13px]
          leading-none
        "
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* <div className="flex flex-wrap items-center font-urban gap-0 mt-0 lg:mt-5">
                  <div className="flex items-center gap-0">
                    <div className="flex items-center gap-2 bg-white px-[10px] py-[10px] lg:py-[8px] rounded-[24px] shadow-sm">
                      <Image
                        src="/images/home/area.svg"
                        width={18}
                        height={18}
                        alt="area icon"
                      />
                      <span className="text-[12px] lg:text-[13px] leading-[13px] font-medium">
                        Total Area
                      </span>
                    </div>
                    <div className="bg-white px-[10px] py-[8px] rounded-[24px] shadow-sm">
                      <span className="text-[12px] lg:text-[13px] leading-[13px] font-semibold">
                        {p.total_area}
                      </span>
                    </div>
                  </div>
                </div> */}

                  {/* <div className="flex flex-wrap items-center font-urban gap-0 mt-0 lg:mt-5">
                  <div className="flex items-center gap-0">
                    <div className="flex items-center gap-2 bg-white px-[10px] py-[10px] lg:py-[8px] rounded-[24px] shadow-sm">
                      <Image
                        src="/images/home/appart.svg"
                        width={18}
                        height={18}
                        alt="units icon"
                      />
                      <span className="text-[12px] lg:text-[13px] leading-[13px] font-medium">
                        Total Units
                      </span>
                    </div>
                    <div className="bg-white px-[10px] py-[8px] rounded-[24px] shadow-sm">
                      <span className="text-[12px] lg:text-[13px] leading-[13px] font-semibold">
                        {p.total_units}
                      </span>
                    </div>
                  </div>
                </div> */}
                </div>
              )}
              {activeCard === p.id && (
                <div
                  className="
      absolute top-3 right-3
      md:top-5 md:right-5
      z-20 flex items-center
      gap-2 md:gap-3
    "
                >
                  {/* RERA PILL */}
                  <div className="flex items-center">
                    <div
                      className="
          bg-white rounded-[24px] shadow-sm
          px-[8px] py-[6px]
          lg:px-[12px] lg:py-[10px]
        "
                    >
                      <span
                        className="
            font-urban font-semibold text-black
            text-[11px]
            md:text-[12px]
            lg:text-[13px]
          "
                      >
                        {p.k_rera}
                      </span>
                    </div>
                  </div>

                  {/* QR CODE */}
                  <div
                    className="
        flex items-center justify-center rounded-md
        bg-white/80
        w-[40px] h-[40px]
        md:w-[50px] md:h-[50px]
        lg:w-[60px] lg:h-[60px]
      "
                  >
                    <Image
                      src={p.qr_code}
                      alt="rera qr"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              )}



              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 p-2 lg:p-6 w-full text-white z-20">
                <Image
                  src={p.logo}
                  alt={p.logo_alt}
                  width={100}
                  height={30}
                  className="mb-1 lg:mb-3 w-[80px] lg:w-[103px] h-[32px] lg:h-[42px] opacity-90"
                />

                <div key={p.id} className="flex items-center gap-[9px]">
                  {match ? (
                    <>
                      <span className="font-bold text-white text-[12px] leading-[100%] bg-[#A8731C] px-[10px] py-[6px] rounded-full">
                        {match[1]}
                      </span>
                      <span className="font-urban font-bold text-[14px] leading-[100%] tracking-[0%]">
                        {text.replace(match[1], "")}
                      </span>
                    </>
                  ) : (
                    text
                  )}
                </div>

                <div className="flex items-center gap-2 mt-[4px]">
                  <Image
                    src="/images/icons/locu.svg" // <-- your location icon path
                    alt="location"
                    width={14}
                    height={14}
                    className="opacity-100 h-[14px] w-[10px]"
                  />

                  <p className="text-[12px] leading-[100%] font-medium font-urban">
                    {p.location}
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-[24px] leading-[24px] font-urban font-semibold mt-[4px]">
                  {p.name}
                </h3>

                <p className="text-[12px] lg:text-[13px] leading-[100%] mt-[4px] font-normal lg:mt-2 max-w-[500px]  ">
                  {p.short_description}
                </p>

                <div className="flex w-full gap-3 mt-3 lg:mt-5">
                  {activeCard === p.id ? (
                    <>
                      {/* LEFT OUTLINE BUTTON */}
                      <Link
                        href={`/projects/${p.slug}`}
                        className="flex-1 w-fit px-6 py-3
                          font-urban text-[14px]
                          border border-white text-white
                          rounded-[10px] font-medium
                          flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <button
                          className="
                          flex justify-between items-center w-full cursor-pointer
                          
                        "
                        >
                          VIEW PROJECT DETAILS
                          <Image
                            src="/images/icons/arrow.svg"
                            alt="download"
                            width={8}
                            height={8}
                          />
                        </button>
                      </Link>

                      {/* RIGHT GREEN BUTTON */}
                      <button
                        onClick={() => {
                          setSelectedProject(p);
                          setModalOpen(true);
                        }}
                        className="
                        flex-1
                        px-6 py-3
                        font-urban text-[14px]
                        bg-[#0A6E50] text-white
                        rounded-[10px] font-semibold
                        flex items-center justify-between gap-2 cursor-pointer
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
                    </>
                  ) : (
                    // <button className="px-6 py-2 text-sm border border-white text-white rounded-[10px] font-semibold">
                    //   View Project →
                    // </button>
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
                      VIEW PROJECT
                      <Image
                        src="/images/icons/arrow.svg"
                        alt="download"
                        width={8}
                        height={8}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE VIEW ONLY */}
      <section className="block md:hidden px-4 py-10">
        {/* Heading */}

        {/* PROJECT LIST (GRID COL-1) */}
        <div className="grid grid-cols-1 gap-4">
          {projects.map((p) => {
            const text = p.land_mark;
            const match = text.match(/^(\d+\s*\w+)\s*(.*)$/);
            return (
              <div
                key={p.id}
                className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              >
                {/* IMAGE */}
                <div className="h-[400px] w-full relative">
                  <Image
                    src={p.image}
                    alt={p.image_alt}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                 {activeCard === p.id && (
                <div
                  className="
      absolute top-3 left-3 right-3
      md:top-5 md:left-5 md:right-5
      z-20 flex flex-wrap
      gap-2 md:gap-3 lg:gap-4
    "
                >
                  {/* STATUS PILL */}
                  <div
                    className="
        flex items-center
        bg-[#A8731C] text-white
        rounded-[24px] shadow-sm
        px-[8px] py-[6px]
        md:px-[10px] md:py-[8px]
        lg:px-[12px] lg:py-[10px]
      "
                  >
                    <span
                      className="
          font-urban font-medium
          text-[11px]
          md:text-[12px]
          lg:text-[13px]
          leading-none
        "
                    >
                      {p.status}
                    </span>
                  </div>
                  </div>
           ) }

                {activeCard === p.id && (



                  <div
                    className="
      absolute top-3 right-3
      md:top-5 md:right-5
      z-20 flex items-center
      gap-2 md:gap-3
    "
                  >
                    {/* RERA PILL */}


                    {/* QR CODE */}
                    <div
                      className="
        flex items-center justify-center rounded-md
        bg-white/80
        w-[40px] h-[40px]
        md:w-[50px] md:h-[50px]
        lg:w-[60px] lg:h-[60px]
      "
                    >
                      <Image
                        src={p.qr_code}
                        alt="rera qr"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* CONTENT */}
                <div className="absolute bottom-0 p-3 w-full text-white mt-[8px]">
                  {/* LOGO */}
                  <Image
                    src={p.logo}
                    alt={p.logo_alt}
                    width={83}
                    height={34}
                    className="mb-2 opacity-90"
                  />

                  <div
                    key={p.id}
                    className="flex items-center gap-[9px] mt-[8px]"
                  >
                    {match ? (
                      <>
                        <span className="font-semibold text-white text-[13px] leading-[100%] bg-[#A8731C] px-[10px] py-[6px] rounded-full">
                          {match[1]}
                        </span>
                        <span className="font-urban font-bold text-[14px] leading-[100%] tracking-[0%]">
                          {text.replace(match[1], "")}
                        </span>
                      </>
                    ) : (
                      text
                    )}
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-center gap-[8px] mt-[8px]">
                    <Image
                      src="/images/icons/locu.svg" // <-- your location icon path
                      alt="location"
                      width={14}
                      height={14}
                      className="h-[14px] w-[10px]"
                    />

                    <p className="text-[12px] leading-[100%] font-medium font-urban">
                      {p.location}
                    </p>
                  </div>

                  {/* TITLE */}
                  <h3 className="font-urban text-[20px] leading-[24px] font-semibold mt-[8px]">
                    {p.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className=" text-[12px] leading-[100%] mt-[8px] font-normal">
                    {p.short_description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex items-start justify-between mt-[20px]">
                    {/* <button className="px-4 py-2 text-[14px] min-w-[260px] leading-[16px] font-urban border border-white text-white rounded-[10px] font-semibold">
                    View Project →
                  </button> */}
                    <Link
                      href={`/projects/${p.slug}`}
                      className="
                          flex-1
                          px-6 py-3
                          font-urban text-[14px]
                          border border-white text-white
                          rounded-[10px] font-medium
                          flex items-center justify-between gap-2 cursor-pointer
                        "
                    >
                      VIEW PROJECT
                      <Image
                        src="/images/icons/arrow.svg"
                        alt="download"
                        width={8}
                        height={8}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative  z-20">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <ProjectEnquiryModal projectName={selectedProject.name}
              onSuccess={() => {
                setModalOpen(false);     // ✅ close enquiry modal
                setSuccessOpen(true);    // ✅ open success modal
              }}
            />
          </div>
        </div>
      )}
      <SuccessModal
        isOpen={successOpen}
        projectName={selectedProject?.name}
        onClose={() => {
          setSuccessOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}