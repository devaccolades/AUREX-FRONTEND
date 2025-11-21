// import Squares from "@/Components/Squares";
// import Image from "next/image";


// export default function BrandAmbassador() {
//   return (
//     <section className="relative w-full bg-white text-black pt-10 overflow-hidden">
//         <div className="absolute inset-0 ">
//         <Squares
//           speed={0.5}
//           squareSize={36}
//           direction="diagonal" // up, down, left, right, diagonal
//           borderColor="#dbdbdb"
//           hoverFillColor="#dbdbdb"
//         ></Squares>
//       </div>
//       <div className=" relative  grid grid-cols-1 md:grid-cols-3 gap-0 mx-16">
//         {/* Left Content */}
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-[32px] md:text-[40px] font-urban font-medium leading-[40px] mb-36">
//             MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY
//           </h2>

//           <p className="text-gray-700 font-inter text-[16px] leading-[156%] max-w-md">
//             Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
//             contemporary architecture, environment‑friendly designs, timely delivery, after‑sales service and return
//             on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering
//             finest apartments, flats, townhouses and luxury villas that match the requirements of customers with the
//             unique signature of a futuristic brand.
//           </p>
//         </div>

//         {/* Main Image (Scroll Zoom) */}
// <div
//   className="relative max-w-[420px] mt-46 will-change-transform"
//   id="zoomImage"
// >
//   <Image
//     src="/images/home/b.png"
//     alt="Bhavana"
//     width={900}
//     height={900}
//     className="w-full object-contain"
//   />
// </div>


//         {/* Right Section */}
//         <div className="relative w-full right-20  flex flex-col justify-center items-start py-6 text-center md:text-left">
//           <h3 className="text-[20px] md:text-[32px] font-urban font-semibold py-2 leading-[32px] -mt-80">
//             WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
//           </h3>

//           <h1 className="text-[52px] md:text-[128px] font-urban py-10 font-medium leading-[40px]">
//             BHAVANA
//           </h1>

          

//           {/* Small bottom‑right image */}
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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandAmbassador() {
  const ref = useRef(null);

  // Scroll tracking for zoom animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale from normal → zoomed
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.3]);

  return (
    <section className="relative w-full bg-white text-black pt-10 overflow-hidden">

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
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-[32px] md:text-[40px] font-urban font-medium leading-[40px] mb-36">
            MANIFESTING YOUR <br /> DREAM INTO A <br /> MAGNIFICENT REALITY
          </h2>

          <p className="text-gray-700 font-inter text-[16px] leading-[156%] max-w-md">
            Aurex builders ensures to fulfill the dream of our customers by gifting them with quality home spaces,
            contemporary architecture, environment-friendly designs, timely delivery, after-sales service and return
            on investment. Aurex builders brings you a new world of happiness, security and prosperity, delivering
            finest apartments, flats, townhouses and luxury villas that match the requirements of customers with the
            unique signature of a futuristic brand.
          </p>
        </div>

        {/* MAIN IMAGE WITH SCROLL ZOOM */}
        <div
          ref={ref}
          className="
            relative 
            max-w-[520px] 
            mt-0
            h-[800px]
            overflow-hidden 
             
            -top-0
            will-change-transform
          "
        >
          <motion.div style={{ scale }} className="origin-top w-full h-full">
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
        <div className="relative w-full right-20 flex flex-col justify-center items-start py-6 text-center md:text-left">
          <h3 className="text-[20px] md:text-[32px] font-urban font-semibold py-2 leading-[32px] -mt-80">
            WE ARE PLEASED TO <br /> INTRODUCE OUR <br /> BRAND AMBASSADOR.
          </h3>

          <h1 className="text-[52px] md:text-[128px] font-urban py-10 font-medium leading-[40px]">
            BHAVANA
          </h1>

          {/* SMALL BOTTOM-RIGHT IMAGE */}
          <div className="absolute bottom-0 right-0 md:right-[-40px] md:bottom-[60px] w-[140px] h-[90px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/home/thumb.png"
              alt="Bhavana small"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
