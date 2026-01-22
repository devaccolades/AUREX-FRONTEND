import Footer from "@/components2/Footer";
import Header from "@/components2/Header";
import { SeoById } from "@/services/api";
import React from "react";

export async function generateMetadata() {
  const seo = await SeoById("privacy-policy");

  if (!seo) {
    return {
      title: "Aurex Builders",
      description: "Aurex Builders",
    };
  }

  return {
    title: seo.meta_title,
    description: seo.meta_description,

    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      url: "https://aurex.accoladesweb.com",
      siteName: "Aurex Builders",
      images: seo.og_image
        ? [
            {
              url: seo.og_image, // FULL URL from backend
              width: 1200,
              height: 630,
              alt: seo.og_title || seo.meta_title,
            },
          ]
        : [],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: seo.og_image ? [seo.og_image] : [],
    },
  };
}

const page = () => {
  const privacySections = [
    {
      title: "Personal Information",
      points: [
        "Full name",
        "Phone number",
        "Email address",
        "Location or city",
        "Project or service you are interested in",
        "Any details you voluntarily provide through forms or WhatsApp enquiries",
      ],
    },
    {
      title: "Technical Information",
      points: [
        "IP address",
        "Browser type and device information",
        "Pages visited and time spent on the website",
        "Referring website or source",
      ],
      note: "This data is collected through enquiry forms, cookies, analytics tools, and direct communication channels.",
    },
    {
      title: "How We Use Your Information",
      description:
        "Your information is used strictly for legitimate business purposes, including:",
      points: [
        "Responding to project enquiries and consultation requests",
        "Scheduling site visits or calls",
        "Sharing project details, brochures, or updates",
        "Improving website performance and user experience",
        "Internal analysis and service enhancement",
        "Legal, regulatory, or compliance purposes",
      ],
      footer:
        "We do not sell, rent, or trade your personal information to third parties.",
    },
    {
      title: "Cookies & Tracking Technologies",
      description: "Our website may use cookies and similar technologies to:",
      points: [
        "Enhance site functionality",
        "Understand user behavior and preferences",
        "Measure traffic and performance",
      ],
      footer:
        "You can choose to disable cookies through your browser settings; however, some features of the website may not function optimally.",
    },
    {
      title: "Data Sharing & Disclosure",
      description: "We may share your information only:",
      points: [
        "With internal teams for enquiry handling and service delivery",
        "With trusted partners or vendors involved in project execution (only when required)",
        "When mandated by law, regulation, or legal process",
      ],
      footer:
        "All third parties are required to maintain confidentiality and data security.",
    },
    {
      title: "Data Security",
      description:
        "We implement appropriate technical and organizational measures to safeguard your personal data against:",
      points: [
        "Unauthorized access",
        "Data loss or misuse",
        "Alteration or disclosure",
      ],
      footer:
        "While we strive to protect your data, no digital platform can guarantee 100% security.",
    },
    {
      title: "Your Rights",
      description: "You have the right to:",
      points: [
        "Request access to the personal data we hold about you",
        "Request correction of inaccurate or incomplete information",
        "Withdraw consent for communications at any time",
        "Request deletion of your personal data, subject to legal obligations",
      ],
      footer:
        "To exercise these rights, please contact us using the details provided below.",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-[90%] lg:w-[80%] mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px]">
        <header className=" flex flex-col md:flex-row  justify-between  md:items-center space-y-2">
          <h1 className="font-urban font-medium text-[20px] md:text-[24px] lg:text-[32px] leading-[100%] uppercase">
            AUREX Builders Privacy Policy
          </h1>
          <p className="font-urban font-medium text-[14px] lg:text-[16px] leading-[100%]">
            UPDATED AS OF JAN 15, 2026
          </p>
        </header>
        <p className="font-inter font-normal text-[13px] md:text-[14px] mt-4">
          At Aurex ("we," "our," or "us"), we value your trust and are committed
          to protecting your privacy. This Privacy Policy explains how we
          collect, use, store, and protect your personal information when you
          interact with our website, submit enquiries, or engage with our
          services.
        </p>
        <section className="w-full mt-10 font-urban">
          <div className="">
            <h2
              className="font-urban text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-800 mb-3"
            >
              Information We Collect
            </h2>

            <p
              className="font-inter text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800"
            >
              We may collect the following types of information:
            </p>
          </div>
        </section>
        <section className="w-full py-8">
          <div className=" space-y-10">
            {privacySections.map((section, index) => (
              <div key={index}>
                {/* Title */}
                <h3
                  className="font-urban text-[14px] sm:text-[16px] lg:text-[18px]
                           uppercase tracking-wide font-medium mb-3"
                >
                  {section.title}
                </h3>

                {/* Optional description */}
                {section.description && (
                  <p
                    className="font-inter text-[13px] sm:text-[14px] lg:text-[15px]
                            leading-[22px] text-gray-800 mb-3"
                  >
                    {section.description}
                  </p>
                )}

                {/* Bullet points */}
                {section.points && (
                  <ul
                    className="list-disc pl-5 space-y-2 font-inter
                             text-[13px] sm:text-[14px] lg:text-[15px]
                             leading-[22px] sm:leading-[24px]
                             text-gray-800"
                  >
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Optional note / footer */}
                {(section.note || section.footer) && (
                  <p
                    className="font-inter text-[13px] sm:text-[14px] lg:text-[15px]
                            leading-[22px] text-gray-800 mt-3"
                  >
                    {section.note || section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="w-full font-urban mb-8">
          <div className="">
            <h2
              className="font-urban text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-800 mb-3"
            >
              Third-Party Links
            </h2>

            <p
              className="font-inter text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800"
            >
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices, content, or security of
              external sites. We encourage you to review their privacy policies
              separately.
            </p>
          </div>
        </section>
        <section className="w-full font-urban mb-8">
          <div className="">
            <h2
              className="font-urban text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-800 mb-3"
            >
              Children’s Privacy
            </h2>

            <p
              className="font-inter text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800"
            >
              Our services and website are not intended for individuals under
              the age of 18. We do not knowingly collect personal information
              from minors.
            </p>
          </div>
        </section>
        <section className="w-full  font-urban mb-8">
          <div className="">
            <h2
              className="font-urban text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-800 mb-3"
            >
              Changes to This Policy
            </h2>

            <p
              className="font-inter text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800"
            >
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be posted on this page with an updated
              effective date.
            </p>
          </div>
        </section>
        <div className="bg-[#faf5e9] flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-4 md:p-5 lg:p-6 rounded-2xl my-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-base sm:text-lg font-['Urbanist',sans-serif] font-bold text-black">
              Contact Us
            </h3>
            <p className="text-[14px] sm:text-[16px] font-['inter',sans-serif] font-medium text-[#484848] leading-relaxed">
              <span>
                If you have any questions or concerns about this Privacy Policy
                or how your data is handled, please contact us{" "}
              </span>
              <span
                className="bg-clip-text bg-gradient-to-b from-[#e09b07] to-[#a77200]"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                info@aurexbuilders.com
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
