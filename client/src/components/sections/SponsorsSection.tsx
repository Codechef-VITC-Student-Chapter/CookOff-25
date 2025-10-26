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
      sponsorName: "Sample One",
      logoUrl: "",
      tier: "gold" as const,
    },
    {
      id: 2,
      sponsorName: "Sample Two",
      logoUrl: "",
      tier: "silver" as const,
    },
    {
      id: 3,
      sponsorName: "Sample Three",
      logoUrl: "",
      tier: "bronze" as const,
    },
    {
      id: 4,
      sponsorName: "Sample Four",
      logoUrl: "",
      tier: "bronze" as const,
    }
  ];

  return (
    <div>
      <section className="w-full bg-[#121212] py-10 mb-10">
        <h3 className="font-cerapro font-medium uppercase ml-20 tracking-widest sm:max-md:text-center text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">SPONSORS</h3>

        {/* Line separator */}
        <div className="w-full h-1 mt-10 relative">
          <Image
            src="/SponserSection_Line.svg"
            fill
            style={{ objectFit: "cover" }}
            alt="Line"
          />
        </div>
<div className="hidden sm:max--md:block w-full h-1 mt-10 relative">
  <Image
    src="/SponserSection_Line.svg"
    fill
    style={{ objectFit: "cover" }}
    alt="Line"
  />
</div>

        {/* Sponsors row */}
        <div className="flex flex-row justify-center px-10 flex-wrap gap-5 md:gap-10">
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
