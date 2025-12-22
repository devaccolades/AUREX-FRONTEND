
// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const images = [
//   "/images/about/v1.webp",
//   "/images/about/v2.webp",
//   "/images/about/v3.webp",
//   "/images/about/v4.webp",
//   "/images/about/v5.webp",
//   "/images/about/v6.webp",
//   "/images/about/v7.webp",
//   "/images/about/v8.webp",
//   "/images/about/v9.jpg",
//   "/images/about/v10.jpg",
//   "/images/about/v11.jpg",
//   "/images/about/v12.jpg",
// ];

// export default function MissionVision() {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     let angle = 0;
//     let rafId;

//     const rotate = () => {
//       angle += 0.2;
//       if (carouselRef.current) {
//         carouselRef.current.style.transform = `
//           rotateX(-14deg)
//           rotateY(${angle}deg)
//         `;
//       }
//       rafId = requestAnimationFrame(rotate);
//     };

//     rotate();
//     return () => cancelAnimationFrame(rafId);
//   }, []);

//   return (
//     <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
//       <div className=" mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

//         {/* LEFT CONTENT */}
//         <div className="ml-20">
//           <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-4">
//             Our Vision & Mission
//           </h2>

//           <h3 className="text-xl font-semibold mb-2">Vision</h3>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             To emerge as a pioneering and trusted force in the real estate
//             landscape by designing thoughtful spaces that inspire, enrich, and
//             elevate everyday living. We envision creating communities that blend
//             innovation, sustainability, and craftsmanship — shaping environments
//             where families thrive and a better tomorrow is nurtured.
//           </p>

//           <h3 className="text-xl font-semibold mb-2">Mission</h3>
//           <p className="text-gray-600 leading-relaxed">
//             Our mission is to transform dreams into meaningful living experiences
//             through uncompromising construction quality, customer-centric
//             service, and sustainable innovation — ensuring every project
//             reflects our promise of “adorning lives.”
//           </p>
//         </div>

//         {/* RIGHT – HALF VISIBLE 3D CAROUSEL */}
//         <div className="relative w-full h-[420px] overflow-hidden">
//           {/* perspective wrapper */}
//           <div
//             className="absolute inset-y-0 right-[-35%] flex items-center"
//             style={{ perspective: "1600px" }}
//           >
//             {/* rotating carousel */}
//             <div
//               ref={carouselRef}
//               className="relative w-[520px] h-[300px]"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {images.map((src, i) => (
//                 <div
//                   key={i}
//                   className="absolute top-1/2 left-1/2"
//                   style={{
//                     width: "220px",
//                     height: "140px",
//                     marginLeft: "-110px",
//                     marginTop: "-70px",
//                     transformStyle: "preserve-3d",
//                     transform: `
//                       rotateY(${(360 / images.length) * i}deg)
//                       translateZ(420px)
//                     `,
//                   }}
//                 >
//                   <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
//                     <Image
//                       src={src}
//                       alt=""
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* right edge fade (optional but recommended) */}
//           {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" /> */}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/about/v1.webp",
  "/images/about/v2.webp",
  "/images/about/v3.webp",
  "/images/about/v4.webp",
  "/images/about/v5.webp",
  "/images/about/v6.webp",
  "/images/about/v7.webp",
  "/images/about/v8.webp",
  "/images/about/v9.jpg",
  "/images/about/v10.jpg",
  "/images/about/v11.jpg",
  "/images/about/v12.jpg",
];

// 🔹 Responsive size calculator
const getCardSize = () => {
  if (typeof window === "undefined") {
    return { width: 220, height: 140, depth: 420 };
  }

  const w = window.innerWidth;

  if (w < 640) {
    return { width: 160, height: 100, depth: 300 }; // mobile
  }

  if (w < 1024) {
    return { width: 200, height: 130, depth: 360 }; // tablet
  }

  return { width: 260, height: 160, depth: 460 }; // desktop
};

export default function MissionVision() {
  const carouselRef = useRef(null);
  const [card, setCard] = useState(getCardSize());

  // 🔹 Update sizes on resize
  useEffect(() => {
    const onResize = () => setCard(getCardSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 🔹 Rotation animation
  useEffect(() => {
    let angle = 0;
    let rafId;

    const rotate = () => {
      // Optional: slow / stop rotation on mobile
      if (window.innerWidth < 640) return;

      angle += 0.2;
      if (carouselRef.current) {
        carouselRef.current.style.transform = `
          rotateX(-14deg)
          rotateY(${angle}deg)
        `;
      }
      rafId = requestAnimationFrame(rotate);
    };

    rotate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-white ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="mx-4 md:ml-12 xl:ml-20 max-w-xl">
          <h2 className="font-medium text-[20px] md:text-[24px] lg:text-[36px] leading-[24px] lg:leading-[36px] font-urban tracking-widest text-black uppercase mb-4">
            Our Vision & Mission
          </h2>

          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] md:leading-[36px] font-extrabold font-urban mb-2">Vision</h3>
          <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]  text-black mb-8 ">
            To emerge as a pioneering and trusted force in the real estate
            landscape by designing thoughtful spaces that inspire, enrich, and
            elevate everyday living. We envision communities where innovation,
            sustainability, and craftsmanship come together for a better
            tomorrow.
          </p>

          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] md:leading-[36px] font-extrabold font-urban mb-2">Mission</h3>
          <p className="text-black text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]">
            Our mission is to transform dreams into meaningful living
            experiences through uncompromising quality, customer-centric
            service, and sustainable innovation — ensuring every project truly
            adorns lives.
          </p>
        </div>

        {/* RIGHT – HALF VISIBLE 3D CAROUSEL */}
        <div className="relative w-full h-[420px] overflow-hidden">
          {/* Perspective wrapper */}
          <div
            className="absolute inset-y-0 right-[-95%] lg:right-[-45%] xl:right-[-15%] flex items-center"
            style={{ perspective: "1600px" }}
          >
            {/* Rotating carousel */}
            <div
              ref={carouselRef}
              className="relative w-[520px] h-[300px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: `${card.width}px`,
                    height: `${card.height}px`,
                    marginLeft: `-${card.width / 2}px`,
                    marginTop: `-${card.height / 2}px`,
                    transformStyle: "preserve-3d",
                    transform: `
                      rotateY(${(360 / images.length) * i}deg)
                      translateZ(${card.depth}px)
                    `,
                  }}
                >
                  <div className="relative w-full h-full rounded-xl  ">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right edge fade */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" /> */}
        </div>

      </div>
    </section>
  );
}
