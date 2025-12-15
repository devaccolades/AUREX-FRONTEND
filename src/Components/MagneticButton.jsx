// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function MagneticButton({
//   text = "Book a free consultation",
//   arrowSrc = "/images/home/button-arrow.svg",
//   onClick,
//   parentSelector = "why-section", // ID or class of parent container
// }) {
//   const [pos, setPos] = useState({ x: null, y: null }); // null means “not moved yet”
//   const BUTTON_WIDTH = 192; // Tailwind w-48 = 192px
//   const BUTTON_HEIGHT = 192;

//   useEffect(() => {
//     const parent = document.querySelector(parentSelector);
//     if (!parent) return;

//     const handleMouseMove = (e) => {
//       const rect = parent.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;
//       setPos({ x: offsetX, y: offsetY });
//     };

//     parent.addEventListener("mousemove", handleMouseMove);
//     return () => parent.removeEventListener("mousemove", handleMouseMove);
//   }, [parentSelector]);

//   // Don’t render until mouse moves once
//   if (pos.x === null || pos.y === null) return null;

//   return (
//     <motion.div
//       style={{
//         position: "absolute",
//         left: pos.x,
//         top: pos.y,
//         translateX: `-${BUTTON_WIDTH / 2}px`,
//         translateY: `-${BUTTON_HEIGHT / 2}px`,
//       }}
//       className="z-20 pointer-events-none"
//     >
//       <button
//         onClick={onClick}
//         className="relative w-38 h-38 rounded-full border border-black flex flex-col justify-center items-center text-center text-[12px] font-medium uppercase tracking-wide  shadow-md pointer-events-auto"
//       >
//         {text.split("<br />").map((line, i) => (
//           <span key={i}>
//             {line}
//             {i < text.split("<br />").length - 1 && <br />}
//           </span>
//         ))}
//         <div className="absolute left-2 bottom-18">
//           <Image src={arrowSrc} alt="Arrow" width={30} height={30} />
//         </div>
//       </button>
//     </motion.div>
//   );
// }



"use client";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function MagneticButton({
  text = "Book a free consultation",
  arrowSrc = "/images/home/button-arrow.svg",
  onClick,
  parentSelector = "why-section",
}) {
  const BUTTON_WIDTH = 192;
  const BUTTON_HEIGHT = 192;

  // Smooth follow motion
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const smoothX = useSpring(mx, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(my, { stiffness: 120, damping: 20 });

  // Floating micro-movement
  const floatX = useTransform(smoothX, (v) => v + Math.cos(v / 50) * 4);
  const floatY = useTransform(smoothY, (v) => v + Math.sin(v / 60) * 4);

  useEffect(() => {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      mx.set(offsetX - BUTTON_WIDTH / 2);
      my.set(offsetY - BUTTON_HEIGHT / 2);
    };

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, [parentSelector]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: floatX,
        top: floatY,
      }}
      className="z-20 pointer-events-none hidden md:block" 
    >
      {/* ORBITING GLOW RING */}
      <motion.div
        className="absolute inset-0 w-44 h-44 -top-3 -left-3 rounded-full border-2 border-black-400/40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />

      {/* PULSE OUTER AURA */}
      <motion.div
        className="absolute inset-0 w-48 h-48 -top-6 -left-6 rounded-full bg-gray-600/20 blur-xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      />

      <motion.button
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        onClick={onClick}
        className="relative w-38 h-38 rounded-full border border-black  flex flex-col justify-center items-center text-center text-[12px] font-medium uppercase tracking-wide shadow-md pointer-events-auto"
      >
        {text.split("<br />").map((line, i) => (
          <span key={i}>
            {line}
            {i < text.split("<br />").length - 1 && <br />}
          </span>
        ))}

        <motion.div
          className="absolute left-2 bottom-18"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Image src={arrowSrc} alt="Arrow" width={30} height={30} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
