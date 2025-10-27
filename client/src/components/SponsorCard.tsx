"use client";
import Image from "next/image";
import React from "react";

interface SponsorCardProps {
  sponsorName: string;
  logoUrl: string;
  tier?: "gold" | "silver" | "bronze";
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  sponsorName,
  logoUrl,
  tier = "silver",
}) => {
  // Optional tier-based glow
  

  return (
    <div className="flex justify-center items-start ">
      {/* Container */}
      <div className="relative bg-transparent">
        {/* Strap */}
        <div className="w-3 h-10 bg-white mx-auto border-2 border-t-0 border-b-0 z-10 relative top-2 border-black" />

        {/* Card */}
        <div
          className={`mt-1 bg-white w-64 h-96 border-2 border-black rounded-xl 
          shadow-[13px_10px_19px_2px_rgba(255,255,255,0.75)]
relative flex flex-col items-center`}
        >
          {/* Hole */}
          <div className="absolute top-3 w-6 h-8 bg-[linear-gradient(143deg,#ffffff_10%,#000000_80%)] rounded-full border border-black shadow-inner" />

          {/* Dotted Line */}
          <div className="w-[85%] border-t  border-dashed border-black mt-16 mb-4" />

          {/* Logo */}
          <div className="flex-1 w-full flex justify-center items-center p-4">
            <Image
              src={logoUrl}
              alt={`${sponsorName} logo`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Sponsor Name */}
          <p className="text-center font-semibold pb-4 text-gray-800 uppercase tracking-wide">
            {sponsorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
