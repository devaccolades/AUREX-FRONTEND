"use client";
import Image from "next/image";
import React from "react";



export default function LeadershipPillers() {
    return (
        <div className="py-6  mb-5">
            <div className="w-full text-center flex flex-col items-center justify-center">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium font-urban leading-[28px] md:leading-[32px] lg:leading-[36px] text-center">
                    Leadership Behind Thrissur's Trusted Construction Company — Meet Our Team

                </h2>
                <p className="text-black mb-2 xl:mb-4 text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]">
                   Their shared vision, experience, and dedication form the backbone of Aurex Builders — inspiring every project and every promise we make.

                </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-10">
                {/* leader1 */}
                <section className="relative container items-stretch  bg-[#F5F5F5] flex flex-col-reverse md:flex-row justify-between rounded-[10px] overflow-hidden border border-gray-400 mt-10 ">

                    {/* Corner Highlights */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-[10px]" />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-[10px]" />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-[10px]" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-[10px]" />


                    {/* LEFT SIDE – White Content Box */}
                    {/* <div className="relative  md:w-[59%] lg:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 "> */}
                    <div className="relative md:w-[59%] lg:w-[60%] xl:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 flex flex-col min-h-full">

                        <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5">
                            Chairman’s Message
                        </h2>


                        <div className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]  xl:leading-[22px] leading-[20px]">
                            <p className="text-black mb-2 xl:mb-4">
                                We build to carefully adorn lives. Every structure we craft holds a deep, special purpose. 
                                We deliver high quality with a very clear conscience. I am deeply proud of our honest and highly skilled team.                               
                            </p>

                            <p className="text-black mb-2 xl:mb-4">
                                Together, we actively shape a brighter future one brick at a time. We treat every new home like our very own.
                                  We build strong bonds with every family we serve.
                            </p>

                            <p className="text-black mb-2 xl:mb-4">
                                As we move forward, we remain steadfast in our commitment to sustainability,
                                transparency, and excellence — ensuring that every home we deliver contributes
                                to a brighter, more beautiful community.
                            </p>


                        </div>

                        {/* NAME BLOCK */}
                        {/* BOTTOM CONTENT */}
                        <div className="mt-auto pt-4">
                            <p className="text-[14px] md:text-[16px] lg:text-[16px] leading-[156%] text-black">
                                Thank you for being part of our journey. Together, let’s continue shaping the future
                                <span className="font-bold"> — one brick at a time.</span>
                            </p>

                            {/* NAME BLOCK */}
                            <div className="mt-2 xl:mt-4">
                                <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">
                                    AJITH POOLOTH –
                                </h4>
                                <p className="font-urban font-normal text-[12px] lg:text-[14px] leading-[24px]">
                                    Chairman, Aurex Builders
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}

                    {/* <div className="mt-6 md:mt-0 relative h-full  md:h-auto lg:h-[464px] overflow-hidden"> */}
                    <div className="mt-0 md:mt-0 p-0 md:p-4 relative h-[340px] md:h-auto lg:h-[464px] overflow-hidden">

                        {/* Tear effect */}
                        <div className="absolute right-15  md:left-0 -bottom-46 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
                            <Image
                                src="/images/about/teared.svg"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                fill
                                className="object-fill md:object-cover rotate-90 md:rotate-180 scale-x-[-1] md:scale-x-[1]"
                            />
                        </div>


                        {/* Chairman Image */}
                        <div className="relative md:w-fit bg-white rounded-[5px] h-full">
                            <Image
                                src="/images/about/leader1.png"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                width={100}
                                height={100}
                                className="object-cover object-top  w-full h-[420px] md:w-[333px] md:h-full rounded-[5px]"
                            />
                        </div>

                    </div>

                </section>


                {/* leader2 */}
                <section className="relative container items-stretchmt-20 bg-[#F5F5F5] flex flex-col-reverse md:flex-row-reverse justify-between rounded-[10px] overflow-hidden border border-gray-400 ">

                    {/* Corner Highlights */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-[10px]" />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-[10px]" />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-[10px]" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-[10px]" />

                    {/* LEFT SIDE – White Content Box */}
                    {/* <div className="relative  md:w-[59%] lg:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 "> */}
                    <div className="relative md:w-[59%] lg:w-[60%] xl:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 flex flex-col min-h-full">

                        <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5">
                            M D’s Leadership Journey
                        </h2>

                        <div className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]  xl:leading-[22px] leading-[20px]">

                            <p className="text-black mb-2 xl:mb-4">
                                Balachandran brings over three decades of deep real estate experience. 
                                He built a massive reputation rooted in pure, absolute trust.
                                 His forward-thinking approach drives huge value in every single venture.
                                  
                            </p>
                            <p className="text-black mb-2 xl:mb-4">
                                He successfully ensures sustainable growth across all our new building projects.
                                   He knows exactly how to navigate complex building challenges. 
                                   His calm guidance keeps our massive projects perfectly on track.
                            </p>
                            <p className="text-black mb-2 xl:mb-4">
                                Known for his integrity and strong professional network, Balachandran remains a respected and influential figure in real estate.
                                He continues to drive value, vision, and sustainable growth in every venture he undertakes.
                            </p>


                        </div>

                        {/* NAME BLOCK */}
                        {/* BOTTOM CONTENT */}
                        <div className="mt-auto pt-4">
                            <p className="text-[14px] md:text-[16px] lg:text-[16px] leading-[156%] text-black">
                                Belief in “Adorning Lives “has been the most inspiring and driving factor for
                                <span className="font-bold"> AUREX’s success.</span>
                            </p>

                            {/* NAME BLOCK */}
                            <div className="mt-2 xl:mt-4">
                                <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">
                                    BALACHANDRAN
                                </h4>
                                <p className="font-urban font-normal text-[12px] lg:text-[14px] leading-[24px]">
                                    Managing Director, Aurex Builders
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}

                    {/* <div className="mt-6 md:mt-0 relative h-full  md:h-auto lg:h-[464px] overflow-hidden"> */}
                    <div className="mt-0 md:mt-0 p-0 md:p-4 relative h-[340px] md:h-auto lg:h-[464px] overflow-hidden">

                        {/* Tear effect */}
                        <div className=" absolute right-15  md:right-0 -bottom-46 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
                            <Image
                                src="/images/about/teared.svg"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                fill
                                className="object-fill md:object-cover rotate-90  md:rotate-180 scale-x-[-1] md:scale-x-[-1]"
                            />
                        </div>

                        {/* Chairman Image */}
                        <div className="relative md:w-fit bg-white rounded-[5px] h-full">
                            <Image
                                src="/images/about/leader2.png"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                width={100}
                                height={100}
                                className="object-cover object-top  w-full h-[420px] md:w-[333px] md:h-full rounded-[5px]"
                            />
                        </div>
                    </div>

                </section>

                {/* leader3 */}
                <section className="relative container items-stretch bg-[#F5F5F5] flex flex-col-reverse md:flex-row justify-between rounded-[10px] overflow-hidden border border-gray-400 mt-10 ">

                    {/* Corner Highlights */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-[10px]" />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-[10px]" />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-[10px]" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-[10px]" />


                    {/* LEFT SIDE – White Content Box */}
                    {/* <div className="relative  md:w-[59%] lg:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 "> */}
                    <div className="relative md:w-[59%] lg:w-[60%] xl:w-[70%]  p-2 md:p-4 lg:p-4 xl:p-8 flex flex-col min-h-full">



                        <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5">
                            DIRECTOR’s Leadership Journey
                        </h2>


                        <div className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]  xl:leading-[22px] leading-[20px]">
                            <p className="text-black mb-2 xl:mb-4">
                                Ajith Kumar brings rich global business exposure back to Kerala. 
                                He boldly bridges high international standards with strong local aspirations. 
                                He introduces modern infrastructure that deeply respects our rich culture. 
                                
                            </p>

                            <p className="text-black mb-2 xl:mb-4">
                                His bold vision perfectly balances heritage with fast, forward thinking. 
                                He constantly pushes our team to reach higher design goals. 
                                He wants every local family to enjoy world-class home comforts.
                            </p>
                            <p className="text-black mb-2 xl:mb-4">
                                By bringing modern infrastructure that respects culture and tradition, Ajith Kumar aims to shape a brighter, progressive future.
                                His work reflects a balance between heritage, growth, and forward thinking.
                            </p>


                        </div>

                        {/* NAME BLOCK */}
                        {/* BOTTOM CONTENT */}
                        <div className="mt-auto pt-4">
                            <p className="text-[14px] md:text-[16px] lg:text-[16px] leading-[156%] text-black">
                                Thank you for being part of our journey. Together, let’s continue shaping the future
                                <span className="font-bold">— one brick at a time.</span>
                            </p>

                            {/* NAME BLOCK */}
                            <div className="mt-2 xl:mt-4">
                                <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">
                                    AJITH KUMAR
                                </h4>
                                <p className="font-urban font-normal text-[12px] lg:text-[14px] leading-[24px]">
                                    Director, Aurex Builders
                                </p>
                            </div>
                        </div>



                    </div>

                    {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}

                    {/* <div className="mt-6 md:mt-0 relative h-full  md:h-auto lg:h-[464px] overflow-hidden"> */}
                    <div className="mt-0 md:mt-0 p-0 md:p-4 relative h-[340px] md:h-auto lg:h-[464px] overflow-hidden">

                        {/* Tear effect */}
                        <div className=" absolute right-15  md:left-0 -bottom-46 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
                            <Image
                                src="/images/about/teared.svg"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                fill
                                className="object-fill md:object-cover rotate-90 md:rotate-180 scale-x-[-1] md:scale-x-[1]"
                            />
                        </div>


                        {/* Chairman Image */}
                        <div className="relative md:w-fit bg-white rounded-[5px] h-full">
                            <Image
                                src="/images/about/leader3.png"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                width={100}
                                height={100}
                                className="object-cover object-top  w-full h-[420px] md:w-[333px] md:h-full rounded-[5px]"
                            />
                        </div>


                    </div>

                </section>

                {/* leader4 */}
                <section className="relative container  items-stretch mt-20 bg-[#F5F5F5] flex flex-col-reverse md:flex-row-reverse justify-between rounded-[10px] overflow-hidden border border-gray-400 ">

                    {/* Corner Highlights */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-[10px]" />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-[10px]" />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-[10px]" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-[10px]" />

                    {/* LEFT SIDE – White Content Box */}
                    {/* <div className="relative  md:w-[59%] lg:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 "> */}
                    <div className="relative md:w-[59%] lg:w-[60%] xl:w-[70%] p-2 md:p-4 lg:p-4 xl:p-8 flex flex-col min-h-full ">


                        <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-medium font-urban leading-[20px] md:leading-[28px] lg:leading-[34px] mb-2 xl:mb-5">
                            DIRECTOR’s Leadership Journey
                        </h2>

                        <div className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]  xl:leading-[22px] leading-[20px]">
                            <p className="text-black mb-2 xl:mb-4">
                               Suresh Kumar brings deep global insight straight from the GCC. 
                               He strongly focuses on elevating local living standards in Kerala. 
                               He introduces world-class designs and highly smart building technologies. 
                               


                            </p>
                            <p className="text-black mb-2 xl:mb-4">
                                He builds a grand lifestyle that embodies deep local pride. 
                               He believes great architecture completely transforms daily human life. 
                               He works hard to deliver unmatched elegance and deep comfort.

                            </p>

                            <p className="text-black mb-2 xl:mb-4">
                                By introducing world-class living, modern technologies, and innovative designs, Suresh Kumar aims to create more than structures.
                                He is building a lifestyle that embodies pride, progress, and a heartfelt connection to home.

                            </p>


                        </div>


                        {/* BOTTOM CONTENT */}
                        <div className="mt-auto pt-4">
                            <p className="text-[14px] md:text-[16px] lg:text-[16px] leading-[156%] text-black">
                                Belief in “Adorning Lives “has been the most inspiring and driving factor for
                                <span className="font-bold"> AUREX’s success.</span>
                            </p>

                            {/* NAME BLOCK */}
                            <div className="mt-2 xl:mt-4">
                                <h4 className="font-bold font-urban text-[14px] lg:text-[16px]">
                                    SURESH KUMAR
                                </h4>
                                <p className="font-urban font-normal text-[12px] lg:text-[14px] leading-[24px]">
                                    Director, Aurex Builders
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE WITH TEAR EDGE + IMAGE */}

                    {/* <div className="mt-6 md:mt-0 relative h-full  md:h-auto lg:h-[464px] overflow-hidden"> */}
                    <div className="mt-0 md:mt-0 p-0 md:p-4 relative h-[340px] md:h-auto lg:h-[464px] overflow-hidden">

                        {/* Tear effect */}
                        <div className=" absolute right-15  md:right-0 -bottom-46 md:top-0 h-full w-full md:w-[46px] lg:w-[42px] z-20 block ">
                            <Image
                                src="/images/about/teared.svg"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                fill
                                className="object-fill md:object-cover rotate-90  md:rotate-180 scale-x-[-1] md:scale-x-[-1]"
                            />
                        </div>

                        {/* Chairman Image */}
                        <div className="relative md:w-fit bg-white rounded-[5px] h-full">
                            <Image
                                src="/images/about/leader4.png"
                                alt="trusted-construction-company-thrissur-aurex-project"
                                width={100}
                                height={100}
                                className="object-cover object-top  w-full h-[420px] md:w-[333px] md:h-full rounded-[5px]"
                            />
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}



