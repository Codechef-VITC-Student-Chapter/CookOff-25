"use client";
import React from "react";
import Image from "next/image";

const PrizesSection = () => {
    return (
        <div className="bg-[#121212] relative overflow-hidden">

            <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest sm:max-md:text-center  text-3xl bg-linear-to-r from-white to-gray-400 mt-20 bg-clip-text text-transparent">PRIZES</h3>

            {/* PRIZE CONTAINER */}
            <div className="flex flex-col md:flex-row md:justify-around  items-center relative z-20">

                {/* Gold Prize Stack - Order 1 on mobile, Order 2 on desktop */}
                <div className="flex flex-col items-center order-1 md:order-2">
                    <Image
                        src="/PrizeSection_goldhead.svg"
                        alt="goldhead"
                        className="relative w-full mt-20 max-w-[210px] h-auto -top-4"
                        width={300}
                        height={200}
                    />

                    {/* Glow */}
                    <div className="w-44 h-44 rounded-full flex justify-center items-center
                        bg-[radial-gradient(circle,rgba(255,198,54,0.45)_0%,rgba(255,198,54,0)_80%)]
                        blur-xl shadow-lg">
                    </div>
                    <p className="font-cerapro font-medium relative bottom-30 text-6xl">$$$$$$$</p>

                    <div className="relative">
                        <p className="absolute inset-0 flex items-center justify-center mb-20 font-cerapro font-black text-black text-3xl whitespace-nowrap z-10">
                            Master Chef
                        </p>
                        <Image
                            src="/PrizeSection_goldbase.svg"
                            alt="goldbase"
                            className="relative w-full max-w-[230px]  -top-20"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>

                {/* Silver Prize Stack - Order 2 on mobile, Order 1 on desktop */}
                <div className="flex flex-col items-center order-2 md:order-1">
                    <Image
                        src="/PrizeSection_silverhead.svg"
                        alt="silverhead"
                        className="relative w-full max-w-[250px] h-auto -left-7 -top-2"
                        width={300}
                        height={200}
                    />

                    {/* Glow */}
                    <div className="w-40 h-40 rounded-full flex justify-center items-center
                        bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_75%)]
                        blur-xl">
                    </div>
                    <p className="font-cerapro font-medium relative bottom-30 text-6xl">$$$$$$$</p>

                    <div className="relative">
                        <p className="absolute inset-0 flex items-center justify-center mb-20 font-cerapro font-black text-black text-3xl whitespace-nowrap z-10">
                            Sous Chef
                        </p>
                        <Image
                            src="/PrizeSection_silverbase.svg"
                            alt="silverbase"
                            className="relative w-full max-w-[250px] h-auto -top-16"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>

                {/* Bronze Prize Stack - Order 3 on both mobile and desktop */}
                <div className="flex flex-col items-center order-3">
                    <Image
                        src="/PrizeSection_bronzehead.svg"
                        alt="bronzehead"
                        className="relative w-full max-w-[250px] h-auto -top-2 -right-6"
                        width={300}
                        height={200}
                    />

                    {/* Glow */}
                    <div className="w-40 h-40 rounded-full flex justify-center items-center
                        bg-[radial-gradient(circle,rgba(159,113,76,0.6)_0%,rgba(159,113,76,0)_80%)]
                        blur-xl">
                    </div>
                    <p className="font-cerapro font-medium font-white relative bottom-30 text-6xl">$$$$$$</p>

                    <div className="relative -top-10">
                        <p className="absolute inset-0 flex items-center justify-center mt-4 font-cerapro font-black text-black text-3xl whitespace-nowrap z-10">
                            Line Cook
                        </p>
                        <Image
                            src="/PrizeSection_bronzebase.svg"
                            alt="bronzebase"
                            className="relative w-full max-w-[250px] h-auto"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>

            </div>

            {/* BASE GRADIENT */}
            <div className="w-full h-44 md:h-60 bottom-40 relative z-0">
                <Image
                    src="/PrizeSection_baseeclipse.svg"
                    alt="Base eclipse"
                    className="bottom"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

        </div>
    );
};

export default PrizesSection;