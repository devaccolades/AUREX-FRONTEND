"use client";
import Image from "next/image";
import React from "react";

export default function ChairmanMessage() {
  return (
    <div className="py-6  mb-5">
      <section className="container flex flex-col md:flex-row justify-between rounded-[10px] overflow-hidden border border-gray-200 ">

        {/* LEFT SIDE – White Content Box */}
        <div className="relative  md:w-[59%] lg:w-[60%] p-2 md:p-4 lg:p-4 xl:p-8 ">
          
          {/* Text Content */}
          <p className="font-poppins text-[12px] md:text-[14px] lg:text-[16px] mb-1 xl:mb-2">
            <span className="text-[#006A54]">#Chairman's</span>{" "}
            <span className="text-gray-500">Message</span>
          </p>

          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5">
            BUILDING MORE THAN <br className="hidden sm:block" />
            STRUCTURES — ADORNING LIVES
          </h2>

          <div className="text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]">
            <p className="text-black mb-2 xl:mb-4">
              At Aurex Builders, we believe in building more than structures — we build dreams,
              trust, and lasting relationships. Our vision, "Adorning Lives," reflects our passion
              to create spaces that inspire and enrich the communities we serve.
            </p>

            <p className="text-black mb-2 xl:mb-4">
              Every project we undertake carries a promise of quality, integrity, and innovation.
              Guided by these values, we continue to craft landmarks that stand the test of time
              and touch lives in meaningful ways.
            </p>

            <p className="text-black mb-2 xl:mb-4">
              Our journey is driven by people — our clients, our team, and our partners — whose
              trust fuels our commitment to excellence. Together, we aim to shape a future where
              every Aurex creation becomes a symbol of beauty, purpose, and pride.
            </p>
          </div>

          {/* NAME BLOCK */}
          <div className="mt-2 xl:mt-4">
            <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">AJITH POOLORTH –</h4>
            <p className="font-urban font-bold text-[14px] lg:text-[16px] leading-[24px]">
              Chairman, Aurex Builders
            </p>
          </div>

          {/* SIGNATURE (POSITIONED EXACTLY LIKE IMAGE) */}
          <div className=" absolute bottom-4 md:bottom-6 right-6 lg:-right-10 w-[78px] md:w-[80px] lg:w-[90px] xl:w-[140px]">
            <Image
              src="/images/home/signature.png"
              alt="signature"
              width={200}
              height={100}
              className="rotate-[-8deg] opacity-999"
            />
          </div>

        </div>

        {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}
        
        {/* <div className="mt-6 md:mt-0 relative h-full  md:h-auto lg:h-[464px] overflow-hidden"> */}
        <div className="mt-6 md:mt-0 relative h-[420px] md:h-auto lg:h-[464px] overflow-hidden">

          {/* Tear effect */}
          <div className="absolute left-25  md:left-0 -top-56 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
            <Image
              src="/images/home/Vector.svg"
              alt="Tear Effect"
              fill
              className="object-fill md:object-cover rotate-90 md:rotate-180 scale-x-[-1] md:scale-x-[1]"
            />
          </div>

          {/* Chairman Image */}
          <div className="relative md:w-fit h-full">
            <Image
              src="/images/home/chairman.png"
              alt="Chairman Photo"
              width={100}
              height={100}
              className="object-cover object-top grayscale w-full h-[420px] md:w-[333px] md:h-full"
            />
          </div>
        </div>

      </section>
    </div>
  );
}




// "use client";
// import Image from "next/image";
// import React from "react";

// export default function ChairmanMessage() {
//   return (
//     // Outer container with padding
//     <div className="py-6 px-4 md:px-8 lg:px-16">
//       {/* Main section container: flex layout, rounded corners, border */}
//       <section className="flex flex-col md:flex-row justify-between rounded-3xl overflow-hidden border border-gray-200">

//         {/* LEFT CONTENT CONTAINER */}
//         {/* Takes full width on mobile, max-w-[65%] on medium screens, padding adjusted for responsiveness */}
//         <div className="flex flex-row justify-between p-6 md:p-8 md:max-w-[65%] w-full">
//           <div>
//             <p className="font-poppins font-normal mb-2">
//               <span className="text-[#006A54] font-poppins">#Chairman's</span>{" "}
//               <span className="text-gray-500 font-poppins">Message</span>
//             </p>

//             <h2 className="text-xl md:text-[32px] lg:text-[36px] font-bold font-urban leading-normal md:leading-[36px] mb-6">
//               BUILDING MORE THAN <br className="hidden md:inline" /> STRUCTURES — ADORNING LIVES
//             </h2>

//             {/* Paragraphs with responsive text size */}
//             <p className="text-gray-600 mb-4 text-sm leading-normal">
//               At Aurex Builders, we believe in building more than structures — we build dreams,
//               trust, and lasting relationships. Our vision, "Adorning Lives," reflects our passion to
//               create spaces that inspire and enrich the communities we serve.
//             </p>
//             <p className="text-gray-600 mb-4 text-sm leading-normal">
//               Every project we undertake carries a promise of quality, integrity, and innovation.
//               Guided by these values, we continue to craft landmarks that stand the test of time
//               and touch lives in meaningful ways.
//             </p>
//             <p className="text-gray-600 mb-6 text-sm leading-normal">
//               Our journey is driven by people — our clients, our team, and our partners — whose
//               trust fuels our commitment to excellence. Together, we aim to shape a future where
//               every Aurex creation becomes a symbol of beauty, purpose, and pride.
//             </p>

//             <h4 className="font-bold">AJITH POOLORTH –</h4>
//             <p className="text-gray-600">Chairman, Aurex Builders</p>
//           </div>

//           {/* SIGNATURE - Hidden on small screens, shown on medium and up */}
//           <div className="hidden md:block mt-auto ml-4">
//             <Image
//               src="/images/home/signature.png"
//               alt="signature"
//               width={200}
//               height={100}
//               className="rotate-[-10deg] opacity-100"
//             />
//           </div>
//         </div>

//         {/* RIGHT IMAGE WITH TEAR EFFECT CONTAINER */}
//         {/* Takes full width on mobile, w-[35%] on medium and up */}
//         <div className="relative w-full md:w-[35%] min-h-[300px] md:min-h-0">
//           {/* Tear Overlay */}
//           {/* Positioning adjusted for better alignment */}
//           <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 z-20">
//             <Image
//               src="/images/home/Vector.svg"
//               alt="Tear Effect"
//               fill
//               className="object-cover object-left rotate-180"
//             />
//           </div>

//           {/* Chairman Photo - positioned absolutely to cover the right side */}
//           <Image
//             src="/images/home/chairman.png"
//             alt="Chairman Photo"
//             // Layout fill is more appropriate for responsive absolute positioning
//             fill
//             className="absolute top-0 left-0 w-full h-full object-cover grayscale z-10"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }
