"use client"
import React from 'react';
import { clientData } from "@/data/client";
import Image from 'next/image';

const OurClient = () => {
    return (
        <section className="bg-[#EBF1F4] rounded-md py-12">
            <div className="max-w-[1440px] mx-auto text-center">
                <div className="w-full flex flex-col items-center">
                    <div className='flex justify-center w-full'>
                        <p className="text-green-600 max-w-max px-4 bg-[#DDFBE8] text-center font-medium rounded-full py-1">
                            Our Client
                        </p>
                    </div>
                    <h2 className="lg:text-[2.5rem]/tight md:w-3/5 lg:w-2/5 w-full text-2xl md:text-3xl font-semibold mt-2 text-black">
                        Kepercayaan Mereka, Kebanggaan Kami
                    </h2>
                    
                    {/* Desktop View */}
                    <div className="hidden md:flex flex-wrap justify-center gap-8 mt-12">
                        {[...clientData, { name: "130+ More", logo: "" }].map((data, index) => (
                            <div key={index} className={`${data.logo ? "" : "justify-center"} bg-white flex rounded-lg shadow-md px-3 py-2 max-w-[320px] w-auto items-center text-black gap-4`}>
                                {data.logo ? (
                                    <Image src={data.logo} alt={data.name} className={`h-auto ${data.name ? "w-3/12" : "w-full"}`} />
                                ) : (
                                    <p className="text-lg font-semibold text-gray-700">130+ More</p>
                                )}
                                {data.name && data.logo && (
                                    <p className="text-left text-base font-medium">{data.name}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile View - Auto Scroll */}
                    <div className="relative overflow-hidden w-full mt-12 md:hidden">
                        <div className="flex gap-8 animate-marquee whitespace-nowrap">
                            {[...clientData, { name: "130+ More", logo: "" }, ...clientData, { name: "130+ More", logo: "" }].map((data, index) => (
                                <div key={index} className={`${data.logo ? "" : "justify-center"} bg-white flex items-center rounded-lg shadow-md px-4 py-2 min-w-[300px] w-auto gap-4`}>
                                    {data.logo ? (
                                        <Image src={data.logo} alt={data.name} className={`h-auto flex-shrink-0 ${data.name ? "w-2/12" : "w-full"}`} />
                                    ) : (
                                        <p className="text-lg text-center font-semibold text-gray-700">130+ More</p>
                                    )}
                                    {data.name && data.logo && (
                                        <p className="text-center text-sm font-medium w-auto truncate">
                                            {data.name}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CSS Animasi Marquee */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 35s linear infinite;
                    width: max-content; /* Pastikan animasi berjalan mulus */
                }
                @media (min-width: 768px) {
                    .animate-marquee {
                        animation: none;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurClient;
