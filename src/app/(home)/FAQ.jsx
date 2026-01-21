"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
const GlassSurface = dynamic(
  () => import('@/components2/GlassSurface'),
  {
    // Important: Setting ssr: false tells Next.js NOT to render this component on the server.
    ssr: false
  }
);

const FAQ = ({data}) => {
  const [openIndex, setOpenIndex] = useState(0);
  console.log('faqs are :',data);
  
  return (
    <section className="relative py-8 md:py-16 lg:py-20   ">
      <div className="absolute inset-0 flex w-full h-full justify-start opacity-26 pointer-events-none">
        <Image
          src="/images/home/faq-bg.svg"
          alt="decor-left"
          fill
          className="object-cover md:object-contain md:object-left w-full h-full"
        />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] font-urban font-bold mb-6 text-gray-800 tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>

        

          <div className="space-y-4">
            {data.map((faq, index) => (
              <GlassSurface
                key={faq.id}
                borderRadius={18}
                height="auto"
                width="100%"
                className="flex flex-col items-start justify-start p-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-start text-left p-3 lg:p-4"
                >
                  <span
                    className={`max-w-[220px] md:max-[400px] lg:max-w-[370px] xl:max-w-[420px]  font-bold text-[14px] md:text-[16px] leading-[18px] md:leading-[24px] font-urban transition-all duration-300 ${openIndex === index
                        ? "text-[18px] md:text-[20px] text-gray-900"
                        : "text-[14px] md:text-[18px] text-gray-800"
                      }`}
                  >
                    {index + 1}. {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="h-4 md:h-8 w-4 md:w-8 text-black font-bold" />
                  ) : (
                    <Plus className="h-4 md:h-8 w-4 md:w-8 text-black font-bold" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 leading-[18px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassSurface>
            ))}
          </div>




        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <h3 className="font-urban font-bold text-[16px] lg:text-[18px] leading-[24px] text-gray-800 t mb-1">
                Building Dreams in the Heart of Thrissur
              </h3>
              <p className="text-gray-600  font-normal text-[12px] lg:text-[14px] leading-[18px]">
                At Aurex Builders, we believe a great building begins with a great vision.
                Rooted in the vibrant culture of Thrissur, we’ve been shaping the skyline with
                residential and commercial projects that combine modern aesthetics with enduring
                quality. Each space we create reflects thoughtful design, structural strength, and
                a commitment to the people who make Thrissur home. Whether it’s a dream villa,
                apartment, or a commercial property, our goal is simple — to bring your vision to
                life with precision and trust.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
