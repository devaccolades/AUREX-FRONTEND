import Image from "next/image";
import Link from "next/link";

export default function FooterMobile({ data, project_data }) {
  console.log("testing", project_data);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    {
      key: "linkedin",
      icon: "linked.svg",
      url: data[0]?.linkedin,
    },
    {
      key: "instagram",
      icon: "icon4.svg",
      url: data[0]?.instagram,
    },
    {
      key: "facebook",
      icon: "icon3.svg",
      url: data[0]?.facebook,
    },
    {
      key: "youtube",
      icon: "icon2.svg",
      url: data[0]?.youtube,
    },
  ];

  const projectSections = [
    {
      title: "Residential",
      // items: [
      //   { name: "Aurex Liard", href: "/projects/aurex-liard" },
      //   { name: "Aurex Cascade City", href: "/projects/aurex-cascade-city" },
      // ],
      items: project_data ?? [],
    },
    {
      title: "Commercial",
      items: [
        { name: "Aurum Complex", href: "#" },
        { name: "Aurum Galleria", href: "#" },
      ],
    },
    {
      title: "Contracts",
      items: [
        { name: "Vattekat Arcade", href: "#" },
        { name: "ShajiKhan Arcade", href: "#" },
        { name: "N.S.S. Building", href: "#" },
        { name: "Royal Enclave", href: "#" },
        { name: "Varnaz", href: "#" },
        { name: "Adithya Arcade", href: "#" },
        { name: "Aravind Arcade", href: "#" },
        { name: "Yahvi", href: "#" },
      ],
    },
  ];

  return (
    <footer className="md:hidden relative bg-[#000000] text-white overflow-hidden">
      <div className="relative flex flex-col gap-6 ">
        <div className="space-y-4">
          <div className="flex gap-5 items-center">
            <Image
              src="/images/footer/icon1.svg"
              alt="Aurex Builders"
              width={48}
              height={48}
            />

            <div className="max-w-xs">
              <h3 className="text-[16px] font-urban leading-[20px] font-bold">
                Aurex Builders Pvt Ltd
              </h3>
              <p className="text-[13px] leading-[16px]  mt-1">
                {data[0]?.address}
              </p>
            </div>
          </div>

          {/* MAP */}
          <Link
            href={data?.[0]?.map_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white cursor-pointer"
          >
            <Image
              src="/images/icons/g-map.svg"
              alt="Map Icon"
              width={22}
              height={22}
              className="mr-2"
            />
            <span className="text-[12px] font-bold uppercase leading-[16px]">
              View Location
            </span>
          </Link>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/icons/mail.svg"
                width={16}
                height={16}
                alt="mail"
              />
              <p className="text-[12px] font-bold uppercase">
                {data[0]?.email}
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/icons/call.svg"
                width={16}
                height={16}
                alt="call"
              />
              <p className="text-[12px] font-bold">
                {data[0]?.phone1} / {data[0]?.phone2}
              </p>
            </div>
          </div>
          {/* SOCIAL */}
          <div className="flex md:hidden space-x-3 mt-5">
            {socialLinks.map((item, i) => (
              <div
                key={i}
                className="h-5 w-auto flex items-center cursor-pointer"
              >
                {item.url ? (
                  <Link href={item.url}>
                    <Image
                      src={`/images/footer/${item.icon}`}
                      alt={item.key}
                      width={20}
                      height={20}
                      className="h-full w-auto object-contain"
                    />
                  </Link>
                ) : (
                  <Image
                    src={`/images/footer/${item.icon}`}
                    alt={item.key}
                    width={20}
                    height={20}
                    className="h-full w-auto object-contain "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-[16px] font-semibold mb-3">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-white">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 md:hidden gap-4 text-[12px]  text-white">
          {projectSections.map((section) => (
            <div key={section.title}>
              <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
                {section.title}
              </span>

              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-[#C19A5D] transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-[16px] leading-[24px] font-semibold mb-3 ">
            Support
          </h3>
          <ul className="space-y-2 text-[12px] leading-[100%] text-white flex flex-row gap-3">
            <li>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy & Policy</Link>
            </li>
          </ul>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 text-center text-[11px] text-white">
          <p>
            Copyright © 2026{" "}
            <span className="text-[#C19A5D]">Aurex Builders </span>
            All Rights Reserved
          </p>
          <p className="mt-1">
            Design & Developed By{" "}
            <span className="text-[#C19A5D]">Accolades Integrated</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
