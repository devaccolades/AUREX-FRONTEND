"use client";

import Image from "next/image";

export default function FixedCTAButton({
    text = "Book a free<br />consultation",
    arrowSrc = "/images/home/button-arrow.svg",
    onClick,
}) {
    return (
        <div className="absolute  z-[999] md:hidden block">
            <button
                onClick={onClick}
                className="relative w-26 h-26 rounded-full border border-black 
                   flex flex-col justify-center items-center 
                   text-center text-[10px] font-medium uppercase 
                   tracking-wide shadow-lg"
            >
                {/* TEXT */}
                {text.split("<br />").map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < text.split("<br />").length - 1 && <br />}
                    </span>
                ))}

                {/* ARROW */}
                <div className="absolute bottom-13 right-21">
                    <Image src={arrowSrc} alt="Arrow" width={16} height={16} />
                </div>
            </button>
        </div>
    );
}
