"use client";
import React from "react";
import SponsorCard from "../SponsorCard";
import SectionHeader from "../SectionHeader";
import Navbar from "../Navbar";
import Image from "next/image";
import { useState } from "react";

const SponsorsSection = () => {
  const sponsors = [
    {
      id: 1,
      sponsorName: "CESTRUM",
      logoUrl: "/Sponsor_Cestrum.jpg",
      tier: "gold" as const,
    },
    {
      id: 2,
      sponsorName: "CITTAA",
      logoUrl: "/Sponsor_Cittaa.png",
      tier: "silver" as const,
    },
    {
      id: 3,
      sponsorName: "GRAB ON",
      logoUrl: "/Sponsor_GrabOn.jpg",
      tier: "bronze" as const,
    },
    {
      id: 4,
      sponsorName: "MGM HEALTHCARE",
      logoUrl: "/Sponsor_Mgm.png",
      tier: "bronze" as const,
    }
  ];


  return (
    <div>
      <section className="w-full bg-[#121212] py-10 mb-10">
        <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest sm:max-md:text-center text-3xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">SPONSORS</h3>

        {/* Line separator */}
        <div className="w-full h-2 mt-10 relative block top-[388px] md:top-[392px] md:hidden  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]">
        </div>
        <div className="w-full h-2 mt-10 top-2 relative  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]">
        </div>


        {/* Sponsors row */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-y-8  px-3  ">
          {sponsors.map((sponsor) => (
            
            <SponsorCard
              key={sponsor.id}
              sponsorName={sponsor.sponsorName}
              logoUrl={sponsor.logoUrl}
              tier={sponsor.tier}
              />
              
          ))}
        </div>
      </section>
    </div>
  );
};

export default SponsorsSection;
