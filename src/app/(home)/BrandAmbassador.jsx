

// "use client";

// import Squares from "@/Components/Squares";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";



// export default function BrandAmbassador() {
//   const ref = useRef(null);

//   // Scroll tracking for zoom animation
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Scale from normal → zoomed
//   const scale = useTransform(
//   scrollYProgress,
//   [0, 0.55],
//   [1, 2],
//   { clamp: true }
// );

//   return (
//     <section className="relative w-full bg-white text-black pt-0 overflow-hidden">

//       {/* Background Squares */}
//       <div className="absolute inset-0">
//         <Squares
//           speed={0.5}
//           squareSize={36}
//           direction="diagonal"
//           borderColor="#dbdbdb"
//           hoverFillColor="#dbdbdb"
//         />
//       </div>

//       <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 mx-16">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-[32px] md:text-[40px] font-urban font-medium leading-[40px] mb-36">
//             MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY
//           </h2>

//           <p className="text-gray-700 font-inter text-[16px] leading-[156%] max-w-md">
//             Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
//             contemporary architecture, environment-friendly designs, timely delivery, after-sales service and return
//             on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering
//             finest apartments, flats, townhouses and luxury villas that match the requirements of customers with the
//             unique signature of a futuristic brand.
//           </p>
//         </div>

//         {/* MAIN IMAGE WITH SCROLL ZOOM */}
//         <div
//           ref={ref}
//           className="
//             relative 
//             max-w-[520px] 
//             mt-0
//             h-[800px]
//             overflow-visible
//              z-10
//             -top-0
//             will-change-transform
//           "
//         >
//           <motion.div style={{ scale }} className="origin-[0.1_0] -translate-x-18 w-full h-full">
//             <Image
//               src="/images/home/b.png"
//               alt="Bhavana"
//               width={900}
//               height={900}
//               className="w-full h-full object-cover object-top"
//             />
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE CONTENT */}
//         <div className="relative w-full right-20 flex flex-col justify-center items-start py-0 text-center md:text-left">
//           <h3 className="text-[20px] md:text-[32px] font-urban font-semibold py-2 leading-[32px] -mt-80">
//             WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
//           </h3>

//           <h1 className="text-[52px] md:text-[122px] font-urban py-10 font-medium leading-[40px]">
//             BHAVANA
//           </h1>

//           {/* SMALL BOTTOM-RIGHT IMAGE */}
//           <div className="absolute bottom-0 right-0 md:right-[-40px] md:bottom-[60px] w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/images/home/thumb.png"
//               alt="Bhavana small"
//               width={300}
//               height={200}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import Squares from "@/Components/Squares";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function BrandAmbassador() {
  const [openVideo, setOpenVideo] = useState(false);
  const ref = useRef(null);

  // Scroll tracking for zoom animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale from normal → zoomed
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 2], { clamp: true });

  // TEXT ANIMATION
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  // TEXT SCROLL FADE-UP ANIMATION
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  const fadeOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const fadeY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);


  return (
    <section className="relative w-full bg-white text-black pt-0 overflow-hidden">

      {/* Background Squares */}
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={36}
          direction="diagonal"
          borderColor="#dbdbdb"
          hoverFillColor="#dbdbdb"
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 mx-16">

        {/* LEFT CONTENT */}
        <motion.div
          ref={leftTextRef}
          style={{ opacity: textOpacity, y: textY }}
          className="flex flex-col justify-center items-start"
        >
          <h2 className="text-[24px] xl:text-[40px] font-urban font-medium leading-[20px]  md:leading-[24px] xl:leading-[40px] mb-16 xl:mb-36">
            MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY
          </h2>

          <p className="text-gray-700 font-inter text-[12px] xl:text-[16px] leading-[156%] max-w-md">
            Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
            contemporary architecture, environment-friendly designs, timely delivery, after-sales service and return
            on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering
            finest apartments, flats, townhouses and luxury villas that match the requirements of customers with the
            unique signature of a futuristic brand.
          </p>
        </motion.div>

        {/* MAIN IMAGE WITH SCROLL ZOOM */}
        <div
          ref={ref}
          className="
            relative 
            max-w-[520px] 
            mt-0
            h-[600px]
            xl:h-[800px]
            overflow-visible
            z-10
            will-change-transform
          "
        >
          <motion.div style={{ scale }} className="origin-[0.1_0] -translate-x-18 w-full h-full">
            <Image
              src="/images/home/b.png"
              alt="Bhavana"
              width={900}
              height={900}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          ref={rightTextRef}
          style={{ opacity: textOpacity, y: textY }}
          className="relative w-full right-20 flex flex-col justify-center items-start py-0 text-left"
        >
          <h3 className="text-[20px] xl:text-[32px] font-urban font-semibold py-2 leading-[20px] xl:leading-[32px] -mt-30 xl:-mt-80">
            WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
          </h3>

          <h1 className="text-[76px] xl:text-[122px] font-urban py-10 font-medium leading-[40px]">
            BHAVANA
          </h1>

          {/* SMALL BOTTOM-RIGHT IMAGE */}
          {/* <div className="absolute bottom-0 right-0 md:right-[-40px] md:bottom-[60px] w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/home/thumb.png"
              alt="Bhavana small"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div> */}
          <div
            className="relative z-10 bottom-0 right-0 md:right-[-280px] md:bottom-[-200px] 
             w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg 
             cursor-pointer group"
            onClick={() => setOpenVideo(true)}
          >
            <Image
              src="/images/home/thumb.png"
              alt="Video Thumbnail"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-3xl z-50"
              onClick={() => setOpenVideo(false)}
            >
              ×
            </button>

            {/* YouTube Embed */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/kCZ9iKlA3p4?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}


    </section>
  );
}
