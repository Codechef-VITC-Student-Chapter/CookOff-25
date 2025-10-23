"use client";
import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Navbar from "../Navbar";

const PrizesSection = () => {
    return (
        <div className="bg-[#1a1a1a]">
            <Navbar />
            <SectionHeader>PRIZES</SectionHeader>

            {/* PRIZE CONTAINER */}
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-10 relative z-20 ">
                {/* Silver Prize Stack */}
                <div className="flex flex-col items-center ">
                    <Image src="/PrizeSection_silverhead.svg" alt="silverhead" className="relative top-15 right-8" width={300} height={200} />
                    <div className="w-70 h-70 rounded-full flex justify-center items-center [background:radial-gradient(50.87%_52.36%_at_50%_50%,_rgba(255,255,255,0.4)_0%,_rgba(153,153,153,0)_93.35%)]">
                        <p className="font-cerapro font-medium text-7xl" >$$$$$</p>
                    </div>
                    <div className="relative">
                         <p className="absolute inset-0 flex items-center justify-center mb-20 font-cerapro font-black text-black text-4xl whitespace-nowrap z-10">
                            Cous Chef
                        </p>
                        <Image src="/PrizeSection_silverbase.svg" alt="silverbase" className="relative bottom-20 " width={330} height={200} />
                    </div>
                </div>

                {/* Gold Prize Stack */}
                <div className="flex flex-col items-center ">
                    <Image src="/PrizeSection_goldhead.svg" alt="goldhead" className="relative top-15" width={300} height={200} />
                    <div className="w-70 h-70 rounded-full flex justify-center items-center [background:radial-gradient(50.87%_52.36%_at_50%_50%,_rgba(255,198,54,0.4)_0%,_rgba(153,153,153,0)_93.35%)]">
                        <p className="font-cerapro font-medium text-7xl" >$$$$$</p>
                    </div>
                    <div className="relative">

                         <p className="absolute inset-0 flex items-center justify-center mb-20 font-cerapro font-black text-black text-4xl whitespace-nowrap z-10">
                            Master Chef
                        </p>
                        <Image src="/PrizeSection_goldbase.svg" alt="goldbase" className="relative bottom-20" width={350} height={200} />
                    </div>
                </div>

                {/* Bronze Prize Stack */}
                <div className="flex flex-col items-center ">
                    <Image src="/PrizeSection_bronzehead.svg" alt="bronzehead" className="relative top-20 left-8" width={300} height={200} />
                    <div className="w-70 h-70 rounded-full flex justify-center items-center [background:radial-gradient(50.87%_52.36%_at_50%_50%,_#9F714C_0%,_rgba(57,41,27,0)_100%)]">
                        <p className="font-cerapro font-medium text-7xl" >$$$$$</p>
                    </div>

                    <div className="relative bottom-10">
                        <p className="absolute inset-0 flex items-center mt-6 justify-center font-cerapro font-black text-black text-4xl whitespace-nowrap z-10">
                            Line Cook
                        </p>
                        <Image src="/PrizeSection_bronzebase.svg" alt="bronzebase" className="relative " width={330} height={200} />

                    </div>

                </div>
                
            </div>

            {/* ECLIPSE CONTAINER */}
            <div className="w-full h-60  relative bottom-40">
                <Image
                    src="/PrizeSection_baseeclipse.svg"
                    alt="Base eclipse"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default PrizesSection;
