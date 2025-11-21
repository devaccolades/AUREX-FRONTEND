"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ZoomScrollImage() {
  const ref = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Scale from 1 → 2.2 as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.2]);

  return (
    <section className="h-[200vh] w-full bg-black">
      {/* scroll space */}
      <div ref={ref} className="h-screen sticky top-0 overflow-hidden">
        <motion.div style={{ scale }} className="w-full h-full origin-top">
          <Image
            src="/images/home/hero.jpg"   // your image path
            alt="Zoom"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
