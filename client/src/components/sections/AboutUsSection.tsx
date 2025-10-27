"use client";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";

export default function AboutPage() {
  const cardStyle =
    "w-full h-36 sm:h-40 md:h-44 lg:h-48 rounded-lg shadow-lg p-4";

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-start overflow-hidden px-4 sm:px-6 md:px-10 py-10 md:py-14">
      {/* Glowing background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-100 pointer-events-none translate-y-8 md:translate-y-0">
        <Image
          src="/aboutUs_Subtract.svg"
          alt="Glow background"
          width={1000}
          height={500}
          className="object-contain rotate-90 md:rotate-0 scale-y-[1.8] scale-x-[1.4] md:scale-100"
        />
      </div>

      {/* Hat PNG */}
      <div className="absolute top-32 right-4 sm:top-28 md:top-32 md:right-16 lg:right-24">
        <Image
          src="/aboutUs_codechefHat.png"
          alt="Chef hat"
          width={90}
          height={90}
          className="object-contain md:w-[100px] md:h-[100px] md:-translate-x-38"
        />
      </div>

      {/* Text Section */}
      <div className="text-left mb-20 md:mb-56 z-10 md:ml-20">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-cerapro font-medium uppercase tracking-widest text-md sm:text-lg md:text-3xl mb-4">
          About Us
        </h2>
        <h1 className="text-xs sm:text-base md:text-xl font-cerapro font-thin italic tracking-wider leading-relaxed">
          WE ARE CODERS, ENTHUSIASTS, GEEKS.
          <br />
          WE ARE{" "}
          <span className="font-bold not-italic text-gray-200">CODECHEF</span>
        </h1>
      </div>

      {/* Card Container */}
      <div
        className="
          relative max-w-5xl w-full p-3 sm:p-4 md:p-6 lg:p-10
          rounded-2xl shadow-2xl z-10
          -translate-y-16 md:-translate-y-42
          translate-x-0 sm:translate-x-8 md:ml-56
        "
      >
        {/* Desktop layout (3 columns, 5 cards) */}
        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Tall right card */}
          <div className="md:row-span-2 md:col-span-1 flex">
            <MemberCard className="w-full h-48 md:h-64 lg:h-72 mt-8 md:mt-14" />
          </div>

          <MemberCard className={`md:col-span-1 ${cardStyle}`} />
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />
        </div>

        {/* Mobile (2x2 staggered layout with tighter spacing) */}
        <div className="grid grid-cols-2 md:hidden gap-0 sm:gap-3 justify-items-center translate-y-2">
          <div className="col-start-1">
            <MemberCard />
          </div>
          <div className="col-start-2 row-start-2">
            <MemberCard />
          </div>
          <div className="col-start-1 row-start-3">
            <MemberCard />
          </div>
          <div className="col-start-2 row-start-4">
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  );
}
