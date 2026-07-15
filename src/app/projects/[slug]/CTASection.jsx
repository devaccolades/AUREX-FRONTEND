"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-100  py-10 lg:py-16">
      {/* Background Pattern */}
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0 100%, transparent 60px, rgba(22,101,52,.08) 61px, transparent 62px),
            repeating-radial-gradient(
              circle at 0 100%,
              transparent 0px,
              transparent 18px,
              rgba(22,101,52,.08) 20px,
              transparent 22px
            )
          `,
          backgroundSize: "420px 420px",
        }}
      /> */}

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />

      <div className="containers relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-4xl text-[20px] md:text-[28px] lg:text-[36px] font-bold leading-tight font-urban text-black ">
            Ready to Find Your Perfect Home?
          </h2>

          <p className="px-3 mx-auto mt-2 max-w-2xl text-[13px] md:text-[14px] lg:text-[16px] leading-[156%] text-gray-700 font-inter">
            Talk to the best builders in Thrissur. Book a free consultation with our team and 
            explore premium apartments in Thrissur built for the life you deserve.
          </p>

          <div className="mt-2 flex flex-col items-center justify-center gap-4 flex-row">
            <Link
              href="https://wa.me/919846507474"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-black  px-4 py-2 text-[14px] md:text-[16px] font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Whatsapp Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="tel:+919846507474"
              className="group inline-flex items-center gap-3 rounded-lg border border-black  px-4 py-2 text-[14px] md:text-[16px] font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Call Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}