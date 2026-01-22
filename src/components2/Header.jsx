"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import call from "../../public/images/call.svg";
import mail from "../../public/images/9004661_envelope_mail_email_letter_icon.svg";

const menuItems = [
  { label: "Home", path: "/", icon: "/images/icons/home.svg" },
  {
    label: "Projects",
    path: "/projects",
    icon: "/images/icons/projects.svg",
    dropdown: true,
  },
  {
    label: "Services",
    path: "/services",
    icon: "/images/icons/services.svg",
    dropdown: true,
  },
  { label: "Gallery", path: "/gallery", icon: "/images/icons/gallery.svg" },
  { label: "About Us", path: "/about-us", icon: "/images/icons/about-us.svg" },
  { label: "Blogs", path: "/blogs", icon: "/images/icons/blogs.svg" },
  {
    label: "Contact Us",
    path: "/contact-us",
    icon: "/images/icons/contact-us.svg",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const [scrolled, setScrolled] = useState(false);

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
  className={`fixed top-0 left-0 w-full z-[99] flex items-center justify-between transition-all duration-300 ${
    scrolled 
      ? "p-6 md:p-10"  
      : "p-8 md:p-16"
  }`}
  style={{
    height: scrolled ? "60px" : "50px md:110px",
    background: `
      linear-gradient(
        to bottom,
        rgba(1,75,131,1) 0%,
        rgba(1,75,131,0.85) 20%,
        rgba(1,75,131,0.60) 40%,
        rgba(1,75,131,0.40) 60%,
        rgba(1,75,131,0.25) 75%,
        rgba(1,75,131,0.15) 88%,
        rgba(1,75,131,0.08) 94%,
        rgba(1,75,131,0) 100%
      )
    `,
    borderBottom: "0px solid rgba(255,255,255,0.15)",
  }}
>
        <div
          className="w-[24px] h-[14px] flex items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/images/icons/nav.svg"
            width={60}
            height={60}
            alt="menu"
          />
        </div>

        <div
          className={`flex justify-center transition-all duration-300 ${scrolled ? "w-20" : "w-16 md:w-32"
            }`}
        >
          <Image
            src={
              scrolled ? "/images/aurex-white.png" : "/images/aurex-logo.svg"
            }
            width={scrolled ? (isMobile ? 30 : 40) : isMobile ? 35 : 50}
            height={scrolled ? (isMobile ? 30 : 40) : isMobile ? 40 : 50}
            alt="logo"
            className="transition-all duration-300"
          />
        </div>
        <div className="w-[24px] h-[24px] flex justify-end">
          <a href="tel:+919846007474" aria-label="Call us">
    <Image
      src="/images/icons/phone.svg"
      width={20}
      height={20}
      alt="phone"
      className="cursor-pointer"
    />
  </a>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={` 
  fixed top-[1%]  h-[98vh] w-[300px] bg-white shadow-xl z-[999] rounded-[15px]
  transform transition-transform duration-300 overflow-hidden  cursor-pointer
  ${open ? "translate-x-0 left-2" : "-translate-x-full left-0"}
`}
      >
        <div className="px-2 pt-2 bg-transparent shrink-0 flex  items-end justify-end mb-0 ">
          <button
            onClick={() => setOpen(false)}
            className="w-4 h-4 flex items-center justify-center p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="p-2 space-y-2 flex flex-col h-full overflow-y-auto cursor-pointer">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
            // dropdown={item.dropdown}
            />
          ))}

          <div className="relative bg-white p-2 rounded-2xl border-[0.5px] border-[#E9E9E9] mt-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.553348542203!2d76.21134769999999!3d10.535801999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef1ba5f1780b%3A0x9e41cffc8c2dac05!2sAurum%20Complex!5e0!3m2!1sen!2sin!4v1767852750515!5m2!1sen!2sin"
              width="100%"
              height="140"
              className="rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            <div
              className="pointer-events-none absolute bottom-[60px] left-0 right-0 h-[30px]
      bg-gradient-to-t from-white via-white/80 to-transparent"
            />
            <div className="mt-2 ">
              <p className="font-bold font-urban text-[16px] leading-[20px] text-center">
                Aurex Builders Pvt Ltd
              </p>
              <p className="text-[12px] leading-[120%] text-gray-600 text-center">
                Aurum Complex, Patturaikkal, Thrissur <br /> kerala - 680 020
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3 ">
            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5  rounded">
                <Image src={mail} width={22} height={22} alt="mail icon" />
              </div>{" "}
              {/* ICON placeholder */}
              <p className="font-bold font-urban text-[12px] leading-[16px]">
                SALES@AUREXBUILDERS.COM
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5  rounded">
                <Image src={call} width={22} height={22} alt="call icon" />
              </div>{" "}
              {/* ICON placeholder */}
              <p className="font-bold font-urban text-[12px] leading-[16px]">
                +91 98465 07474 / 98460 07474
              </p>
            </div>
          </div>

          {/* TEXT BLOCK BELOW MAP */}
          <div className=" pb-5 mt-auto  gap-[10px] flex flex-col ">
            <div>
              <p className="font-bold text-[14px] leading-[16px]">
                Need a hand from our Thrissur team?
              </p>
              <p className="text-gray-600 text-[12px] leading-[100%] pt-1">
                We're right here to answer your questions and guide you every
                step of the way.
              </p>
            </div>

            <div className="flex justify-end pb-1">
              <button className="w-[50%] font-roboto text-[12px] font-bold leading-[156%] bg-[#EF4036] text-white px-[10px] py-2 rounded-[6px]  cursor-pointer">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuItem({ icon, label, path, dropdown }) {
  return (
    <Link href={path} className="block">
      <div
        className="
      w-full flex items-center justify-between 
      pr-2 pl-0.5 py-0 rounded-xl 
      hover:bg-black/5 transition cursor-pointer
      "
      >
        <div className="flex items-center gap-3 mb-0">
          <div className="border-1 border-black/8 rounded-[5px] m-[6px]">
            <Image src={icon} width={30} height={30} alt={label} />
          </div>
          <span className="font-bold font-urban text-[14px] leading-[100%] ">
            {label}
          </span>
        </div>

        {/* {dropdown && <span className="text-xl font-bold">›</span>} */}
      </div>
    </Link>
  );
}
