

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", path: "/", icon: "/images/icons/home.svg" },
  { label: "Projects", path: "/projects", icon: "/images/icons/projects.svg", dropdown: true },
  { label: "Services", path: "/services", icon: "/images/icons/services.svg", dropdown: true },
  { label: "Gallery", path: "/gallery", icon: "/images/icons/gallery.svg" },
  { label: "About Us", path: "/about-us", icon: "/images/icons/about-us.svg" },
  { label: "Blogs", path: "/blogs", icon: "/images/icons/blogs.svg" },
  { label: "Contact Us", path: "/contact-us", icon: "/images/icons/contact-us.svg" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // Change 30px threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[99] flex items-center justify-between p-10 md:p-16"
        style={{
          height: "95px",
          // backdropFilter: "blur(145px)",
          // WebkitBackdropFilter: "blur(145px)",
          background: `
            linear-gradient(
              to bottom,
              rgba(9,40,96,1) 0%,
              rgba(8,48,115,0.92) 20%,
              rgba(7,62,137,0.70) 40%,
              rgba(6,58,132,0.45) 60%,
              rgba(4,52,115,0.28) 75%,
              rgba(3,44,100,0.15) 88%,
              rgba(2,29,68,0.08) 94%,
              rgba(0,0,0,0) 100%
            )
          `,
          borderBottom: "0px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* menu button, logo, phone icon */}
        <div className="w-[24px] h-[14px] flex items-center" onClick={() => setOpen(true)}>
          <Image src="/images/icons/nav.svg" width={60} height={60} alt="menu" />
        </div>
        {/* <div className="w-32 flex justify-center">
          <Image src="/images/aurex-logo.svg" width={60} height={60} alt="logo" />
        </div> */}
        <div
          className={`flex justify-center transition-all duration-300 ${scrolled ? "w-20" : "w-16 md:w-32"
            }`}
        >
          <Image
            src={scrolled ? "/images/aurex-white.png" : "/images/aurex-logo.svg"}
            width={scrolled ? (isMobile ? 30 : 40) : (isMobile ? 45 : 60)}
            height={scrolled ? (isMobile ? 30 : 40) : (isMobile ? 45 : 60)}
            alt="logo"
            className="transition-all duration-300"
          />
        </div>
        <div className="w-[24px] h-[24px] flex justify-end">
          <Image src="/images/icons/phone.svg" width={20} height={20} alt="phone" />
        </div>
      </header>

      {/* SIDEBAR MUST BE OUTSIDE HEADER */}
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}


      {/* SIDEBAR */}
      <div className={` 
  fixed top-0 left-0 h-screen w-[300px] bg-white shadow-xl z-[999] rounded-r-3xl
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}
`}>
        {/* <div className="p-2 space-y-2 overflow-y-auto hide-scrollbar h-full"> */}
        <div className="p-2 space-y-2 flex flex-col h-full overflow-y-auto hide-scrollbar">


          {/* CLOSE BUTTON */}
          <div className="flex items-end justify-between mb-0">
            <h2 className="text-lg font-semibold"></h2>
            <button
              onClick={() => setOpen(false)}
              className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300"
            >
              ✕
            </button>
          </div>

          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              dropdown={item.dropdown}
            />
          ))}

          {/* MAP + ADDRESS */}
          <div className="bg-white p-2 rounded-2xl shadow border mt-1">
            <iframe
              src="https://www.google.com/maps/place/Aurum+Complex/@10.535802,76.211348,15z/"
              width="100%" height="140"
              className="rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            <p className="font-bold font-urban text-[16px] leading-[20px] mt-3 text-center">Aurex Builders Pvt Ltd</p>
            <p className="text-[12px] leading-[100%] text-gray-600 text-center">
              Aurum Complex, Patturaikkal, Thrissur
            </p>
          </div>

          <div className="mt-5 space-y-3">

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded">
                <Image src="/images/icons/mail.svg" width={22} height={22} alt="call icon" />
              </div> {/* ICON placeholder */}
              <p className="font-bold font-urban text-[12px] leading-[16px]">SALES@AUREXBUILDERS.COM</p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded">
                <Image src="/images/icons/call.svg" width={22} height={22} alt="call icon" />
              </div> {/* ICON placeholder */}
              <p className="font-bold font-urban text-[12px] leading-[16px]">+91 98465 07474 / 98460 07474</p>
            </div>
          </div>

          {/* TEXT BLOCK BELOW MAP */}
          <div className=" pt-3 mt-auto gap-[10px] flex flex-col">
            <div className="">
              <p className="font-bold text-[14px] leading-[16px]">Need a hand from our Thrissur team?</p>
              <p className="text-gray-600 text-[12px] leading-[100%]">
                We're right here to answer your questions and guide you every step of the way.
              </p>
            </div>

            <div className="flex justify-end">   {/* <-- button goes right */}
              <button className="w-[50%] font-roboto text-[12px] leading-[18px] bg-red-500 text-white px-[10px] py-2 rounded-[6px] mt-4">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

function MenuItem({ icon, label, dropdown }) {
  return (
    <div className="
      w-full flex items-center justify-between 
      px-2 py-0 rounded-xl 
      hover:bg-black/5 transition cursor-pointer
    ">
      <div className="flex items-center gap-3 mb-0">
        <div className="border-1 border-black/8 rounded-[5px] p-[6px]">
          <Image src={icon} width={30} height={30} alt={label} />
        </div>
        <span className="font-bold font-urban text-[14px] leading-[100%] ">{label}</span>
      </div>

      {dropdown && <span className="text-xl font-bold">›</span>}
    </div>
  );
}
