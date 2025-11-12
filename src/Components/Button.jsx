"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MagneticButton({
  text = "Book a free consultation",
  arrowSrc = "/images/home/button-arrow.svg",
  onClick,
  parentSelector = "why-section", // ID or class of parent container
}) {
  const [pos, setPos] = useState({ x: null, y: null }); // null means “not moved yet”
  const BUTTON_WIDTH = 192; // Tailwind w-48 = 192px
  const BUTTON_HEIGHT = 192;

  useEffect(() => {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      setPos({ x: offsetX, y: offsetY });
    };

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, [parentSelector]);

  // Don’t render until mouse moves once
  if (pos.x === null || pos.y === null) return null;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        translateX: `-${BUTTON_WIDTH / 2}px`,
        translateY: `-${BUTTON_HEIGHT / 2}px`,
      }}
      className="z-20 pointer-events-none"
    >
      <button
        onClick={onClick}
        className="relative w-38 h-38 rounded-full border border-black flex flex-col justify-center items-center text-center text-[12px] font-medium uppercase tracking-wide  shadow-md pointer-events-auto"
      >
        {text.split("<br />").map((line, i) => (
          <span key={i}>
            {line}
            {i < text.split("<br />").length - 1 && <br />}
          </span>
        ))}
        <div className="absolute left-2 bottom-18">
          <Image src={arrowSrc} alt="Arrow" width={30} height={30} />
        </div>
      </button>
    </motion.div>
  );
}
