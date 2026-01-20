"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["Commercial", "Contracts", "Residential"];

// const projects = [
//   {
//     id: 1,
//     title: "AURUM COMPLEX",
//     location: "Puthukkad, Thrissur",
//     category: "Commercial",
//     mapEmbed:
//       "https://www.google.com/maps?q=Puthukkad%20Thrissur&output=embed",
//   },
//   {
//     id: 2,
//     title: "AURUM GALLERIA",
//     location: "Athani, Thrissur",
//     category: "Contracts",
//     mapEmbed:
//       "https://www.google.com/maps?q=Athani%20Thrissur&output=embed",
//   },
//   {
//     id: 3,
//     title: "AURUM COMPLEX",
//     location: "Puthukkad, Thrissur",
//     category: "Residential",
//     mapEmbed:
//       "https://www.google.com/maps?q=Puthukkad%20Thrissur&output=embed",
//   },
// ];



export default function ProjectListing({ data = [] }) {
  const [activeFilter, setActiveFilter] = useState("Commercial");

  const filteredProjects = data.filter(
    (project) => project.project_type === activeFilter
  );

  // const filteredProjects =
  //   activeFilter === "Commercial"
  //     ? projects
  //     : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-6 md:py-16 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src='/images/projects/bg.png'
        alt="Thrissur Background"
        fill
        className="object-cover rounded-[30px] "
        priority
      />


      {/* CONTENT */}
      <div className="relative z-10 container mx-auto ">

        {/* Heading */}
        <p className="text-[16px] md:text-[20px] leading-[16px] font-urban font-bold uppercase tracking-widest text-black mb-2">
          Our Completed Projects
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-1 md:gap-3 mb-4 md:mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-[12px] md:text-[13px] leading-[13px] font-bold font-urban uppercase border transition
                ${activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-black"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Map */}
              <div className="w-full h-[180px] rounded-lg overflow-hidden">
                {project.map_iframe ? (
                  <iframe
                    src={project.map_iframe}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-xs text-gray-400">
                    Map not available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/projects/loc.svg"
                    alt="location"
                    width={10}
                    height={10}
                  />
                  <p className="text-[12px] opacity-80 font-urban">
                    {project.location}
                  </p>
                </div>

                <h3 className="font-semibold font-urban text-[20px] mt-2">
                  {project.name}
                </h3>

                <p className="text-[13px] mt-2">
                  {project.short_description}
                </p>
              </div>

              <div className="flex justify-center mt-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    project.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-urban text-sm font-semibold text-[#357CFF]"
                >
                  Get Direction
                </a>
              </div>
            </div>
          ))}

          {/* {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >

              <div className="w-full h-[180px] rounded-lg overflow-hidden">
                <iframe
                  src={project.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="mt-4">

                <div className="flex items-center gap-2">
                  <Image
                    src="/images/projects/loc.svg"   
                    alt="location"
                    width={10}
                    height={10}
                    className="opacity-80"
                  />

                  <p className="text-[12px] leading-[100%] text-black opacity-80 font-urban">
                    {project.location}
                  </p>
                </div>



                <h3 className="font-semibold font-urban text-[20px] md:text-[24px] leading-[24px] mt-2">
                  {project.title}
                </h3>

                <p className="text-[13px] leading-[100%] text-black mt-2">
                  This premium commercial space merges contemporary aesthetics
                  with enduring quality.
                </p>


              </div>
              <div className="flex justify-center mt-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    project.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-urban text-sm leading-[16px] font-semibold text-[#357CFF]"
                >
                  Get Direction
                </a>
              </div>

            </div>
          ))} */}
        </div>

      </div>
    </section>
  );
}
