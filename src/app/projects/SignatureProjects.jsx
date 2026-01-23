"use client";

import { ChevronRight, DoorOpen, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import SuccessModal from "@/components2/SuccessModal";
import ProjectEnquiryModal from "@/components2/forms/ProjectEnquiryModal";


export default function SignatureProjects({ data }) {
  const projects = data?.filter(
    (project) => project.project_type === "Residential"
  ) || [];
  // const projects = [
  //   {
  //     id: 1,
  //     title: "AUREX CASCADE CITY",
  //     logo: "/images/home/cascadelogo.svg",
  //     location: "Chembukkavu, Thrissur",
  //     distance: "900 mtr From Swaraj Round",
  //     rera: "K-RERA/PRJ/TSR/263/2024",
  //     totalArea: "32 Cents",
  //     totalUnits: "45 (B+G+9)",
  //     status: "Ongoing",
  //     bigImage: "/images/home/hero.jpg",
  //     description:
  //       "This premium villa project seamlessly marries contemporary aesthetics with enduring quality.",
  //   },
  //   {
  //     id: 2,
  //     title: "AUREX LIARD",
  //     logo: "/images/home/cascadelogo.svg",
  //     location: "Mulagunnathukavu, Thrissur",
  //     distance: "Near Medical College",
  //     rera: "K-RERA/PRJ/TSR/178/2023",
  //     totalArea: "48 Cents",
  //     totalUnits: "52 (B+G+10)",
  //     status: "Ready",
  //     bigImage: "/images/home/cas.jpg",
  //     description:
  //       "This premium project seamlessly marries contemporary aesthetics with enduring quality.",
  //   },
  // ];

  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId);
  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 relative bg-gradient-to-b from-[#FFF7EA] to-white">
      {/* HEADING */}

      <h2 className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase text-center mb-4 md:mb-8">
        OUR SIGNATURE PROJECTS
      </h2>

      {/* DESKTOP VIEW */}
      <div className="container hidden md:grid grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr] gap-8 mt-10">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* FILTER */}
          {/* <select className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <option>ONGOING</option>
            <option>READY TO OCCUPY</option>
          </select> */}
          <div className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <h3>Residential Projects</h3>
          </div>

          {/* PROJECT LIST */}
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className={`cursor-pointer border rounded-2xl p-4 transition
                             ${activeId === p.id
                    ? "border-[#A8731C] shadow-md"
                    : "border-gray-200"
                  }`}
              >
                <Image
                  src={p.logo}
                  alt={p.image_alt}
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
        <div className="relative h-[460px] lg:h-[520px] rounded-[24px] overflow-hidden shadow-xl">
          <Image
            src={activeProject.image}
            alt={activeProject.image_alt}
            fill
            className="object-cover"
            priority
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-between text-white">
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
                  {activeProject.k_rera}
                </span>
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div>
              <span className="inline-block bg-red-600 px-3 py-1 text-xs rounded-full mb-2">
                {activeProject.land_mark}
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
                {activeProject.name}
              </h3>

              <p className="text-[12px] lg:text-[13px] leading-[100%] mt-0 lg:mt-2 opacity-95 ">
                {activeProject.short_description}
              </p>

              <div className="flex gap-2 lg:gap-4 mt-4">
                <Link href={`/projects/${activeProject.slug}`}>

                  {/* LEFT OUTLINE BUTTON */}
                  <button

                    className="
                            flex-1
                            px-6 py-3
                            font-urban text-[12px] lg:text-[14px]
                            border border-white text-white
                            rounded-[10px] font-medium
                            flex items-center justify-between gap-2
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
                    setSelectedProject(activeProject);
                    setModalOpen(true);
                  }}
                  className="
                            flex-1
                            px-6 py-3
                            font-urban text-[12px] lg:text-[14px]
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
          {/* <select className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <option>ONGOING</option>
            <option>READY TO OCCUPY</option>
          </select> */}
          <div className="w-full border bg-black text-white border-gray-300 rounded-full px-4 py-2 text-[13px] leading-[13px] font-bold font-urban ">
            <h3>Residential Projects</h3>
          </div>

          {/* PROJECT LIST */}
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className={`cursor-pointer border rounded-2xl p-4 transition
                             ${activeId === p.id
                    ? "border-[#A8731C] shadow-md"
                    : "border-gray-200"
                  }`}
              >
                <Image
                  src={p.logo}
                  alt={p.logo_alt}
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

        {activeProject && (
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-[468px]">
            <Image
              src={activeProject.image}
              alt={activeProject.image_alt}
              fill
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-0 p-[10px] flex flex-col justify-between text-white">
              {/* TOP BADGES */}
              <div className="flex justify-between items-start">
                <span className="bg-[#A8731C] px-[8.5px] py-[8px] rounded-full text-[12px] font-bold">
                  {activeProject.status}
                </span>

                <div className="flex text-[10px] font-urban">
                  <span className="bg-white text-black px-[8px] py-[8px] rounded-[24px]">
                    KERA
                  </span>
                  <span className="bg-white text-black px-[8px] py-[8px] rounded-[24px]">
                    {activeProject.k_rera}
                  </span>
                </div>
              </div>

              {/* BOTTOM */}
              <div>
                <span className="inline-block bg-red-600 px-3 py-1 text-xs rounded-full mb-2">
                  {activeProject.land_mark}
                </span>

                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/locu.svg"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  <p className="text-[12px] opacity-80">
                    {activeProject.location}
                  </p>
                </div>

                <h3 className="text-[20px] font-semibold mt-1">
                  {activeProject.name}
                </h3>

                <p className="text-xs opacity-90 mt-1">
                  {activeProject.short_description}
                </p>

                <div className="flex gap-2 mt-4">
                  <Link href={`/projects/${activeProject.slug}`}>
                    <button className="border border-white px-3 py-2 rounded-xl text-[11px]">
                      VIEW PROJECT DETAILS
                    </button>
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedProject(activeProject);
                      setModalOpen(true);
                    }}
                    className="bg-[#006A54] px-3 py-2 rounded-xl text-[11px]">
                    BOOK SITE VISIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative z-20">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>

            <ProjectEnquiryModal
              projectName={selectedProject.name}
              onSuccess={() => {
                setModalOpen(false);   // close enquiry modal
                setSuccessOpen(true);  // open success modal
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
