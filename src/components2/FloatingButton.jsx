
// "use client";

// import { useState } from "react";
// import Image from "next/image";


// import ModalForm from "./forms/ModalForm";

// export default function FloatingButtons() {
//     const [openModal, setOpenModal] = useState(false);

//     return (
//         <>

//             {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-1 hidden lg:flex"> */}
//             <div
//                 className="
//     fixed top-1/2 -translate-y-1/2 z-[999]
//     flex flex-col gap-2
//     right-0

//     transition-all duration-300 ease-in-out

//     lg:translate-x-[80%]
//     lg:hover:translate-x-0
//   "
//             >
//                 {/* WhatsApp */}
//                 <a
//                     href="https://wa.me/919846507474?text=Hi%20I%20am%20interested%20in%20your%20project"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-transparent"
//                 >
//                     <Image
//                         src="/images/blog-inner/whatsapp.svg"
//                         width={44}
//                         height={44}
//                         alt="Chat on WhatsApp"
//                         className="w-[46px] h-[46px] md:w-[40px] md:h-[40px] lg:w-[58px] lg:h-[58px]"
//                     />
//                 </a>

//                 {/* Call */}
//                 <a href="tel:+9846007474">
//                     <div className="bg-[#0a6e50] flex items-center justify-center py-[6px] lg:py-[8px] rounded-l-[15px] border border-white">
//                         <Image
//                             src="/images/telephone4.png"
//                             width={44}
//                             height={44}
//                             alt="call"
//                             className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] invert brightness-100"
//                         />
//                     </div>
//                 </a>
//             </div>


//             {openModal && (
//                 <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
//                     <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative  z-20">
//                         <button
//                             className="absolute top-4 right-4 text-xl"
//                             onClick={() => setOpenModal(false)}
//                         >
//                             ✕
//                         </button>
//                         {/* <ProjectEnquiryModal /> */}
//                         <ModalForm onClose={() => setOpenModal(false)} />
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ModalForm from "./forms/ModalForm";

export default function FloatingButtons() {
  const [openModal, setOpenModal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const lastX = useRef(null);
  const hideTimeout = useRef(null);

  // ✅ Detect Desktop
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Detect Horizontal Mouse Movement
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      if (lastX.current !== null) {
        const diffX = Math.abs(e.clientX - lastX.current);

        // Detect strong horizontal movement
        if (diffX > 10) {
          setShowButtons(true);

          // Reset hide timer
          if (hideTimeout.current) clearTimeout(hideTimeout.current);

          hideTimeout.current = setTimeout(() => {
            setShowButtons(false);
          }, 2000);
        }
      }

      lastX.current = e.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [isDesktop]);

  return (
    <>
      {/* Floating Buttons */}
      <div
        className={`
          fixed top-1/2 -translate-y-1/2 z-[999]
          flex flex-col gap-2 right-0
          transition-all duration-300 ease-in-out
          
          ${isDesktop
            ? showButtons
              ? "translate-x-0"
              : "translate-x-full"
            : "translate-x-0"}
        `}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919846507474?text=Hi%20I%20am%20interested%20in%20your%20project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/blog-inner/whatsapp.svg"
            width={44}
            height={44}
            alt="Chat on WhatsApp"
            className="w-[46px] h-[46px] md:w-[40px] md:h-[40px] lg:w-[58px] lg:h-[58px]"
          />
        </a>

        {/* Call */}
        <a href="tel:+9846007474">
          <div className="bg-[#0a6e50] flex items-center justify-center py-[6px] lg:py-[8px] rounded-l-[15px] border border-white">
            <Image
              src="/images/telephone4.png"
              width={44}
              height={44}
              alt="call"
              className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] invert brightness-100"
            />
          </div>
        </a>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-lg relative z-20">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <ModalForm onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
