"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ChairmanMessage() {
  return (
    <div className="py-6  mb-5">
      <section className="container flex flex-col md:flex-row justify-between rounded-[10px] overflow-hidden border border-gray-200 ">

        {/* LEFT SIDE – White Content Box */}
        <motion.div
          className="relative md:w-[59%] lg:w-[60%] p-2 md:p-4 lg:p-4 xl:p-8 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        {/* <div className="relative  md:w-[59%] lg:w-[60%] p-2 md:p-4 lg:p-4 xl:p-8 "> */}
          
          {/* Text Content */}
          <p className="font-poppins text-[12px] md:text-[14px] lg:text-[16px] mb-1 xl:mb-2">
            <span className="text-[#006A54]">#Chairman's</span>{" "}
            <span className="text-gray-500">Message</span>
          </p>

<motion.h2
            className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
          {/* <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5"> */}
            BUILDING MORE THAN <br className="hidden sm:block" />
            STRUCTURES — ADORNING LIVES
          {/* </h2> */}
          </motion.h2>


<motion.div
            className="text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
          {/* <div className="text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]"> */}
            {/* <p className="text-black mb-2 xl:mb-4"> */}
            <motion.p
              className="text-black mb-2 xl:mb-4"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              At Aurex Builders, we believe in building more than structures — we build dreams,
              trust, and lasting relationships. Our vision, "Adorning Lives," reflects our passion
              to create spaces that inspire and enrich the communities we serve.
            </motion.p>

            {/* <p className="text-black mb-2 xl:mb-4"> */}
            <motion.p
              className="text-black mb-2 xl:mb-4"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Every project we undertake carries a promise of quality, integrity, and innovation.
              Guided by these values, we continue to craft landmarks that stand the test of time
              and touch lives in meaningful ways.
            {/* </p> */}
          </motion.p>

            {/* <p className="text-black mb-2 xl:mb-4"> */}
            <motion.p
              className="text-black mb-2 xl:mb-4"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Our journey is driven by people — our clients, our team, and our partners — whose
              trust fuels our commitment to excellence. Together, we aim to shape a future where
              every Aurex creation becomes a symbol of beauty, purpose, and pride.
            {/* </p> */}
            </motion.p>

          {/* </div> */}</motion.div>


          {/* NAME BLOCK */}
          {/* <div className="mt-2 xl:mt-4"> */}
          <motion.div
            className="mt-2 xl:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">AJITH POOLOTH –</h4>
            <p className="font-urban font-bold text-[14px] lg:text-[16px] leading-[24px]">
              Chairman, Aurex Builders
            </p>
            </motion.div>
          {/* </div> */}

          {/* SIGNATURE (POSITIONED EXACTLY LIKE IMAGE) */}
          <motion.div
            className="absolute bottom-4 md:bottom-6 right-6 lg:-right-10 w-[78px] md:w-[80px] lg:w-[90px] xl:w-[140px]"
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: -8 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
          {/* <div className=" absolute bottom-4 md:bottom-6 right-6 lg:-right-10 w-[78px] md:w-[80px] lg:w-[90px] xl:w-[140px]"> */}
            <Image
              src="/images/home/signature.png"
              alt="signature"
              width={200}
              height={100}
              className="rotate-[-8deg] opacity-999"
            />
          {/* </div> */}
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}
        <div className="mt-6 md:mt-0 relative h-[420px] md:h-auto lg:h-[464px] overflow-hidden">

          {/* Tear effect */}
          <div className="absolute left-25  md:left-0 -top-56 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
            <Image
              src="/images/home/Vector.svg"
              alt="Tear Effect"
              fill
              className="object-fill md:object-cover rotate-90 md:rotate-180 scale-x-[-1] md:scale-x-[1]"
            />
          </div>

          {/* Chairman Image */}
          <div className="relative md:w-fit h-full">
            <Image
              src="/images/home/chairman.png"
              alt="Chairman Photo"
              width={100}
              height={100}
              className="object-cover object-top grayscale w-full h-[420px] md:w-[333px] md:h-full"
            />
          </div>
        </div>

      </section>
    </div>
  );
}

