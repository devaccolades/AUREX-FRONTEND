
"use client";
import Image from "next/image";
import Link from "next/link";
import FooterMobile from "./FooterMobile";

export default function Footer() {
    // --- 🔗 Quick Links Data ---
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

    // --- 🏠 Residential Data ---
    const residentialProjects = [
        { name: "Aurex Liard", href: "/projects/aurex-liard" },
        { name: "Aurex Cascade City", href: "/projects/aurex-cascade-city" },
    ];

    // --- 🏢 Commercial Data ---
    const commercialProjects = [
        { name: "Aurum Complex", href: "/projects/aurum-complex" },
        { name: "Aurum Galleria", href: "/projects/aurum-galleria" },
    ];

    // --- 🧱 Contracts Data ---
    const contractProjects = [
        { name: "Vattekat Arcade", href: "/projects/vattekat-arcade" },
        { name: "ShajiKhan Arcade", href: "/projects/shajikhan-arcade" },
        { name: "N.S.S. Building", href: "/projects/nss-building" },
        { name: "Royal Enclave", href: "/projects/royal-enclave" },
        { name: "Varnaz", href: "/projects/varnaz" },
        { name: "Adithya Arcade", href: "/projects/adithya-arcade" },
        { name: "Aravind Arcade", href: "/projects/aravind-arcade" },
        { name: "Yahvi", href: "/projects/yahvi" },
    ];

    return (
        <footer className="relative bg-[#000000] text-white py-8 md:py-12 px-2 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            {/* background layer */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                style={{
                    backgroundImage: "url('/images/footer/AUREX.svg')",
                    backgroundSize: "1000px 600px",
                }}
            ></div>
     
     <div className="hidden md:block">
            {/* <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_3.5fr_0.3fr] xl:grid-cols-[1fr_1fr_3.5fr_1fr] gap-6 md:gap-10 lg:gap-12"> */}
              <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] xl:grid-cols-[20%_80%] gap-12 lg:gap-2">
                {/* --- Left Section --- */}
                <div className="space-y-2 flex md:flex-row lg:flex-col justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/footer/icon1.svg"
                            alt="Aurex Builders"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>

                    <div className="max-w-[200px]">
                        <h3 className="text-[16px] lg:text-[20px] leading-[20px] font-urban ">Aurex Builders Pvt Ltd</h3>
                        <p className="text-[13px] lg:text-sm text-white mt-0 leading-[18px] ">
                            Aurum Complex, Patturaikkal, Thrissur, Kerala - 680 020
                        </p>
                    </div>
                    <div className=" text-white ">
                        <Image
                            src="/images/icons/g-map.svg"
                            alt="Phone Icon"
                            width={15}
                            height={15}
                            className="inline-block mr-2"
                        />
                        <span className="text-[12px]  leading-[16px]">
                            Google map link
                        </span>
                    </div>
                   
                   <div>
                    {/* EMAIL */}
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5  rounded">
                            <Image src="/images/icons/mail.svg" width={16} height={16} alt="call icon" />
                        </div> {/* ICON placeholder */}
                        <p className="font-bold font-urban text-[12px] leading-[16px]">SALES@AUREXBUILDERS.COM</p>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5  rounded">
                            <Image src="/images/icons/call.svg" width={16} height={16} alt="call icon" />
                        </div> {/* ICON placeholder */}
                        <p className="font-bold font-urban text-[12px] leading-[16px]">+91 98465 07474 / 98460 07474</p>
                    </div>
                     </div>


                    <div className="hidden lg:flex space-x-3 mt-5">
                        {["linked.svg", "icon4.svg", "icon3.svg", "icon2.svg"].map((icon, i) => (
                            <div key={i} className="w-5 h-5 rounded">
                                <Image
                                    src={`/images/footer/${icon}`}
                                    alt="Social Icon"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

       <div className="flex flex-row lg:grid  lg:grid-cols-[1fr_3.5fr_0.3fr] xl:grid-cols-[1fr_3.5fr_1fr] gap-6 md:gap-10 lg:gap-12">
                {/* --- Quick Links --- */}
                <div>
                    <h3 className="text-base font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {quickLinks.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:text-[#C19A5D] transition">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- Residential / Commercial / Contracts --- */}
                <div className="grid grid-cols-3 text-sm text-gray-300 space-y-6">
                    {/* Residential */}
                    <div>
                        <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
                            Residential
                        </span>
                        <ul className="space-y-1">
                            {residentialProjects.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[#C19A5D] transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Commercial */}
                    <div>
                        <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
                            Commercial
                        </span>
                        <ul className="space-y-1">
                            {commercialProjects.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[#C19A5D] transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contracts */}
                    <div>
                        <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
                            Contracts
                        </span>
                        <ul className="space-y-1">
                            {contractProjects.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[#C19A5D] transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- Support --- */}
                <div>
                    <h3 className="text-base font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="#">Banking Partners</Link></li>
                        <li><Link href="#">Terms and Conditions</Link></li>
                        <li><Link href="#">Privacy & Policy</Link></li>
                    </ul>
                </div>

                </div>

            </div>

            {/* --- Bottom Bar --- */}
            <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                <p>
                    Copyright © 2025{" "}
                    <span className="text-[#C19A5D]">Aurex Builders</span>. All Rights Reserved
                </p>
                <p className="mt-2 md:mt-0">
                    Design And Developed By{" "}
                    <Link href="#" className="text-[#C19A5D] hover:underline">
                        Accolades Integrated
                    </Link>
                </p>
            </div>
            </div>
            <FooterMobile />
        </footer>
    );
}
