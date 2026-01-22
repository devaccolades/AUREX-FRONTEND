import Footer from "@/components2/Footer";
import Header from "@/components2/Header";
import { SeoById } from "@/services/api";
import React from "react";

export async function generateMetadata() {
  const seo = await SeoById("terms-and-conditions");

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
  const termsSections = [
    {
      title: "Use of Website",
      points: [
        "The content on this website is for general informational purposes only.",
        "You agree not to misuse the website, attempt unauthorized access, or engage in activities that may disrupt its functionality.",
        "Unauthorized use of this website may give rise to legal claims.",
      ],
    },
    {
      title: "Project Information & Representations",
      points: [
        "All project images, layouts, specifications, visuals, and descriptions are indicative and subject to change without prior notice.",
        "Final designs, amenities, timelines, and approvals may vary based on statutory regulations, technical feasibility, and authority approvals.",
        "Nothing on this website constitutes a legal offer, contract, or commitment.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      points: [
        "All content including text, images, graphics, logos, videos, designs, and layouts are the intellectual property of Aurex.",
        "No material may be copied, reproduced, distributed, or reused without prior written consent.",
      ],
    },
    {
      title: "User Submissions & Enquiries",
      points: [
        "By submitting enquiry forms, you agree that the information provided is accurate and truthful.",
        "Aurex reserves the right to contact you via phone, email, WhatsApp, or SMS for project-related communication.",
        "Submission of an enquiry does not guarantee booking, availability, or pricing.",
      ],
    },
    {
      title: "Pricing & Availability",
      points: [
        "Prices, offers, and availability mentioned on the website are subject to change without notice.",
        "Final pricing will be confirmed only through official communication and documentation.",
      ],
    },
    {
      title: "Third-Party Links",
      points: [
        "This website may contain links to third-party websites for convenience.",
        "Aurex does not endorse or assume responsibility for the content, accuracy, or practices of such external websites.",
      ],
    },
    {
      title: "Limitation of Liability",
      points: [
        "Aurex shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.",
        "We do not guarantee uninterrupted or error-free access to the website.",
      ],
    },
    {
      title: "Privacy & Data Protection",
      points: [
        "Any personal information collected through this website is handled in accordance with our Privacy Policy.",
        "We are committed to safeguarding user data and maintaining confidentiality.",
      ],
    },
    {
      title: "Changes to Terms",
      points: [
        "Aurex reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
      ],
    },
    {
      title: "Governing Law & Jurisdiction",
      points: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
      ],
    },
    {
      title: "Contact Information",
      points: [
        "For any questions or clarifications regarding these Terms & Conditions, please contact us through the details provided on our website.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="w-[90%] lg:w-[80%] mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px]">
        <header className=" flex flex-col md:flex-row  justify-between  md:items-center space-y-2">
          <h1 className="font-urban font-medium text-[20px] md:text-[24px] lg:text-[32px] leading-[100%] uppercase">
            AUREX Builders Terms and conditions
          </h1>
          <p className="font-urban font-medium text-[14px] lg:text-[16px] leading-[100%]">
            UPDATED AS OF JAN 15, 2026
          </p>
        </header>
        <section className="w-full mt-10 font-urban">
          <div className="">
            <h2
              className="text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-900 mb-3"
            >
              Introduction
            </h2>

            <p
              className="text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800"
            >
              Welcome to Aurex. These Terms & Conditions govern your access to
              and use of our website, services, and any information provided
              herein. By accessing this website or engaging with our services,
              you agree to comply with and be bound by these terms. If you do
              not agree, please refrain from using our website.
            </p>
          </div>
        </section>
        <section className="w-full mt-10 font-urban">
          <div className="">
            <h2
              className="text-[14px] md:text-[16px] lg:text-[18px] 
                   font-semibold uppercase tracking-wide 
                   text-gray-900 mb-3"
            >
              About the Company
            </h2>

            <p
              className="text-[13px] md:text-[14px] lg:text-[16px]
                  leading-[20px] sm:leading-[22px] lg:leading-[26px]
                  text-gray-800 font-inter"
            >
              Aurex is engaged in real estate development, construction, and
              related services. All information presented on this website is
              intended to provide general insight into our projects,
              capabilities, and offerings.
            </p>
          </div>
        </section>
        <section className="w-full  py-8">
          <div className="space-y-10">
            {termsSections.map((section, index) => (
              <div key={index}>
                <h3
                  className="font-urban text-[14px] sm:text-[16px] lg:text-[18px] 
                       uppercase tracking-wide font-medium mb-4"
                >
                  {section.title}
                </h3>

                <ul
                  className="list-disc pl-5 space-y-2 font-inter
                       text-[13px] sm:text-[14px] lg:text-[15px]
                       leading-[20px] sm:leading-[22px] lg:leading-[24px]
                       text-gray-800"
                >
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div className="bg-[#faf5e9] flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-4 md:p-5 lg:p-6 rounded-2xl mb-5">
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
