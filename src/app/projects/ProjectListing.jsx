"use client";

import { useState } from "react";

const filters = ["All", "Commercial", "Contracts", "Residential"];

const projects = [
  {
    id: 1,
    title: "AURUM COMPLEX",
    location: "Puthukkad, Thrissur",
    category: "Commercial",
    mapEmbed:
      "https://www.google.com/maps?q=Puthukkad%20Thrissur&output=embed",
  },
  {
    id: 2,
    title: "AURUM GALLERIA",
    location: "Athani, Thrissur",
    category: "Contracts",
    mapEmbed:
      "https://www.google.com/maps?q=Athani%20Thrissur&output=embed",
  },
  {
    id: 3,
    title: "AURUM COMPLEX",
    location: "Puthukkad, Thrissur",
    category: "Residential",
    mapEmbed:
      "https://www.google.com/maps?q=Puthukkad%20Thrissur&output=embed",
  },
];

export default function ProjectListing() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className=" py-16">
         {/* <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40"
                style={{
                    backgroundImage: "url('/images/projects/bg.png')",
                    backgroundSize: "1000px 600px",
                }}
            ></div> */}
     
      <div className="container mx-auto px-4">

        {/* Heading */}
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
          Our Completed Projects
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${
                  activeFilter === filter
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:border-black"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Google Map Embed */}
              <div className="w-full h-[180px] rounded-lg overflow-hidden">
                <iframe
                  src={project.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  📍 {project.location}
                </p>

                <h3 className="font-semibold mt-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  This premium commercial space merges contemporary aesthetics
                  with enduring quality.
                </p>

                {/* External Google Maps link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    project.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-black underline"
                >
                  Get Direction
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
