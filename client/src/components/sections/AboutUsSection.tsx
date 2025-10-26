"use client";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";

export default function AboutPage() {
  const cardStyle = "w-full h-40 rounded-lg shadow-lg p-4";

  return (
    <div className="relative min-h-screen bg-[#121212] text-white flex flex-col items-left overflow-hidden px-6 md:px-6 py-10 md:py-14">
      {/* Glowing background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-100 pointer-events-none translate-y-8 md:translate-y-0">
        <Image
          src="/aboutUs_Subtract.svg"
          alt="Glow background"
          width={1000}
          height={500}
          className="object-contain rotate-90 md:rotate-0 scale-y-180 scale-x-140 md:scale-100 "
        />
      </div>

      {/* Hat PNG */}
      <div className="absolute top-36 md:top-32 right-0 md:right-62">
        <Image
          src="/aboutUs_codechefHat.png"
          alt="Chef hat"
          width={100}
          height={100}
          className="object-contain md:rotate-0"
        />
      </div>

      {/* Text Section */}
      <div className="text-left mb-20 md:mb-40">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-cerapro font-medium uppercase tracking-widest text-md md:text-4xl mb-6 md:mb-6 translate-x-0 md:translate-x-15/100">
          About Us
        </h2>
        <h1 className="text-sm md:text-2xl font-cerapro font-thin italic tracking-normal md:tracking-widest translate-x-0 md:translate-x-15/100">
          WE ARE CODERS, ENTHUSIASTS, GEEKS.
          <br />
          WE ARE{" "}
          <span className="font-bold not-italic text-gray-200">CODECHEF</span>
        </h1>
      </div>

      {/* Card Container */}
      <div className="relative max-w-4xl w-full p-4 md:p-6 lg:p-12 rounded-2xl shadow-2xl z-10 -translate-y-16 md:-translate-y-32 translate-x-0 md:translate-x-3/10">
        {/* Desktop (5 Cards) */}
        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6">
          {/* Card 1 */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Card 2 */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Tall Right Card */}
          <div className="md:row-span-2 md:col-span-1">
            <MemberCard className="w-full h-40 md:h-48 md:w-68 mt-8 md:mt-16" />
          </div>

          {/* Card 4 */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />

          {/* Card 5 */}
          <MemberCard className={`md:col-span-1 ${cardStyle}`} />
        </div>

        {/* Mobile (4 Cards) */}
        <div className="grid grid-cols-2 md:hidden justify-items-center translate-y-3">
          {/* Row 1 → Col 1 */}
          <div className="col-start-1">
            <MemberCard />
          </div>

          {/* Row 2 → Col 2 */}
          <div className="col-start-2 row-start-2">
            <MemberCard />
          </div>

          {/* Row 3 → Col 1 */}
          <div className="col-start-1 row-start-3">
            <MemberCard />
          </div>

          {/* Row 4 → Col 2 */}
          <div className="col-start-2 row-start-4">
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  );
}
