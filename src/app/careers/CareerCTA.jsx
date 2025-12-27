"use client";

import Link from "next/link";

export default function CareerCTASection() {
  return (
    <section className="container bg-white pt-0 md:pt-4 pb-14">
      <div className=" ">

        <div className=" overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14">

            {/* LEFT BLOCK */}
            <div className="">
              <h3 className="text-[18px] md:text-[20px] lg:text-[32px] leading-[24px] lg:leading-[36px] font-medium font-urban mb-1 md:mb-3">
                DIDN’T FIND THE RIGHT ROLE?
              </h3>

              <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]   text-black  mb-1 md:mb-4">
                We’re always looking for passionate professionals to join our
                growing team. Share your resume with us — we’ll reach out when
                a suitable opportunity arises.
              </p>

              <p className="text-[12px] md:text-[13px] lg:text-[16px] leading-[16px] text-black  font-extrabold">
                EMAIL YOUR CV TO:{" "}
                <a
                  href="mailto:careers@aurexbuilders.com"
                  className="underline"
                >
                  CAREERS@AUREXBUILDERS.COM
                </a>
              </p>
            </div>

            {/* RIGHT BLOCK */}
            <div className="">
              <h3 className="text-[18px] md:text-[20px] lg:text-[32px] leading-[24px] lg:leading-[36px] font-medium font-urban mb-1 md:mb-3">
                APPLY INSTANTLY VIA WHATSAPP
              </h3>

              <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[18px]   text-black  md:1 md:mb-7">
                Skip the form — send us your details on WhatsApp to connect
                directly with our HR team.
              </p>

              <Link
                href="https://wa.me/919999999999"
                target="_blank"
                className="text-[12px] md:text-[13px] lg:text-[16px] leading-[16px] text-black  font-extrabold"
              >
                MESSAGE US NOW
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
