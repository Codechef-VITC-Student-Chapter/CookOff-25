"use client";
import MemberCard from "@/components/MemberCard";
import { JSX } from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const CustomImage = ({
  src,
  alt,
  width,
  height,
  className,
}: CustomImageProps): JSX.Element => (
  <img
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.onerror = null;
      target.src =
        "https://placehold.co/100x100/333333/ffffff?text=Asset+Error";
      console.error(`Error loading image from path: ${src}`);
    }}
  />
);

export default function AboutPage(): JSX.Element {
  const cardStyle = "rounded-xl shadow-lg bg-white";

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-start overflow-hidden px-4 sm:px-6 md:px-10 py-10 md:py-14">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <CustomImage
          src="/aboutUs_Subtract.svg"
          alt="Glow background"
          width={1000}
          height={500}
          className="
            object-center rotate-90 md:rotate-0 max-w-none
            md:w-[70vw] md:h-[100vh] w-[70w] h-[50vh]
            transform translate-y-[5vh] md:translate-y-0
            scale-y-[1] scale-x-[0.7] md:scale-100  
          "
        />
      </div>

      {/* About Text */}
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
          relative max-w-5xl w-full
          p-3 sm:p-4 md:p-6 lg:p-10
          rounded-2xl shadow-2xl z-10
          mx-auto
          -translate-y-16 md:-translate-y-40
        "
      >
        {/* Desktop layout */}
        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-[repeat(3,auto)] gap-6 lg:gap-8 place-items-center justify-center scale-100 lg:scale-120 transition-transform duration-300">
          {/* 4 grouped cards on the left */}
          <div className="grid grid-cols-2 gap-5 transform -translate-x-10">
            <MemberCard className={`${cardStyle} w-56 h-56 lg:w-64 lg:h-64`} />
            <MemberCard className={`${cardStyle} w-56 h-56 lg:w-64 lg:h-64`} />
            <MemberCard className={`${cardStyle} w-56 h-56 lg:w-64 lg:h-64`} />
            <MemberCard className={`${cardStyle} w-56 h-56 lg:w-64 lg:h-64`} />
          </div>

          {/* Single larger card on the right */}
          <div className="flex justify-center items-center translate-x-8">
            <MemberCard className="w-80 h-96 lg:w-96 lg:h-[26rem] scale-x-140 scale-y-120" />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="grid grid-cols-2 md:hidden sm:gap-3 justify-items-center translate-y-1">
          {" "}
          <div className="col-start-1">
            {" "}
            <MemberCard />{" "}
          </div>{" "}
          <div className="col-start-2 row-start-2">
            {" "}
            <MemberCard />{" "}
          </div>{" "}
          <div className="col-start-1 row-start-3">
            {" "}
            <MemberCard />{" "}
          </div>{" "}
          <div className="col-start-2 row-start-4">
            {" "}
            <MemberCard />{" "}
          </div>{" "}
        </div>
      </div>
"use server";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/sections/Hero";
import AboutPage from "@/components/sections/AboutUsSection";
import CountdownSection from "@/components/sections/CountdownSection";
import PrizesSection from "@/components/sections/PrizesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FaqSection from "@/components/sections/FaqSection";


export default async function page() {
  
  return (
    <div className="min-h-screen bg-[#121212] text-foreground">
      <Navbar />
      <Hero/>
      <AboutPage></AboutPage>
      <CountdownSection></CountdownSection>
      <PrizesSection></PrizesSection>
      <SponsorsSection></SponsorsSection>
      <FaqSection></FaqSection>
    </div>
    
  );
}
}
