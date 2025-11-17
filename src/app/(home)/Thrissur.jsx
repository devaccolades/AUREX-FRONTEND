"use client";

import Image from "next/image";
import bgImage from "../../../public/images/home/tsr.webp";
import mapImage from "../../../public/images/home/tsrmap.png";

export default function Thrissur() {
    return (
        <section className="relative w-full rounded-3xl overflow-hidden h-[650px] md:h-[580px]">
            {/* Background Image */}
            <Image
                src={bgImage}
                alt="Thrissur Background"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />


            {/* Content Wrapper */}
            <div className="flex flex-col  md:flex-row absolute inset-0 z-10  items-center">
                <div className="flex  flex-col md:flex-row px-6 md:px-12  items-center ">

                    {/* LEFT SIDE → Map + Malayalam Heading */}
                    <div className="flex  items-start md:items-center "> 
                        {/* Map Image (fixed at bottom-left area) */}
                        <Image
                            src={mapImage}
                            alt="Kerala Map Highlight"
                            className="w-100 md:w-140 lg:w-100 object-cover translate-y-28 md:translate-y-35 ml-0 md:-ml-10 lg:ml-0 xl:ml-16"
                        />

                        <div className="">
                            <h1 className="absolute text-white text-[28px] xl:text-4xl font-semibold leading-snug -ml-70 md:-ml-66 lg:-ml-86 xl:-ml-76 mt-40 md:mt-16 lg:mt-26 ">
                                തൃശ്ശൂരിന്റെ <br />
                                ഹൃദയത്തിൽ,
                                <br className="md:hidden" />    {/* shows only on mobile */}
                                <span className="hidden md:inline">
                                    <br className="lg:hidden" />  {/* visible on md but hidden on lg */}
                                </span>
                                നിങ്ങളുടെ<br />
                                സ്വപ്നങ്ങൾക്കായി.
                            </h1>
                        </div>

                    </div>



                    <div className="ml-0  lg:ml-30  xl:ml-70 top-1/2 translate-y-[160px] md:translate-y-[140px]">

                        <div>
                            <p className="max-w-xl text-[13px] text-white/85 leading-[18px] ">
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
