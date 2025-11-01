"use client";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown"; // adjust path if needed

export default function CountdownSection() {
  return (
    <section className="relative max-h-screen md:min-h-screen bg-black text-white flex flex-col items-center overflow-hidden px-6 py-16">
      {/* Clock background PNG */}
      <div className="absolute bottom-0 right-0 opacity-100 w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
        <Image
          src="/countDown_clock.png"
          alt="Clock background"
          fill
          className="object-contain"
        />
      </div>

      {/* Top text */}
      <div className="text-center max-w-5xl px-4 md:px-6 mb-8 md:mb-16 w-full">
        <p className="text-white text-sm md:text-base mb-8 md:mb-10 font-cerapro font-medium tracking-[0.2em] md:tracking-[0.4em] lg:tracking-[0.3em]">
          Gear up for the ultimate coding showdown. Code, compete, and crush the
          challenge
        </p>
        <div className="h-px opacity-100 w-full mx-auto border-2 border-gray-400" />
      </div>

      <h3 className="font-cerapro font-medium uppercase tracking-widest text-xl md:text-3xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-10 md:mb-0">
        COUNTDOWN
      </h3>

      {/* Countdown Component */}
      <CountdownTimer />

      {/* Register Button */}
      <a href="https://chennaievents.vit.ac.in/technovit/mainDashboard">

      <button className="font-cerapro font-medium mt-4 bg-linear-to-b from-gray-200 to-gray-400 text-black px-8 md:px-10 py-2 rounded-2xl hover:from-white hover:to-gray-300 transition-all duration-200">
        REGISTER
      </button>
      </a>
    </section>
  );
}
