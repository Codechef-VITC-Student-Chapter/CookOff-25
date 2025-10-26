"use client";
import Image from "next/image";
import MemberCard from "@/components/MemberCard"; 

export default function AboutPage() {
  const cardStyle =
    "w-full h-40 rounded-lg shadow-lg p-4";
  return (
    <div className="relative min-h-screen bg-[#121212] text-white flex flex-col items-left justify-center overflow-hidden px-6 py-14">
      {/* Glowing background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-100 pointer-events-none">
        <Image
          src="/aboutUs_Subtract.svg" //  SVG file
          alt="Glow background"
          width={1000}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Hat PNG */}
      <div className="absolute top-32 right-62">
        <Image
          src="/aboutUs_codechefHat.png"
          alt="Chef hat"
          width={130}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="text-left mb-40">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-cerapro font-medium uppercase tracking-widest text-sm md:text-4xl mb-6 translate-x-15/100">
          About Us
        </h2>
        <h1 className="text-2xl font-cerapro font-normal-italic md:text-3xl font-thin italic tracking-widest translate-x-15/100">
          WE ARE CODERS, ENTHUSIASTS, GEEKS.
          <br />
          WE ARE{" "}
          <span className="font-bold font-cerapro not-italic text-gray-200 ">
            CODECHEF
          </span>
        </h1>
      </div>

      {/* Card Container */}
      <div className="relative max-w-4xl w-full p-6 md:p-16 lg:p-12 rounded-2xl shadow-2xl z-10 -translate-y-32 translate-x-3/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Top Left) */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Card 2 (Top Middle) */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Card 3 (Right, Tall Card) */}

          <div className="md:row-span-2 md:col-span-1">
            <MemberCard className="w-full h-40 md:h-48 md:w-68 mt-16" />{" "}
          </div>

          {/* Card 4 (Bottom Left) */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Card 5 (Bottom Middle) */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />
        </div>


      </div>
  
    </div>
  );
}
