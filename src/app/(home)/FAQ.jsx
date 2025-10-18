"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What makes Aurex Builders different from other builders in Thrissur?",
    answer:
      "Aurex Builders stands apart for our commitment to quality, transparency, and on-time project delivery. Every detail — from design to finishing — reflects our dedication to creating homes that combine modern living with the essence of Thrissur’s charm.",
  },
  {
    id: 2,
    question: "Do you offer ready-to-move-in apartments or only ongoing projects?",
    answer:
      "We offer both ready-to-move-in and ongoing projects, giving customers flexibility based on their timelines and preferences.",
  },
  {
    id: 3,
    question: "Can I customize the interiors of my apartment?",
    answer:
      "Yes, Aurex Builders allows interior customization options so homeowners can personalize their spaces to reflect their unique style.",
  },
  {
    id: 4,
    question: "How do you ensure the quality of construction?",
    answer:
      "We use top-grade materials and follow stringent quality control procedures at every stage of construction to ensure durability and excellence.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="containers py-20   bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[24px] leading-[24px] font-urban font-semibold mb-6 text-gray-800 tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gray-100 border-gray-300"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span
                    className={`leading-snug font-medium font-urban transition-all duration-300 ${
                      openIndex === index
                        ? "text-[20px] text-gray-900"
                        : "text-[16px] text-gray-800"
                    }`}
                  >
                    {index + 1}. {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-600" />
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
                      <div className=" px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                Building Dreams in the Heart of Thrissur
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed">
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
