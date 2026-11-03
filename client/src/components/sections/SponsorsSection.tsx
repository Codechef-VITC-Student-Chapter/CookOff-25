"use client";
import React from "react";
import SponsorCard from "../SponsorCard";
import SectionHeader from "../SectionHeader";
import Navbar from "../Navbar";
import Image from "next/image";

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
    },
    {
      id: 5,
      sponsorName: "ADRIG AI",
      logoUrl: "/Sponsor_Adrig.png",
      tier: "bronze" as const,
    },
  ];

  return (
    <div>
      <section className="w-full bg-black py-10 mb-10">
        <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest sm:max-md:text-center text-3xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          SPONSORS
        </h3>

        {/* Line separator */}
        <div className="w-full h-2 mt-10 relative block top-[396px] md:top-[500px]  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]"></div>
        <div className="w-full h-2  relative block top-[720px] md:top-[540px] md:hidden  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]"></div>
        <div className="w-full h-2  relative bg-linear-to-r top-12 from-[#999999] via-[#FFFFFF] to-[#999999]"></div>

        {/* Sponsors grid */}
        <>
          {/* 💻 Laptop & Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-y-8 gap-x-6 px-20 mt-10">
            {/* First row (3 cards) */}
            {sponsors.slice(0, 3).map((sponsor) => (
              <div key={sponsor.id} className="flex justify-center">
                <SponsorCard
                  sponsorName={sponsor.sponsorName}
                  logoUrl={sponsor.logoUrl}
                  tier={sponsor.tier}
                />
              </div>
            ))}

            {/* Second row (2 centered cards) */}
            <div className="col-span-3 flex justify-around  ">
              {sponsors.slice(3).map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsorName={sponsor.sponsorName}
                  logoUrl={sponsor.logoUrl}
                  tier={sponsor.tier}
                />
              ))}
            </div>
          </div>

          {/* 📱 Mobile & Tablet View */}
          <div className="grid md:hidden grid-cols-2 gap-y-8 gap-x-6 px-6 mt-10 place-items-center">
            {sponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsorName={sponsor.sponsorName}
                logoUrl={sponsor.logoUrl}
                tier={sponsor.tier}
              />
            ))}
          </div>
        </>



      </section>
    </div>
  );
};

export default SponsorsSection;
