"use client";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown"; // adjust path if needed

export default function CountdownSection() {
  return (
    <section className="relative min-h-screen bg-[#121212] text-white flex flex-col items-center overflow-hidden px-6 py-16">
      {/* Clock background PNG */}
      <div className="absolute bottom-0 right-0 opacity-100 w-[400px] h-[400px]">
        <Image
          src="/countDown_clock.png" // 🔁 replace with your PNG
          alt="Clock background"
          fill
          className="object-contain"
        />
      </div>

      {/* Top text */}
      <div className="text-center max-w-5xl px-6 mb-16 w-full">
        <p
          className=" text-white text-md md:text-base mb-10 font-cerapro font-medium tracking-[0.3em] md:tracking-[0.4em] lg:tracking-[0.3em] "
        >
          Gear up for the ultimate coding showdown. Code, compete, and crush the
          challenge
        </p>
        <div className="h-[1px] opacity-100 w-full mx-auto border-2 border-gray-400" />
      </div>

      <h3
        className="font-cerapro font-medium uppercase tracking-widest text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
      >
        COUNTDOWN
      </h3>

      {/* Countdown Component */}
      <CountdownTimer />

      {/* Register Button */}
      <button
        className=" font-cerapro font-medium mt-4 bg-gradient-to-b from-gray-200 to-gray-400 text-black  px-10 py-2 rounded-2xl hover:from-white hover:to-gray-300 transition-all duration-200"
      >
        REGISTER
      </button>
    </section>
  );
}
