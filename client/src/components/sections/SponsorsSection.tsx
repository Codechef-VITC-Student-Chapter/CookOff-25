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
      <Navbar />
      <section className="w-full bg-[#1a1a1a] py-10">
        <SectionHeader>SPONSORS</SectionHeader>

        {/* Line separator */}
        <div className="w-full h-1  relative">
          <Image
            src="/SponserSection_Line.svg"
            fill
            style={{ objectFit: "cover" }}
            alt="Line"
          />
        </div>

        {/* Sponsors row */}
        <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10">
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
