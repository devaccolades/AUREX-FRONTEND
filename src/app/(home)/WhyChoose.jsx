// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import bg from "../../../public/images/home/why-bg.png";
// import { Magnet } from "lucide-react";
// import MagneticButton from "@/Components/Button";

// export default function WhyChooseUs() {
//     return (
//         <section id="why-section"  className="containers relative w-full bg-white text-black py-1 px-6 md:px-12 lg:px-20 overflow-hidden">
//             {/* Elephant background */}
//             <div className="absolute left-[10px] top-0 h-full w-1/4 opacity-20 items-start">
//                 <Image
//                     src={bg} // 🐘 replace with your elephant image path
//                     alt="Elephant background"
                    
//                     fill
//                     className="object-contain object-left scale-x-[-1] "
//                 />
//             </div>

//             <div  className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 {/* Left Section */}
//                 <div className="space-y-8 max-w-md">
//                     <h2 className="text-32px md:text-[40px] lg:text-[64px] leading-[32px] md:leading-[40px] lg:leading-[64px] font-urban font-medium ">
//                         WHY <br /> CHOOSE US
//                     </h2>
//                     <p className="text-gray-700 w-[400px] pt-20  font-normal text-[13px] lg:text-[14px] leading-[18px]">
//                         At Aurex Builders, we don’t just build homes — we craft experiences
//                         that last a lifetime. Our passion for precision, design excellence,
//                         and on-time delivery ensures every project stands as a landmark of
//                         trust and quality.
//                     </p>

//                     {/* Circle Button */}
//                     <MagneticButton
//                         text="Book a free <br /> consultation"
//                         arrowSrc="/images/home/button-arrow.svg"
//                         parentSelector="#why-section"
//                         onClick={() => console.log("Button clicked!")}
//                     />
//                 </div>

//                 {/* Right Section */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     <div>
//                         <h3 className="font-semibold text-lg mb-2">UNMATCHED QUALITY</h3>
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                             Aurex Builders upholds the highest standards of construction,
//                             ensuring every project reflects superior craftsmanship and lasting
//                             value.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="font-semibold text-lg mb-2">TIMELY DELIVERY</h3>
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                             We pride ourselves on completing projects on schedule without
//                             compromising on quality, so you can move into your dream home
//                             without delays.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="font-semibold text-lg mb-2">
//                             MODERN DESIGN & INNOVATION
//                         </h3>
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                             Every property is designed with meticulous attention to detail,
//                             combining modern aesthetics with innovative, sustainable
//                             construction methods.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="font-semibold text-lg mb-2">
//                             CUSTOMER-CENTRIC APPROACH
//                         </h3>
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                             Our clients are at the heart of everything we do. From choosing
//                             trusted partners to providing exceptional after-sales support, we
//                             prioritize your satisfaction every step of the way.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";
import Image from "next/image";
import MagneticButton from "@/Components/Button";
import bg from "../../../public/images/home/why-bg.png";

export default function WhyChooseUs() {
  const Box = ({ title, text, className = "" }) => (
    <div className={`relative p-8 ${className}`}>
      {/* corner highlights */}
      <span className="absolute top-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute top-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
    </div>
  );

  return (
    <section
      id="why-section"
      className=" border relative w-full bg-white text-black py-1 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Elephant background */}
      <div className="absolute border-l-2  left-[10px] top-0 h-full w-1/4 opacity-20">
        <Image
          src={bg}
          alt="Elephant background"
          fill
          className="object-contain object-left border-r-2 border-bg-gray-600 scale-x-[-1]"
        />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8 max-w-md">
          <h2 className="text-[40px] lg:text-[64px] leading-[1.1] font-urban font-medium">
            WHY <br /> CHOOSE US
          </h2>

          <p className="text-gray-700 w-[400px] pt-20 font-normal text-[13px] lg:text-[14px] leading-[18px]">
            At Aurex Builders, we don’t just build homes — we craft experiences
            that last a lifetime. Our passion for precision, design excellence,
            and on-time delivery ensures every project stands as a landmark of
            trust and quality.
          </p>

          <MagneticButton 
            text="Book a free <br /> consultation"
            arrowSrc="/images/home/button-arrow.svg"
            parentSelector="#why-section"
            onClick={() => console.log("Button clicked!")}
          />
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 border border-gray-300">
          <Box
            title="UNMATCHED QUALITY"
            text="Aurex Builders upholds the highest standards of construction, ensuring every project reflects superior craftsmanship and lasting value."
            className="border-b border-r border-gray-300"
          />
          <Box
            title="TIMELY DELIVERY"
            text="We pride ourselves on completing projects on schedule without compromising on quality, so you can move into your dream home without delays."
            className="border-b border-gray-300"
          />
          <Box
            title="MODERN DESIGN & INNOVATION"
            text="Every property is designed with meticulous attention to detail, combining modern aesthetics with innovative, sustainable construction methods."
            className="border-r border-gray-300"
          />
          <Box
            title="CUSTOMER-CENTRIC APPROACH"
            text="Our clients are at the heart of everything we do. From choosing trusted partners to providing exceptional after-sales support, we prioritize your satisfaction every step of the way."
          />
        </div>
      </div>
    </section>
  );
}
