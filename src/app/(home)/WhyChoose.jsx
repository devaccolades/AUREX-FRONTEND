
"use client";
import Image from "next/image";
import MagneticButton from "@/Components/Button";
import bg from "../../../public/images/home/why-bg.png";

export default function WhyChooseUs() {
  const Box = ({ title, text, className = "" }) => (
    <div className={`relative p-3 lg:p-8 ${className}`}>
      {/* corner highlights */}
      <span className="absolute top-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute top-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute top-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 left-0 w-[2px] h-6 bg-gray-200"></span>

      <span className="absolute bottom-0 right-0 w-8 h-[2px] bg-gray-200"></span>
      <span className="absolute bottom-0 right-0 w-[2px] h-6 bg-gray-200"></span>

      <h3 className="font-semibold text-[13px] md:text-[18px] lg:text-[24px] leading-[12px] md:leading-[18px] lg:leading-[24px] mb-0 max-w-[220px] h-[50px] md:h-[70px] lg:h-[100px]">{title}</h3>
      <p className="text-gray-700 text-[12px] md:text-[12px] lg:text-[14px] leading-[18px] py-2 lg:py-8 ">{text}</p>
    </div>
  );

  return (
    <div id="why-section" className="border">
      <section  
        className="w-[90%] lg:w-[80%] m-auto border  relative  bg-white text-black py-0 px-0  overflow-hidden"
      >

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8 max-w-md ">
            {/* Elephant background */}
            <div className="absolute  left-[2px] md:left-[10px] -top-[300px]  md:top-0 h-full w-full md:w-1/4 opacity-20">
              <Image
                src={bg}
                alt="Elephant background"
                fill
                className="object-contain md:object-cover object-left  scale-x-[-1]"
              />
            </div>
            <div className="px-4 ">
            <h2 className="text-[40px] lg:text-[64px] leading-[1.1] font-urban font-medium">
              WHY <br /> CHOOSE US
            </h2>

            <p className="text-gray-700 w-[280px] lg:w-[400px]  pt-30 font-normal text-[13px] lg:text-[14px] leading-[18px]">
              At Aurex Builders, we don’t just build homes — we craft experiences
              that last a lifetime. Our passion for precision, design excellence,
              and on-time delivery ensures every project stands as a landmark of
              trust and quality.
            </p>
            </div>

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
              className="border-b border-r border-gray-300 "
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
    </div>
  );
}
