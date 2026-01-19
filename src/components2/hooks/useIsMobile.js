"use client";

import { useState, useEffect } from "react";

// You can change this value if needed
const MOBILE_MAX_WIDTH = 768; // Tailwind md breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_MAX_WIDTH);
    };

    // Initial check
    checkIsMobile();

    // Listen to resize
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
}
