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
      sponsorName: "MGM HEALTHCARE",
      logoUrl: "/Sponsor_Mgm.png",
      tier: "bronze" as const,
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
      sponsorName: "CESTRUM",
      logoUrl: "/Sponsor_Cestrum.jpg",
      tier: "gold" as const,
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
        <div className="w-full h-2 mt-10 relative block top-[396px] md:top-[492px]  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]"></div>
        <div className="w-full h-2  relative block top-[720px] md:top-[540px] md:hidden  bg-linear-to-r from-[#999999] via-[#FFFFFF] to-[#999999]"></div>
        <div className="w-full h-2  relative bg-linear-to-r top-12 from-[#999999] via-[#FFFFFF] to-[#999999]"></div>

        {/* Sponsors grid */}
        <>
          {/* 💻 Laptop & Desktop View */}
         {/* 💻 Desktop / Laptop View */}
<div className="hidden md:flex flex-col items-center px-15 mt-10 space-y-10">
  {/* Row 1 - Single card */}
  <div className="flex justify-center w-full">
    {sponsors.slice(0, 1).map((sponsor) => (
      <SponsorCard
        key={sponsor.id}
        sponsorName={sponsor.sponsorName}
        logoUrl={sponsor.logoUrl}
        tier={sponsor.tier}
      />
    ))}
  </div>

  {/* Row 2 - Four cards evenly spaced */}
  <div className="grid grid-cols-4 gap-x-25 w-full justify-items-center">
    {sponsors.slice(1, 5).map((sponsor) => (
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
  {/* Row 1 - Single card centered */}
  <div className="col-span-2 flex justify-center">
    {sponsors.slice(0, 1).map((sponsor) => (
      <SponsorCard
        key={sponsor.id}
        sponsorName={sponsor.sponsorName}
        logoUrl={sponsor.logoUrl}
        tier={sponsor.tier}
      />
    ))}
  </div>

  {/* Row 2 - Two cards */}
  {sponsors.slice(1, 3).map((sponsor) => (
    <SponsorCard
      key={sponsor.id}
      sponsorName={sponsor.sponsorName}
      logoUrl={sponsor.logoUrl}
      tier={sponsor.tier}
    />
  ))}

  {/* Row 3 - Two more cards */}
  {sponsors.slice(3, 5).map((sponsor) => (
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
