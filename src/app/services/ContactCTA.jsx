import React from "react";

export default function ContactCtaSection() {
  return (
   <section className="bg-gradient-to-b from-[#fbfaf9] via-[#eeddc3] to-[#ffffff] py-8 md:py-10 lg:py-16">
      <div className="container  text-center">
        
        {/* Heading */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[20px] md:leading-[32px] lg:leading-[40px] font-semibold font-urban  tracking-wide mb-6">
          Ready to Begin Your  <br />  Journey with Aurex?
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-1 md:gap-4 justify-center items-center">
          
          {/* Email */}
          <a
            href="mailto:sales@aurexbuilders.com"
            className="border border-black uppercase rounded-[24px] px-6 py-2 text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] font-urban font-extrabold tracking-wide hover:bg-black hover:text-white transition"
          >
            sales@aurexbuilders.com
          </a>

          {/* Phone */}
          <a
            href="tel:+919846507474"
            className="border border-black rounded-[24px] px-6 py-2 text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] font-urban font-extrabold tracking-wide hover:bg-black hover:text-white transition"
          >
            +91 98465 07474
          </a>

        </div>
      </div>
    </section>
  );
}
