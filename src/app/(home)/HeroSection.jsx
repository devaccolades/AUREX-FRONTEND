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
            className="w-8 h-8 rounded-full   border border-white md:hidden flex items-center justify-center"
          >
            ←

          </button>
          </div>
          <GlassSurface className="flex p-0 items-center gap-6 md:gap-10">

            {/* LOGO */}
            <div className="relative w-20 h-12">
              <Image src={project.logo} alt="Logo" fill className="object-contain" />
            </div>

            {/* DETAILS */}
            <div>
              <h4 className="font-semibold text-[14px] leading-[16px] text-white">{project.name}</h4>
              <p className="text-xs text-white">{project.location}</p>
            </div>

            {/* QR */}
            <div className="relative w-16 h-16">
              <Image src={project.qrcode} alt="QR Code" fill className="object-contain" />
            </div>

            {/* RERA */}
            <p className="text-[10px] leading-[16px] text-white whitespace-nowrap">
              RERA REG. NO <br /> {project.rera}
            </p>

            <div className="relative w-14 h-14 bg-gray-200 rounded-full">
              <Image src="/images/home/g-map.svg" alt="google map" fill className="object-contain w-10 h-10" />
            </div>

          </GlassSurface>
   <div className="md:hidden flex">
          <button
            onClick={() => setActive(active === projects.length - 1 ? 0 : active + 1)}
            className="w-8 h-8 rounded-full border border-white  items-center justify-center"
          >
            →

          </button>
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



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import GlassSurface from "@/Components/GlassSurface";

// const projects = [
//   {
//     name: "AUREX CASCADE CITY",
//     location: "CHEMBUKKAVU, THRISSUR",
//     rera: "K-RERA/PRJ/TSR/243/2024",
//     logo: "/images/home/cascadelogo.svg",
//     project_image: "/images/home/hero.jpg",
//     qrcode: "/images/home/qr.png",
//   },
//   {
//     name: "AUREX LIARD",
//     location: "CHEMBUKKAVU, THRISSUR",
//     rera: "K-RERA/PRJ/TSR/243/2024",
//     logo: "/images/home/cascadelogo.svg",
//     project_image: "/images/home/hero.jpg",
//     qrcode: "/images/home/qr.png",
//   },
// ];

// export default function HeroSection() {
//   const [active, setActive] = useState(0);
//   const project = projects[active];

//   return (
//     <section className="relative w-full h-screen overflow-hidden flex items-center">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <Image
//           src={project.project_image}
//           alt="Project Image"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </div>

//       {/* GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10"></div>

//       {/* CONTENT */}
//       <div className="relative z-20 w-full h-full flex flex-col justify-between">

//         {/* TEXT AREA */}
//         <div className="flex justify-between items-start w-full px-6 md:px-20 pt-24">

//           {/* LEFT TEXT */}
//           <div className="max-w-md text-white font-urban">
//             <p className="text-lg opacity-90">At the heart of Thrissur,</p>

//             <h1 className="text-[42px] md:text-[55px] font-semibold leading-tight mt-2">
//               inspired by your <br /> dreams.
//             </h1>

//             <p className="mt-3 opacity-90 text-[14px] leading-tight max-w-sm">
//               At Aurex Builders, we bring the spirit of Thrissur into every project
//             </p>
//           </div>

//           {/* RIGHT TEXT */}
//           <div className="text-white text-right font-urban hidden md:block">
//             <p className="text-sm opacity-70 tracking-widest">
//               AMENITIES THAT DEFINE
//             </p>

//             <h2 className="text-[38px] leading-none font-semibold mt-1">
//               PREMIUM LIVING!
//             </h2>

//             <button className="flex items-center gap-2 mt-4 bg-white text-black px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-[1.02] transition">
//               <span className="text-xs">💬</span> ENQUIRE{" "}
//               <span className="text-red-600 font-bold">NOW</span>
//             </button>
//           </div>
//         </div>

//         {/* BOTTOM INFO BAR */}
//         <div className="w-full flex justify-center pb-10 px-4">
//           <GlassSurface className="flex items-center gap-6 md:gap-10 p-3 md:p-4">

//             {/* LOGO */}
//             <div className="relative w-20 h-12">
//               <Image src={project.logo} alt="Logo" fill className="object-contain" />
//             </div>

//             {/* DETAILS */}
//             <div>
//               <h4 className="font-semibold text-sm md:text-[14px] text-white">
//                 {project.name}
//               </h4>
//               <p className="text-xs opacity-90 text-white">{project.location}</p>
//             </div>

//             {/* QR CODE */}
//             <div className="relative w-16 h-16">
//               <Image src={project.qrcode} alt="QR Code" fill className="object-contain" />
//             </div>

//             {/* RERA */}
//             <p className="text-[10px] text-white whitespace-nowrap">
//               RERA REG. NO <br /> {project.rera}
//             </p>

//             {/* MAP ICON */}
//             <div className="relative w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
//               <Image src="/images/home/g-map.svg" alt="google map" fill className="object-contain" />
//             </div>

//           </GlassSurface>
//         </div>

//         {/* SLIDER CONTROLS */}
//         <div className="absolute bottom-6 right-8 text-white flex items-center gap-3">
//           <span className="text-sm tracking-widest">
//             {String(active + 1).padStart(2, "0")}/{projects.length}
//           </span>

//           <button
//             onClick={() => setActive(active === 0 ? projects.length - 1 : active - 1)}
//             className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
//           >
//             ←
//           </button>

//           <button
//             onClick={() => setActive(active === projects.length - 1 ? 0 : active + 1)}
//             className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
