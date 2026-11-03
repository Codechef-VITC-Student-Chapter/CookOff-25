"use client";

import React, { useState } from "react";
import Image from "next/image";

type FaqAccordionProps = {
  ques: string;
  ans: string;
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-3/4">
      {/* Header */}
      <div
        className="border-2 border-[#999999] flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-cerapro font-black ml-4">{ques}</p>

        {/* Icon rotates when open */}
        <Image
          src="/FaqAccordian_Plus.svg"
          alt="Toggle"
          width={20}
          height={20}
          className={`mr-4 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
 

      {/* Answer dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 border-l bg-[#999999] text-black border-r border-b border-[#999999] ${
          isOpen ? "max-h-60 p-4" : "max-h-0 p-0"
        }`}
      >
        <p className="wrap-break-words font-cerapro font-medium mb-3">{ans}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;
