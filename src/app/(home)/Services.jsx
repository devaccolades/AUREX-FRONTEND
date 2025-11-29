


// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// /**
//  * Final production-ready component:
//  * - Pinned section: stays fixed while the internal content animates on scroll.
//  * - Images are scattered inside each "slide" (100vh each).
//  * - On scroll, images of the current slide animate up (exit), images of next slide animate in from bottom.
//  * - Title sits exactly centered and rotates/fades between slides.
//  *
//  * Drop this file into a Next.js page/component that supports "use client".
//  */

// const services = [
//   {
//     id: 1,
//     title: "INTERIOR DESIGNING",
//     images: [
//       { src: "/images/home/services/int1.png", x: 20, y: 25 },
//       { src: "/images/home/services/int2.png", x: 65, y: 15 },
//       { src: "/images/home/services/int3.png", x: 40, y: 60 },
//       { src: "/images/home/services/int4.png", x: 75, y: 45 },
//     ],
//   },
//   {
//     id: 2,
//     title: "RENTAL AND RESALE ASSISTANCE",
//     images: [
//       { src: "/images/home/services/rent1.png", x: 25, y: 30 },
//       { src: "/images/home/services/rent2.png", x: 70, y: 25 },
//       { src: "/images/home/services/rent3.png", x: 45, y: 70 },
//       { src: "/images/home/services/rent1.png", x: 15, y: 75 },
//     ],
//   },
//   {
//     id: 3,
//     title: "MAINTENANCE ASSISTANCE",
//     images: [
//       { src: "/images/home/services/ma1.png", x: 20, y: 20 },
//       { src: "/images/home/services/ma2.png", x: 60, y: 20 },
//       { src: "/images/home/services/ma3.png", x: 75, y: 65 },
//       { src: "/images/home/services/ma1.png", x: 25, y: 80 },
//     ],
//   },
// ];

// export default function ServicesFinal() {
//   const counterRef = useRef(null);
//   const buttonRef = useRef(null);
//   const containerRef = useRef(null); // entire pinned section
//   const groupsRef = useRef(null); // the tall wrapper (services.length * 100vh)
//   const titleRefs = useRef([]); // refs for titles
//   const imgWrappersRef = useRef(null); // will use data attributes to select images

//   useLayoutEffect(() => {
//     if (!containerRef.current) return;

//     const ctx = gsap.context(() => {
//       const total = services.length;
//       const scrollDistance = total * 1000; // tweak to control how long the pinned scroll lasts

//       // initial styles:
//       gsap.set(titleRefs.current, { transformOrigin: "50% 50% -50px" });
//       // set each slide's images to start slightly below (so entering slide animates from bottom)
//       // gsap.set("[data-slide-img]", { yPercent: 20, opacity: 0, scale: 0.98 });
//       gsap.set(`[data-slide-img][data-slide="0"]`, {
//   yPercent: 0,
//   opacity: 1,
//   scale: 1
// });


//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: `+=${scrollDistance}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // For each slide transition: animate current title out, next title in, move groups up,
//       // animate outgoing images upward and incoming images from bottom -> center.
//       for (let i = 0; i < total; i++) {
//         // show first title initially (ensure it's visible)
//         if (i === 0) {
//           tl.set(titleRefs.current[0], { opacity: 1, rotateX: 0, y: 0 });
//         }

//         // For the last iteration we only want to show the exit animation for the last title if needed.
//         if (i < total - 1) {
//           // animate current title out and next title in (rotate/fade)
//           tl.to(
//             titleRefs.current[i],
//             { opacity: 0, rotateX: 90, y: -50, duration: 0.8, ease: "power1.in" },
//             ">-0.1"
//           ).to(
//             titleRefs.current[i + 1],
//             { opacity: 1, rotateX: 0, y: 0, duration: 0.8, ease: "power1.out" },
//             "<"
//           );

//           // animate images: current images move up/out; next images move from bottom/in
//           // select images by data attributes: data-slide-index
//           const currentImgs = gsap.utils.toArray(`[data-slide-img][data-slide="${i}"]`);
//           const nextImgs = gsap.utils.toArray(`[data-slide-img][data-slide="${i + 1}"]`);

//           // outgoing images: go up and fade
//           tl.to(
//             currentImgs,
//             {
//               yPercent: -30,
//               opacity: 0,
//               scale: 0.96,
//               duration: 0.9,
//               stagger: 0.08,
//               ease: "power2.in",
//             },
//             "<"
//           );

//           // shift the whole wrapper up by 100vh to reveal next slide's area
//           tl.to(
//             groupsRef.current,
//             { y: `-${(i + 1) * 100}vh`, duration: 1, ease: "power2.inOut" },
//             "<0.05"
//           );

//           // incoming images: from below into place (reset yPercent -> 0 and opacity 1)
//           tl.to(
//             nextImgs,
//             {
//               yPercent: 0,
//               opacity: 1,
//               scale: 1,
//               duration: 0.9,
//               stagger: 0.08,
//               ease: "power2.out",
//             },
//             "<0.25"
//           );
//         }
//       }

//       // ensure final title remains visible
//       tl.set(titleRefs.current[total - 1], { opacity: 1, rotateX: 0, y: 0 });
//     }, containerRef); // scope to containerRef for safer cleanup

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">
//       {/* CENTERED TITLE LAYER */}
//       <div
//         className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
//         aria-hidden
//       >
//         {services.map((s, i) => (
//           <h2
//             key={i}
//             ref={(el) => (titleRefs.current[i] = el)}
//             className="absolute text-[44px] md:text-[56px] lg:text-[72px] font-urban font-normal tracking-tight text-center leading-tight"
//             style={{
//               opacity: i === 0 ? 1 : 0,
//               transform: i === 0 ? "rotateX(0deg) translateY(0px)" : "rotateX(90deg) translateY(40px)",
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {s.title}
//           </h2>
//         ))}
//       </div>

//       {/* IMAGES TALL WRAPPER: height = services.length * 100vh */}
//       <div className="absolute inset-0 z-10">
//         <div
//           ref={groupsRef}
//           className="absolute left-0 top-0 w-full"
//           style={{ height: `${services.length * 100}vh` }}
//         >
//           {services.map((service, slideIndex) => (
//             <div key={slideIndex} className="relative w-full h-screen">
//               {/* each image is absolutely positioned inside the slide */}
//               {service.images.map((img, j) => (
//                 <div
//                   key={j}
//                   data-slide-img
//                   data-slide={slideIndex}
//                   style={{
//                     position: "absolute",
//                     left: `${img.x}%`,
//                     top: `${img.y}%`,
//                     transform: "translate(-50%, -50%)",
//                     width: "220px",
//                     height: "auto",
//                     willChange: "transform, opacity",
//                     zIndex: 5 + j,
//                   }}
//                 >
//                   {/* Using Next/Image for optimization; adjust width/height as needed */}
//                   <Image
//                     src={img.src}
//                     alt={`service-${slideIndex}-${j}`}
//                     width={300}
//                     height={300}
//                     className=" shadow-2xl object-cover"
//                     style={{ width: "100%", height: "auto", display: "block" }}
//                     priority={false}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Optional: a subtle overlay or decoration behind titles */}
//       <div className="absolute inset-0 pointer-events-none z-0"></div>
//     </section>
//   );
// }




"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "INTERIOR DESIGNING",
    images: [
      { src: "/images/home/services/int1.png", x: 20, y: 25 },
      { src: "/images/home/services/int2.png", x: 65, y: 15 },
      { src: "/images/home/services/int3.png", x: 40, y: 60 },
      { src: "/images/home/services/int4.png", x: 75, y: 45 },
    ],
  },
  {
    id: 2,
    title: "RENTAL AND RESALE ASSISTANCE",
    images: [
      { src: "/images/home/services/rent1.png", x: 25, y: 30 },
      { src: "/images/home/services/rent2.png", x: 70, y: 25 },
      { src: "/images/home/services/rent3.png", x: 45, y: 70 },
      { src: "/images/home/services/rent1.png", x: 15, y: 75 },
    ],
  },
  {
    id: 3,
    title: "MAINTENANCE ASSISTANCE",
    images: [
      { src: "/images/home/services/ma1.png", x: 20, y: 20 },
      { src: "/images/home/services/ma2.png", x: 60, y: 20 },
      { src: "/images/home/services/ma3.png", x: 75, y: 65 },
      { src: "/images/home/services/ma1.png", x: 25, y: 80 },
      { src: "/images/home/services/ma3.png", x: 95, y: 85 },
      { src: "/images/home/services/ma1.png", x: 15, y: 98 },
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const groupsRef = useRef(null);
  const titleRefs = useRef([]);
  const counterRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const total = services.length;
      const scrollDistance = total * 1000;

      gsap.set(titleRefs.current, { transformOrigin: "50% 50% -50px" });

      // show first slide images normally
      gsap.set("[data-slide-img][data-slide='0']", {
        yPercent: 0,
        opacity: 1,
        scale: 1,
      });

      // other slides start hidden
      gsap.set(
        "[data-slide-img]:not([data-slide='0'])",
        { yPercent: 20, opacity: 0, scale: 0.98 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
        },
      });

      tl.set(counterRef.current, { opacity: 1 });
      tl.set(buttonRef.current, { opacity: 1 });

      for (let i = 0; i < total - 1; i++) {
        const currentImgs = gsap.utils.toArray(
          `[data-slide-img][data-slide="${i}"]`
        );
        const nextImgs = gsap.utils.toArray(
          `[data-slide-img][data-slide="${i + 1}"]`
        );

        // Title transition
        tl.to(titleRefs.current[i], {
          opacity: 0,
          rotateX: 90,
          y: -50,
          duration: 0.8,
        }).to(
          titleRefs.current[i + 1],
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.8,
          },
          "<"
        );

        // Counter change
        // tl.to(
        //   {},
        //   {
        //     duration: 0.1,
        //     onUpdate: () => {
        //       counterRef.current.innerHTML = `0${i + 2} / 0${total}`;
        //     },
        //   },
        //   "<"
        // );
        tl.to(
          {},
          {
            duration: 0.1,
            onUpdate: () => {
              const current = i + 2; // 2,3, etc
              counterRef.current.innerHTML = `
        <span style="color:#D4A017;">0${current}</span>
        <span style="color:#000;"> / 0${total}</span>
      `;
            },
          },
          "<"
        );

        // Outgoing images
        tl.to(
          currentImgs,
          {
            yPercent: -30,
            opacity: 0,
            scale: 0.95,
            stagger: 0.08,
            duration: 0.9,
          },
          "<"
        );

        // Slide wrapper movement
        tl.to(
          groupsRef.current,
          {
            y: `-${(i + 1) * 100}vh`,
            duration: 1,
          },
          "<0.1"
        );

        // Incoming images
        tl.to(
          nextImgs,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.9,
          },
          "<0.25"
        );
      }

      tl.set(titleRefs.current[total - 1], { opacity: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      {/* CENTER STACK : Counter → Title → Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">

        {/* Counter */}
        <div
          ref={counterRef}
          className="text-[16px] leading-[32px] font-urban font-semibold tracking-widest mb-14 xl:mb-10 flex items-center gap-1"
        >
          <span className="text-[#D4A017]">01</span>
          <span className="text-black">/ 03</span>
        </div>
        {/* Title — separate absolute layer */}
        <div className="relative h-24 w-full flex items-center justify-center pointer-events-none z-50 py-8">
          {services.map((s, i) => (
            <h2
              key={i}
              ref={(el) => (titleRefs.current[i] = el)}
              className="absolute text-[40px] md:text-[60px] lg:text-[72px] font-normal text-black tracking-tight text-center leading-tight "
              style={{
                opacity: i === 0 ? 1 : 0,
                transform:
                  i === 0
                    ? "rotateX(0deg) translateY(0px)"
                    : "rotateX(90deg) translateY(40px)",
              }}
            >
              {s.title}
            </h2>
          ))}
        </div>

        {/* Button */}
        <button
          // onClick={onClick}
          className="flex items-center gap-2 mt-8 xl:mt-4 text-black px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-bold  hover:scale-[1.03] transition "
        >
          <Image
            src="/images/home/enq.svg"
            alt="Arrow"
            width={20}
            height={20}
            className="" />
          <span className="flex items-center gap-1">
            ENQUIRE
            <span className="flex bg-[#FF0000] w-12 h-12 rounded-full items-center justify-center text-white font-bold">
              NOW
            </span>
          </span>
        </button>
      </div>

      {/* Slide Images Wrapper */}
      <div className="absolute inset-0 z-10">
        <div
          ref={groupsRef}
          className="absolute left-0 top-0 w-full"
          style={{ height: `${services.length * 100}vh` }}
        >
          {services.map((service, slideIndex) => (
            <div key={slideIndex} className="relative w-full h-screen">
              {service.images.map((img, j) => (
                

                <div
                  key={j}
                  data-slide-img
                  data-slide={slideIndex}
                  className="
    absolute 
    -translate-x-1/2 
    -translate-y-1/2
    w-[140px]        /* mobile */
    h-[140px]
    md:w-[200px]     /* tablet */
    md:h-[200px]
    lg:w-[260px]     /* desktop */
    lg:h-[260px]
    xl:w-[280px]     /* large desktop */
    xl:h-[280px]
  "
                  style={{
                    left: `${img.x}%`,
                    top: `${img.y}%`,
                  }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover  shadow-xl"
                  />
                </div>

              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
