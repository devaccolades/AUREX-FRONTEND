"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const residentialProjects = [
    { name: "Aurex Liard", href: "/projects/aurex-liard" },
    { name: "Aurex Cascade City", href: "/projects/aurex-cascade-city" },
  ];

  const commercialProjects = [
    { name: "Aurum Complex", href: "/projects/aurum-complex" },
    { name: "Aurum Galleria", href: "/projects/aurum-galleria" },
  ];

  const contractProjects = [
    { name: "Vattekat Arcade", href: "/projects/vattekat-arcade" },
    { name: "Shajihan Arcade", href: "/projects/shajikhan-arcade" },
    { name: "N.S.S. Building", href: "/projects/nss-building" },
    { name: "Royal Enclave", href: "/projects/royal-enclave" },
    { name: "Varnaz", href: "/projects/varnaz" },
    { name: "Adithya Arcade", href: "/projects/adithya-arcade" },
    { name: "Aravind Arcade", href: "/projects/aravind-arcade" },
    { name: "Yahvi", href: "/projects/yahvi" },
  ];

  return (
    <footer className="md:hidden relative bg-[#052D23] text-white px-2 py-10 overflow-hidden">
      {/* Background Logo */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/images/footer/AUREX.svg')",
          backgroundSize: "280px",
        }}
      />

      <div className="relative flex flex-col gap-10">
        {/* LOGO + ADDRESS */}
        <div className="space-y-4">
          <Image
            src="/images/footer/icon1.svg"
            alt="Aurex Builders"
            width={48}
            height={48}
          />

          <div className="max-w-xs">
            <h3 className="text-[15px] font-urban leading-tight">
              Aurex Builders Pvt Ltd
            </h3>
            <p className="text-[12px] leading-[18px] opacity-90 mt-1">
              Aurum Complex, Patturaikkal, Thrissur, Kerala - 680 020
            </p>
          </div>

          {/* MAP */}
          <div className="flex items-center gap-2 text-[12px]">
            <Image src="/images/icons/g-map.svg" width={14} height={14} alt="map" />
            <span>Google map link</span>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <Image src="/images/icons/mail.svg" width={16} height={16} alt="mail" />
            <p className="text-[12px] font-bold">
              SALES@AUREXBUILDERS.COM
            </p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3">
            <Image src="/images/icons/call.svg" width={16} height={16} alt="call" />
            <p className="text-[12px] font-bold">
              +91 98465 07474 / 98460 07474
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-2">
            {["linked.svg", "icon4.svg", "icon3.svg", "icon2.svg"].map(
              (icon, i) => (
                <Image
                  key={i}
                  src={`/images/footer/${icon}`}
                  alt="social"
                  width={18}
                  height={18}
                />
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-white">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-row gap-4 text-[12px]  text-white">
          {/* Residential */}
          <div className="max-w-[82px]">
            <span className="bg-white text-black text-xs px-2 py-1 rounded-full inline-block mb-3">
              Residential
            </span>
            <ul className="space-y-1">
              {residentialProjects.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="">
            <span className="bg-white text-black text-xs px-4 py-1 rounded-full inline-block mb-3">
              Commercial
            </span>
            <ul className="space-y-1">
              {commercialProjects.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contracts */}
          <div className="max-w-[97px]">
            <span className="bg-white text-black text-xs px-4 py-1 rounded-full inline-block mb-3">
              Contracts
            </span>
            <ul className="space-y-1">
              {contractProjects.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-[16px] leading-[24px] font-semibold mb-3 ">Support</h3>
          <ul className="space-y-2 text-[10px] leading-[100%] text-white flex flex-row gap-3">
            <li><Link href="#">Banking Partners</Link></li>
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Privacy & Policy</Link></li>
          </ul>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 border-t border-white/10 text-center text-[11px] text-white">
          <p>
            Copyright © 2025{" "}
            <span className="text-[#C19A5D]">Aurex Builders</span>
            All Rights Reserved
          </p>
          <p className="mt-1">
            Design & Developed By{" "}
            <span className="text-[#C19A5D]">Accolades Integrated</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
