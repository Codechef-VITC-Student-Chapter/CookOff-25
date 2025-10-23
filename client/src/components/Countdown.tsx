"use client";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose needed weights
});

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 🕒 Set your target date here
    const targetDate = new Date("2025-11-02T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper for zero padding
  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col">
      {/* Changed: Added justify-start to align timer items to left */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
        <div className="text-center relative">
          <p
            className={`${orbitron.className} text-5xl md:text-8xl font-black bg-gradient-to-b from-[#cccccc] to-[#666666] bg-clip-text text-transparent tracking-widest leading-relaxed`}
          >
            {pad(timeLeft.days)}
          </p>
          <p
            className={`${orbitron.className} text-xs md:text-2xl md:font-bold text-gray-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-8 px-2`}
          >
            Days
          </p>
        </div>
        <span className="text-4xl md:text-5xl text-gray-400">:</span>
        <div className="text-center relative">
          <p
            className={`${orbitron.className} text-5xl md:text-8xl font-black bg-gradient-to-b from-[#cccccc] to-[#666666] bg-clip-text text-transparent tracking-widest leading-relaxed`}
          >
            {pad(timeLeft.hours)}
          </p>
          <p
            className={`${orbitron.className} text-xs md:text-2xl md:font-bold text-gray-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-8 px-2`}
          >
            hours
          </p>
        </div>
        <span className="text-4xl md:text-5xl text-gray-400">:</span>
        <div className="text-center relative">
          <p
            className={`${orbitron.className} text-5xl md:text-8xl font-black bg-gradient-to-b from-[#cccccc] to-[#666666] bg-clip-text text-transparent tracking-widest leading-relaxed`}
          >
            {pad(timeLeft.minutes)}
          </p>
          <p
            className={`${orbitron.className} text-xs md:text-xl md:font-bold text-gray-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-8 px-2 `}
          >
            mins
          </p>
        </div>
        <span className="text-4xl md:text-5xl text-gray-400">:</span>
        <div className="text-center relative">
          <p
            className={`${orbitron.className} text-5xl md:text-8xl font-black bg-gradient-to-b from-[#cccccc] to-[#666666] bg-clip-text text-transparent tracking-widest leading-relaxed`}
          >
            {pad(timeLeft.seconds)}
          </p>
          <p
            className={`${orbitron.className}  text-xs md:text-xl md:font-bold text-gray-400 absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-8 px-2 `}
          >
            sec
          </p>
        </div>
      </div>

      {/* Changed: Added text-left to align this text to left as well */}
      <p className="text-sm md:text-base text-gray-300 font-cerapro font-medium mb-10 text-center tracking-widest">
        Get Ready {timeLeft.days} Days Until the Big Event
      </p>
    </div>
  );
}
