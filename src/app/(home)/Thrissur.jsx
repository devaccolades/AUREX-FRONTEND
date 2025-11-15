"use client";

import Image from "next/image";
import bgImage from "../../../public/images/home/tsr.webp";
import mapImage from "../../../public/images/home/tsrmap.png";

export default function Thrissur() {
    return (
        <section className="relative w-full rounded-3xl overflow-hidden h-[500px] md:h-[580px]">
            {/* Background Image */}
            <Image
                src={bgImage}
                alt="Thrissur Background"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />


            {/* Content Wrapper */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="px-6 md:px-16 flex items-center gap-6 md:gap-10">

                    {/* LEFT SIDE → Map + Malayalam Heading */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Map Image (fixed at bottom-left area) */}
                        <Image
                            src={mapImage}
                            alt="Kerala Map Highlight"
                            className="w-22 md:w-100 object-contain translate-y-35 ml-16"
                        />

                    </div>
                    <div className="flex flex-col-2 gap-6 md:gap-10 mr-26 top-1/2 translate-y-[100px]">
                        <div className="">
                            <h1 className=" text-white text-xl md:text-xl font-bold leading-snug -ml-6 mt-10 ">
                                തൃശ്ശൂരിന്റെ <br />
                                ഹൃദയത്തിൽ, നിങ്ങളുടെ<br />
                                സ്വപ്നങ്ങൾക്കായി.
                            </h1>
                        </div>
                        <div>

                            {/* RIGHT SIDE → English Paragraph */}
                            <p className="max-w-md text-[14px] text-white/85 leading-[18px] ">
                                Known as the Cultural Capital of Kerala, Thrissur is where tradition,
                                architecture, and artistry come alive. From the grand spectacle of
                                Thrissur Pooram to the timeless grace of its temples and palaces, the
                                city embodies a heritage that inspires every creation we build.
                                <br /><br />
                                At Aurex Builders, being rooted in Thrissur means embracing a legacy
                                of beauty, craftsmanship, and celebration. Our designs draw inspiration
                                from the city’s vibrant festivals, timeless architecture, and the
                                warmth of its people — blending modern elegance with cultural soul.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}
