"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      <div
        className="
          w-full h-40 
          flex items-center justify-between 
          px-6
          bg-[linear-gradient(to_bottom,_#0B3A79_0%,_#0B3A79_40%,_#022958_70%,_rgba(255,255,255,0)_100%)]
        "
      >
        {/* LEFT AREA */}
        <div className="w-10 h-10 flex items-center justify-start">
          <Image src="/images/nav.svg" width={60} height={60} alt="menu" />
        </div>

        {/* CENTER LOGO */}
        <div className="w-32 flex items-center justify-center">
          <Image src="/images/aurex-logo.svg" width={60} height={60} alt="logo" />
        </div>

        {/* RIGHT PHONE ICON */}
        <div className="w-10 h-10 flex items-center justify-end">
          <Image src="/images/phone.svg" width={20} height={20} alt="phone" />
        </div>
      </div>
    </header>
  );
}
