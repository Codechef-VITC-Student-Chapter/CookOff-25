"use client";

import { JSX } from "react";

interface MemberCardProps {
  className?: string;
}

export default function MemberCard({
  className = "",
}: MemberCardProps): JSX.Element {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg flex flex-col items-center justify-center 
        text-black hover:scale-105 transition-transform duration-300
        w-[120px] h-[100px] sm:w-[140px] sm:h-[110px] md:w-[160px] md:h-[130px] lg:w-[190px] lg:h-[150px]
        ${className}`}
    >
      <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-1">
        CodeChef
      </h3>
      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600">
        Cook Off
      </p>
    </div>
  );
}
