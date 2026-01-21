"use client";
import Image from "next/image";
export default function EnquireNowButton({ onClick, className = "" }) {
  return (
    <>
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-white  font-urban text-[12px] font-medium  hover:scale-[1.03] cursor-pointer transition ${className}`}
    >
      <Image
        src="/images/enquire.svg"
        alt="Arrow"
        width={20}
        height={20}
        className=""
      />
      <span className="flex items-center gap-[1px] w-full">
        ENQUIRE
        <span className="flex bg-[#FF0000] w-[32px] h-[32px] items-center rounded-full justify-center text-white font-bold">
          <p>NOW</p>
        </span>
      </span>
    </button>

    
    </>
  );
}
