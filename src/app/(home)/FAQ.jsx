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
          {/* {[1, 2, 3].map((item) => ( */}
            {/* <div key={item}> */}
            <div>
              <h3 className="font-urban font-bold text-[16px] lg:text-[18px] leading-[24px] text-gray-800 t mb-1">
               Crafting Homes That Fit Your Lifestyle
              </h3>
              <p className="text-gray-600  font-normal text-[12px] lg:text-[14px] leading-[18px]">
                Aurex Builders designs homes that match how you live today. Every layout feels open, bright, and easy to move through.
                We plan spaces that work for families, couples, and busy professionals. Our designs focus on comfort, light, and smart 
                use of space. You will find roomy kitchens, calm bedrooms, and living areas made for real life. We think about storage, 
                airflow, and daily habits. This helps us create homes that feel natural to live in. Your home should support your routine, 
                not restrict it. That is our design promise.
              </p>
            </div>
             <div>
              <h3 className="font-urban font-bold text-[16px] lg:text-[18px] leading-[24px] text-gray-800 t mb-1">
                Quality Construction You Can Truly Trust
              </h3>
              <p className="text-gray-600  font-normal text-[12px] lg:text-[14px] leading-[18px]">
                We build with care, skill, and strong materials that last. Our team checks every stage of work with strict quality steps.
                From the base to the final finish, we follow proven methods. We work with trusted suppliers for steel, cement, and fittings.
                This helps ensure safety and long life. Our site teams inspect work daily to keep standards high. We never rush important steps.
               A strong home needs time and focus. You deserve a space that feels safe and solid. With Aurex Builders, you can trust what stands 
               behind every wall.
              </p>
            </div>
             <div>
              <h3 className="font-urban font-bold text-[16px] lg:text-[18px] leading-[24px] text-gray-800 t mb-1">
                Modern Spaces Rooted in Thrissur Values
              </h3>
              <p className="text-gray-600  font-normal text-[12px] lg:text-[14px] leading-[18px]">
                Thrissur has a rich culture and warm community spirit. We bring that soul into every project we build.
               Our homes mix modern style with local charm. You get sleek designs that still feel familiar. We choose 
               calm colours and clean lines. At the same time, we respect local tastes and needs. Our projects blend 
               into the city with grace. We aim to build more than homes. We build places where memories grow. 
               Each project reflects our love for Thrissur and its people. That bond shapes every space we create.
              </p>
            </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
