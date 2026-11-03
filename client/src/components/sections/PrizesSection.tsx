"use client";
import React from "react";
import Image from "next/image";

const PrizesSection = () => {
    return (
        <div className="bg-black relative overflow-hidden">

            <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest sm:max-md:text-center  text-3xl bg-linear-to-r from-white to-gray-400 mt-20 bg-clip-text text-transparent">PRIZES</h3>

            {/* PRIZE CONTAINER */}
            <div className="flex flex-col  md:flex-row md:justify-around  items-center relative z-20">

                {/* Gold Prize Stack - Order 1 on mobile, Order 2 on desktop */}
                <div className="flex flex-col items-center order-1 md:order-2">
                    {/* 🏆 Head */}
                    <Image
                        src="/PrizeSection_goldhead.svg"
                        alt="goldhead"
                        className="relative mt-14 md:mt-20 h-auto -top-2 md:-top-4 
      w-[150px] sm:w-[180px] md:w-[200px] lg:w-60"
                        width={300}
                        height={200}
                    />

                    {/* ✨ Glow */}
                    <div
                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full flex justify-center items-center
      bg-[radial-gradient(circle,rgba(255,198,54,0.45)_0%,rgba(255,198,54,0)_80%)]
      blur-lg md:blur-xl shadow-lg"
                    ></div>

                    {/* ###### */}
                    <p className="font-cerapro font-medium relative bottom-20 md:bottom-30 text-2xl sm:text-3xl md:text-4xl">
                        Name
                    </p>

                    {/* 🥇 Base & Title */}
                    <div className="relative">
                        <p className="absolute inset-0 flex items-center justify-center bottom-10 md:bottom-13 mb-14 md:mb-20 font-cerapro font-black text-black text-2xl sm:text-3xl whitespace-nowrap z-10">
                            Master Chef
                        </p>
                        <Image
                            src="/PrizeSection_goldbase.svg"
                            alt="goldbase"
                            className="relative -top-16 md:-top-20 h-auto w-[180px] sm:w-[210px] md:w-[230px] lg:w-[260px]"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>




                {/* Silver Prize Stack - Order 2 on mobile, Order 1 on desktop */}
                <div className="flex flex-col items-center order-2 md:order-1">
                    {/* 🥈 Silver Head */}
                    <Image
                        src="/PrizeSection_silverhead.svg"
                        alt="silverhead"
                        className="relative h-auto -left-5 sm:-left-6 md:-left-7 -top-1 md:-top-2
      w-[160px] sm:w-[190px] md:w-[220px] lg:w-[260px]"
                        width={300}
                        height={200}
                    />

                    {/* ✨ Glow */}
                    <div
                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full flex justify-center items-center
      bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_75%)]
      blur-lg md:blur-xl"
                    ></div>

                    {/* $$$$$$$ */}
                    <p className="font-cerapro font-medium relative bottom-20 md:bottom-30 text-2xl sm:text-3xl md:text-4xl">
                        Name
                    </p>

                    {/* 🪙 Base & Title */}
                    <div className="relative">
                        <p className="absolute inset-0 flex items-center bottom-8 md:bottom-5 justify-center mb-14 md:mb-20 font-cerapro font-black text-black text-2xl sm:text-3xl whitespace-nowrap z-10">
                            Sous Chef
                        </p>
                        <Image
                            src="/PrizeSection_silverbase.svg"
                            alt="silverbase"
                            className="relative h-auto -top-14 md:-top-16
        w-[180px] sm:w-[210px] md:w-[230px] lg:w-[270px]"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>



                {/* Bronze Prize Stack - Order 3 on both mobile and desktop */}
                <div className="flex flex-col items-center order-3">
                    {/* 🥉 Bronze Head */}
                    <Image
                        src="/PrizeSection_bronzehead.svg"
                        alt="bronzehead"
                        className="relative h-auto -top-1 md:-top-2 -right-3 sm:-right-4 md:-right-6
      w-[160px] sm:w-[190px] md:w-[210px] lg:w-[250px]"
                        width={300}
                        height={200}
                    />

                    {/* ✨ Glow */}
                    <div
                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full flex justify-center items-center
      bg-[radial-gradient(circle,rgba(159,113,76,0.6)_0%,rgba(159,113,76,0)_80%)]
      blur-lg md:blur-xl"
                    ></div>

                    {/* $$$$$$ */}
                    <p className="font-cerapro font-medium text-white relative bottom-20 md:bottom-30 text-2xl sm:text-3xl md:text-4xl">
                       Name 
                    </p>

                    {/* 🪙 Base & Title */}
                    <div className="relative -top-6 md:-top-10">
                        <p className="absolute inset-0 flex top-3 sm:top-4 items-center justify-center mt-2 sm:mt-4 font-cerapro font-black text-black text-2xl sm:text-3xl whitespace-nowrap z-10">
                            Line Cook
                        </p>
                        <Image
                            src="/PrizeSection_bronzebase.svg"
                            alt="bronzebase"
                            className="relative h-auto
        w-[170px] sm:w-[200px] md:w-[220px] lg:w-[260px]"
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
