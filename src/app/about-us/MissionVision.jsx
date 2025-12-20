// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(MotionPathPlugin);
// const images = [
//   "/images/about/vision1.png",
//   "/images/about/vision2.png",
//   "/images/about/vision3.png",
//   "/images/about/vision4.png",
//   "/images/about/vision5.png",
//   "/images/about/vision6.png",
//   "/images/about/vision7.png",
//   "/images/about/vision8.png",
//   "/images/about/vision9.png",
//   "/images/about/vision10.png",
//   "/images/about/vision11.png",
//   "/images/about/vision12.png",
//   "/images/about/vision13.png",
  
// ];

// export default function MissionVision () {
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     itemsRef.current.forEach((el, i) => {
//       if (!el) return;

//       gsap.to(el, {
//         duration: 12,
//         repeat: -1,
//         ease: "none",
//         motionPath: {
//           path: [
//             { x: 0, y: -140 },
//             { x: -120, y: -90 },
//             { x: -200, y: 0 },
//             { x: -120, y: 90 },
//             { x: 0, y: 140 },
//           ],
//           curviness: 1.5,
//         },
//         delay: i * 0.6,
//       });
//     });
//   }, []);

//   return (
//     <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-4">
//             Our Vision & Mission
//           </h2>

//           <h3 className="text-xl font-semibold mb-2">Vision</h3>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             To be a pioneering force in the real estate sector by crafting homes
//             that enrich lives and shape communities for a better tomorrow.
//           </p>

//           <h3 className="text-xl font-semibold mb-2">Mission</h3>
//           <p className="text-gray-600 leading-relaxed">
//             To transform dreams into living realities through superior
//             construction quality and customer-centric innovation.
//           </p>
//         </div>

//         {/* RIGHT – C LETTER ANIMATION */}
//         <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
//           <div className="relative w-[420px] h-[420px]">
//             {images.map((src, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (itemsRef.current[i] = el)}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               >
//                 <div className="relative w-[200px] h-[130px] rounded-xl overflow-hidden shadow-2xl">
//                   <Image src={src} alt="" fill className="object-cover" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* edge fade */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
//         </div>

//       </div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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

export default function MissionVision() {
  const carouselRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    let rafId;

    const rotate = () => {
      angle += 0.25;
      if (carouselRef.current) {
        carouselRef.current.style.transform = `rotateX(-14deg) rotateY(${angle}deg)`;
      }
      rafId = requestAnimationFrame(rotate);
    };

    rotate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Our Vision & Mission
          </h2>

          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            
          To emerge as a pioneering and trusted force in the real estate landscape by designing 
          thoughtful spaces that inspire, enrich, and elevate everyday living.We envision creating
         communities that blend innovation, sustainability, and craftsmanship — shaping environments 
         where families thrive, memories are built, and a better tomorrow is continuously nurtured.
        </p>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to transform dreams into meaningful living experiences through uncompromising 
            construction quality, meticulous attention to detail, and a deeply customer-centric approach.
            We strive to integrate sustainable practices, cutting-edge design, and transparent processes 
            into every project — ensuring that each home or space we build stands as a reflection of our 
            commitment to trust, integrity, and “adorning lives” with lasting value and comfort.
          </p>
        </div>

        {/* RIGHT – 3D CAROUSEL */}
        <div className="relative w-full h-[420px] flex items-center justify-center">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: "1600px" }}
          >
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
                    width: "220px",
                    height: "140px",
                    marginLeft: "-110px",
                    marginTop: "-70px",
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${(360 / images.length) * i}deg) translateZ(420px)`,
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
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

          {/* Edge fade */}
          {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" /> */}
        </div>

      </div>
    </section>
  );
}
