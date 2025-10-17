"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <footer className="bg-[#002B24] text-white py-12 px-6 md:px-12 lg:px-20"
    <footer className="relative bg-[#002B24] text-white py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
  {/* background layer */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-15"
    style={{ backgroundImage: "url('/images/footer/AUREX.svg')",
        backgroundSize: "1000px 600px",
     }}
  ></div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_2.5fr_1fr] gap-6 md:gap-10 lg:gap-12">
        {/* --- Left Section --- */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/footer/icon1.svg" // replace with your logo
              alt="Aurex Builders"
              width={50}
              height={50}
              className="object-contain"
            />
            {/* <div>
              <h2 className="text-lg font-semibold tracking-wide">AUREX</h2>
              <p className="text-[10px] uppercase tracking-widest text-gray-300">
                Builders
              </p>
            </div> */}
          </div>

          <p className="text-sm text-gray-300 mt-4 leading-relaxed max-w-sm">
            Aurex builders ensures to fulfill the dream of our customers by gifting
            them with quality home spaces, contemporary architecture,
            environment-friendly designs, timely delivery, after-sales service
            and return on investment.
          </p>

          {/* Social Icons Placeholder */}
          <div className="flex space-x-3 mt-5">
            <div className="w-5 h-5 bg-gray-400 rounded">
                <Image
              src="/images/footer/linked.svg" // replace with your logo
              alt="Aurex Builders"
              width={50}
              height={50}
              className="object-contain"
            />
            </div>
            <div className="w-5 h-5 bg-gray-400 rounded">
                 <Image
              src="/images/footer/icon4.svg" // replace with your logo
              alt="Aurex Builders"
              width={50}
              height={50}
              className="object-contain"
            />
            </div>
            <div className="w-5 h-5 bg-gray-400 rounded">
                 <Image
              src="/images/footer/icon3.svg" // replace with your logo
              alt="Aurex Builders"
              width={50}
              height={50}
              className="object-contain"
            />
            </div>
            <div className="w-5 h-5 bg-gray-400 rounded">
                 <Image
              src="/images/footer/icon2.svg" // replace with your logo
              alt="Aurex Builders"
              width={50}
              height={50}
              className="object-contain"
            />
            </div>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-base font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Home",
              "Projects",
              "Services",
              "Gallery",
              "About Us",
              "Blog",
              "Contact Us",
              "Careers",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-[#C19A5D] transition">
                  {item}
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
              <li><Link href="#">Aurex Laird</Link></li>
              <li><Link href="#">Aurex Cascade City</Link></li>
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
              Commercial
            </span>
            <ul className="space-y-1">
              <li><Link href="#">Aurum Complex</Link></li>
              <li><Link href="#">Aurum Galleria</Link></li>
            </ul>
          </div>

          {/* Contracts */}
          <div>
            <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
              Contracts
            </span>
            <ul className="space-y-1">
              {[
                "Vattekat Arcade",
                "ShajiKhan Arcade",
                "N.S.S. Building",
                "Royal Enclave",
                "Varnaz",
                "Adithya Arcade",
                "Aravind Arcade",
                "Yahvi",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#C19A5D] transition">
                    {item}
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

      {/* --- Bottom Bar --- */}
      <div className=" mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
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
    </footer>
  );
}
