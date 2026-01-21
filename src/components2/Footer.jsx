// "use client";
import Image from "next/image";
import Link from "next/link";
import FooterMobile from "./FooterMobile";
import { AboutUsFetch, ProjectsFetch } from "@/services/api";

export default async function Footer() {
  const data = await AboutUsFetch();
  const projects = await ProjectsFetch();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const residentialProjects = projects
    .filter((project) => project.project_type === "Residential")
    .map((project) => ({
      name: project.name,
      href: `/projects/${project.slug}`,
    }));
  console.log("cehcking proejct data desktop", projects);

  const projectSections = [
    {
      title: "Residential",
      //   items: [
      //     { name: "Aurex Liard", href: "/projects/aurex-liard" },
      //     { name: "Aurex Cascade City", href: "/projects/aurex-cascade-city" },
      //   ],
      items: residentialProjects ?? [],
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

  return (
    <footer
      className="text-white py-8 md:py-12 px-[5%] md:px-6 lg:px-12 xl:px-20 overflow-hidden bg-black bg-cover bg-center
    md:bg-[url('/images/footer/Group1000005994-tab.svg')] lg:bg-[url('/images/footer/Group1000005994.svg')]"
    >
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] xl:grid-cols-[20%_80%] gap-12 lg:gap-5">
          <div className="space-y-3  flex md:flex-col lg:flex-col justify-between">
            <div className="flex md:flex-row lg:flex-col items-center gap-2">
              <div className=" w-full space-y-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/footer/icon1.svg"
                    alt="Aurex Builders"
                    width={50}
                    height={50}
                    className="object-contain"
                  />

                  <div className="max-w-[200px] lg:space-y-1">
                    <h3 className="text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] font-urban ">
                      Aurex Builders Pvt Ltd
                    </h3>
                    <p className="text-[13px] lg:text-sm text-white mt-0 leading-[18px] ">
                      {/* Aurum Complex, Patturaikkal, Thrissur, Kerala - 680 020 */}
                      {data[0]?.address}
                    </p>
                  </div>
                </div>

                <Link
                  href={data?.[0]?.map_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white cursor-pointer "
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
              </div>
              <div className=" w-full">
                <div className="space-y-1">
                  {/* EMAIL */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5">
                      <Image
                        src="/images/icons/mail.svg"
                        width={100}
                        height={100}
                        alt="call icon"
                      />
                    </div>{" "}
                    <p className="font-bold font-urban text-[12px] leading-[16px] uppercase">
                      <a
                        href={`mailto:${data[0]?.email}`}
                        className="hover:underline cursor-pointer"
                      >
                        {data[0]?.email}
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5  rounded">
                      <Image
                        src="/images/icons/call.svg"
                        width={16}
                        height={16}
                        alt="call icon"
                      />
                    </div>{" "}
                    <p className="font-bold font-urban text-[12px] leading-[16px]">
                      <a
                        href={`tel:${data[0]?.phone1}`}
                        className="hover:underline cursor-pointer"
                      >
                        {data[0]?.phone1}
                      </a>

                      {data[0]?.phone2 && (
                        <>
                          {" / "}
                          <a
                            href={`tel:${data[0]?.phone2}`}
                            className="hover:underline cursor-pointer"
                          >
                            {data[0]?.phone2}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex space-x-3 mt-5">
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
            </div>
          </div>

          <div className="grid grid-cols-[1fr_4.0fr_1fr] lg:grid  lg:grid-cols-[1fr_3.5fr_0.3fr] xl:grid-cols-[1fr_3.5fr_1fr] gap-6 md:gap-6 lg:gap-5">
            <div className="cursor-pointer">
              <h3 className="text-[14px] font-semibold mb-2 ">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {quickLinks.map((item) => (
                  <li key={item.name} className="cursor-pointer">
                    <Link
                      href={item.href}
                      className="hover:text-[#C19A5D] transition cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:grid md:grid-cols-3 gap-x-5 text-sm text-gray-300">
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

            {/* --- Support --- */}
            <div>
              <h3 className="text-base font-semibold mb-2">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* <li>
                  <Link href="#">Banking Partners</Link>
                </li> */}
                <li>
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>
            Copyright © 2026{" "}
            <span className="text-[#C19A5D]">Aurex Builders</span>. All Rights
            Reserved
          </p>
          <p className="mt-2 md:mt-0">
            Design And Developed By{" "}
            <Link href="#" className="text-[#C19A5D] hover:underline">
              Accolades Integrated
            </Link>
          </p>
        </div>
      </div>
      <FooterMobile data={data} project_data={residentialProjects} />
    </footer>
  );
}
