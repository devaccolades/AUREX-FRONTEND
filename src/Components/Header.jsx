


// "use client";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="w-full">
//       <div
//         className="
//           w-full h-40 
//           flex items-center justify-between 
//           px-6
//           bg-[linear-gradient(to_bottom,_#0B3A79_0%,_#0B3A79_30%,_#06407C_55%,_#022958_100%)]
         
//         "
//       >
//         {/* LEFT AREA */}
//         <div className="w-10 h-10 flex items-center justify-start">
//           <Image src="/images/nav.svg" width={60} height={60} alt="menu" />
//         </div>

//         {/* CENTER LOGO */}
//         <div className="w-32 flex items-center justify-center">
//           <Image src="/images/aurex-logo.svg" width={60} height={60} alt="logo" />
//         </div>

//         {/* RIGHT PHONE ICON */}
//         <div className="w-10 h-10 flex items-center justify-end">
//           <Image src="/images/phone.svg" width={20} height={20} alt="phone" />
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative">
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* TOP HEADER */}
      <div
        className="
          w-full h-40 
          flex items-center justify-between 
          px-6
          bg-[linear-gradient(to_bottom,_#0B3A79_0%,_#0B3A79_30%,_#06407C_55%,_#022958_100%)]
        "
      >
        {/* LEFT MENU ICON */}
        <div
          className="w-10 h-10 flex items-center justify-start cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image src="/images/nav.svg" width={60} height={60} alt="menu" />
        </div>

        {/* CENTER LOGO */}
        <div className="w-32 flex items-center justify-center">
          <Image src="/images/aurex-logo.svg" width={60} height={60} alt="logo" />
        </div>

        {/* PHONE ICON */}
        <div className="w-10 h-10 flex items-center justify-end">
          <Image src="/images/phone.svg" width={20} height={20} alt="phone" />
        </div>
      </div>

      {/* SIDEBAR MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[300px] 
          bg-white shadow-xl z-50 
          rounded-r-3xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* MENU CONTENT */}
        <div className="p-6 space-y-6 overflow-y-auto h-full">

          <button
            className="text-right w-full text-gray-500 hover:text-black"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <div className="space-y-4">
            <MenuItem icon="/images/home.svg" label="Home" />
            <MenuItem icon="/images/projects.svg" label="Projects" />
            <MenuItem icon="/images/services.svg" label="Services" dropdown />
            <MenuItem icon="/images/gallery.svg" label="Gallery" />
            <MenuItem icon="/images/about-us.svg" label="About Us" />
            <MenuItem icon="/images/blogs.svg" label="Blogs" />
            <MenuItem icon="/images/contact-us.svg" label="Contact Us" />
          </div>

          {/* Example map/contact section */}
          <div className="mt-6 p-4 border rounded-xl shadow-sm">
           <iframe
  src="https://www.google.com/maps/place/Aurum+Complex/@10.535802,76.211348,15z/data=!4m6!3m5!1s0x3ba7ef1ba5f1780b:0x9e41cffc8c2dac05!8m2!3d10.535802!4d76.2113477!16s%2Fg%2F11bwyxvp_2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
  width="100%"
  height="200"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg"
></iframe>

            <p className="font-semibold mt-3">Aurex Builders Pvt Ltd</p>
            <p className="text-sm text-gray-600">
              Aurum Complex, Patturaikkal, Thrissur
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-red-500 text-white py-3 rounded-xl mt-4">
            Talk to Sales
          </button>
        </div>
      </div>
    </header>
  );
}

/* MENU ITEM COMPONENT */
function MenuItem({ icon, label, dropdown }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center gap-3">
        <Image src={icon} width={20} height={20} alt={label} />
        <span>{label}</span>
      </div>
      {dropdown && <span>▾</span>}
    </div>
  );
}
