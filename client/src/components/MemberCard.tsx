"use client";

import { JSX } from "react";

interface MemberCardProps {
  className?: string;
  text?:string
}

export default function MemberCard({
  className = "",
  text
}: MemberCardProps): JSX.Element {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg flex flex-col items-center justify-center 
        text-black hover:scale-105 transition-transform duration-300 cursor-pointer
        shrink-0 grow-0
        w-[150px] h-[120px] sm:w-[140px] sm:h-[110px] md:w-44 md:h-[130px] lg:w-[190px] lg:h-[150px]
        ${className}`}
    >
      <p className="text-[10px] px-2 sm:text-xs  text-black">
        {text}
      </p>
    </div>
  );
}
