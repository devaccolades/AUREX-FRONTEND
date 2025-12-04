"use client";
import Image from "next/image";
export default function EnquireNowButton({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2  text-white px-5 py-2 rounded-full font-urban text-[12px] leading-[16px] font-medium  hover:scale-[1.03] transition ${className}`}
    >
     <Image
        src="/images/enquire.svg"
        alt="Arrow"
        width={20}
        height={20}
        className=""/>
      <span className="flex items-center gap-1">
    ENQUIRE
    <span className="flex bg-[#FF0000] w-8 md:w-12 h-8 md:h-12 rounded-full items-center justify-center text-white font-bold">
      NOW
    </span>
  </span>
    </button>
  );
}
