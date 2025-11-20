"use client";
import Image from "next/image";
import React from "react";

export default function ChairmanMessage() {
  return (
    <div className="py-6">
    <section className="containers  flex flex-col md:flex-row justify-between  rounded-3xl overflow-hidden border border-gray-200 ">
      {/* LEFT CONTENT */}
      <div className="flex flex-row justify-between p-8 md:p-6 max-w-[55%]">
        <div>
       <p className="font-poppins font-normal mb-2"><span className="text-[#006A54] font-poppins">#Chairman's</span> <span className="text-gray-500 font-poppins">Message</span></p>
        <h2 className="text-xl md:text-[36px] font-bold font-urban leading-[36px] mb-6">
          BUILDING MORE THAN <br /> STRUCTURES — ADORNING LIVES
        </h2>

        <p className="text-gray-600 mb-4 text-[14px] leading-[16px]">
          At Aurex Builders, we believe in building more than structures — we build dreams,
          trust, and lasting relationships. Our vision, "Adorning Lives," reflects our passion to
          create spaces that inspire and enrich the communities we serve.
        </p>
        <p className="text-gray-600 mb-4 text-[14px] leading-[16px]">
          Every project we undertake carries a promise of quality, integrity, and innovation.
          Guided by these values, we continue to craft landmarks that stand the test of time
          and touch lives in meaningful ways.
        </p>
        <p className="text-gray-600 mb-6 text-[14px] leading-[16px]">
          Our journey is driven by people — our clients, our team, and our partners — whose
          trust fuels our commitment to excellence. Together, we aim to shape a future where
          every Aurex creation becomes a symbol of beauty, purpose, and pride.
        </p>

        <h4 className="font-bold">AJITH POOLORTH –</h4>
        <p className="text-gray-600">Chairman, Aurex Builders</p>
        </div>

        {/* SIGNATURE */}
       <div className="mt-76 w-90 ">
          <Image
            src="/images/home/signature.png"
            alt="signature"
            width={200}
            height={100}
            className="rotate-[-10deg] opacity-160"
          />
        </div>
      </div>

       

      {/* RIGHT IMAGE WITH TEAR EFFECT */}
      <div className="relative w-full md:w-[30%] ">
        {/* Tear Overlay */}
        <div className="relative z-20 h-full w-24 ">
            <Image
              src="/images/home/Vector.svg"
              alt="Tear Effect"
              fill
              className="object-cover object-left rotate-180 -ml-10"
            />
        </div>

        <Image
          src="/images/home/chairman.png"
          alt="Chairman Photo"
          width={100}
          height={130}
          className=" absolute top-0 w-full h-full object-contain grayscale"
        />
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
