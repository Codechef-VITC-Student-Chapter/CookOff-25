"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CountUp from "react-countup";
import HeroAnimate from "../HeroAnimate";

export default function Hero() {
  const hatDelay = 2.5;
  const numberDelay = hatDelay + 1.8;
  const baseDelay = 5;
  return (
    <>
      {/* Added `relative` here to act as the positioning context 
        for all the `absolute` elements inside.
      */}
      <div className="h-[120vh] w-full flex flex-col items-center justify-center  lg:mt-10 py-7  overflow-hidden  relative">
        <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
          <div className="flex flex-col items-center justify-center p-5  relative">
            {/* Responsive text size and tracking */}
            <motion.h1
              className="text-xl md:text-3xl max-[430px]:text-sm text-white text-center p-4 font-cerapro font-medium tracking-widest md:tracking-[0.5rem]"
              style={{ lineHeight: 1 }}
              // Initial state: a vertical line in the center
              initial={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
              // Animate to full visibility
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{
                // 1. Increased duration for a smoother, slower draw
                duration: 1.2,
                // 2. Used a custom cubic-bezier for a more dynamic "snap"
                ease: [0.17, 0.55, 0.55, 1], // Custom easing: starts slow, speeds up, then stops abruptly
                // 3. Added a small delay so the animation feels intentional
                delay: 0.2,
              }}
            >
              CodeChef VITC Presents
            </motion.h1>

            <div className="relative w-full flex justify-center items-center">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-[6rem] max-[430px]:text-2xl
        text-center
        p-4 md:p-10
        text-transparent
        bg-clip-text
        bg-linear-to-b
        from-white
        to-[#999999]
        font-cerapro font-bold
        tracking-wider md:tracking-[1rem] lg:tracking-[1.8rem]"
                style={{ lineHeight: 0.8 }}
                // Initial state: defines a horizontal line at the very bottom (100% vertical)
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                // Animate to full visibility
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{
                  duration: 1.5, // Made longer for a very slow, smooth reveal
                  ease: "circOut", // A smooth, accelerating-then-slowing ease is perfect for this "unfolding" feel
                  delay: 0.8, // Staggered delay remains
                }}
              >
                COOK OFF
              </motion.h1>

              <img
                src={"/images/image 2.png"}
                alt="Chef's Hat"
                className="max-[430px]:block hidden w-10 md:w-20 lg:w-24 absolute top-[-5] right-5 z-12"
              />
              <img
                src={"/images/image 1.png"}
                alt="Chef's Hat"
                className="max-[430px]:block hidden w-10 md:w-20 lg:w-24 absolute bottom-6 left-5 z-12"
              />
            </div>

            <h1 className="text-sm font-serif hidden max-[430px]:inline">2025</h1>

            {/* Replaced non-standard `mr-160` with responsive absolute positioning.
            This positions it relative to the center of the screen.
          */}
            <motion.h1
              className="max-[430px]:hidden inline text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center p-4 absolute font-serif font-medium
              mt-44 sm:mt-44 md:mt-64 lg:mt-80  
              right-[calc(50%+7rem)] sm:right-[calc(50%+9rem)] md:right-[calc(50%+14rem)] xl:right-[calc(50%+16rem)]"
              style={{ lineHeight: 1 }}
              // Initial state: Start far left (out of view)
              initial={{ x: -1000 }}
              // Animate to its final resting position (0 offset)
              animate={{ x: 0 }}
              transition={{
                duration: 1.2, // A smooth, noticeable slide time
                ease: [0.25, 1, 0.5, 1], // Custom ease for a quick start and smooth stop
                delay: numberDelay, // Starts after the hat animations finish
              }}
            >
              20
            </motion.h1>

            <motion.div
              // Apply all positioning and layout classes to the motion wrapper
              className="max-[430px]:hidden inline text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center p-4 absolute font-serif font-medium
          mt-44 sm:mt-44 md:mt-64 lg:mt-80 
          left-[calc(50%+7rem)] sm:left-[calc(50%+8rem)] md:left-[calc(50%+14rem)] xl:left-[calc(50%+16rem)]"
              style={{ lineHeight: 1 }}
              // 1. Initial state (hidden and small)
              initial={{ opacity: 0, scale: 0.5 }}
              // 2. Animate to (visible and full size)
              animate={{ opacity: 1, scale: 1 }}
              // 3. Transition settings
              transition={{
                type: "spring", // Use a "spring" animation for a nice pop
                stiffness: 260,
                damping: 20,
                delay: numberDelay, // Use your delay variable here
              }}
            >
              <CountUp
                start={0}
                end={25}
                // 4. Slow down the count animation (e.g., to 3 seconds)
                duration={5}
                delay={4}
                // We don't need a delay here, as the wrapper handles it
              />
            </motion.div>
          </div>
        </div>

        {/* Responsive scaling for the ASCII art */}
        <div className="absolute inset-0  z-10 opacity-60 flex items-center justify-center">
          <HeroAnimate />
        </div>

        {/* Replaced non-standard `ml-172 mb-12` with responsive size and positioning. 
        */}
        <motion.img
          src="/images/image 2.png"
          alt="Chef's Cap"
          className="max-[430px]:hidden block w-16 md:w-24 lg:w-32 absolute z-1 
             top-[46%] md:top-[42%] lg:top-[40%] 
             left-[calc(50%+6.5rem)] md:left-[calc(50%+12rem)] lg:left-[calc(50%+18rem)]"
          // Initial state: Start far above the screen by offsetting its final position
          initial={{ y: -500 }} // Start 500px above its resting place
          // Animate to its resting position (0 offset from Tailwind's top property)
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 1.5,
            bounce: 0.4,
            delay: hatDelay,
          }}
        />

        {/* ---------------------------------------------------- */}
        {/* 2. ANIMATED CHEF'S CAP (image 1.png) - Fixed */}
        {/* ---------------------------------------------------- */}
        <motion.img
          src="/images/image 1.png"
          alt="Chef's Cap"
          className="max-[430px]:hidden w-12 md:w-24 lg:w-32 absolute z-1
            top-[46%] md:top-[40%] lg:top-[36%] 
            right-[calc(50%+7rem)] md:right-[calc(50%+12.5rem)] lg:right-[calc(50%+18.5rem)]"
          // Initial state: Start even higher
          initial={{ y: -700 }}
          // Animate to its resting position
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 1.8,
            bounce: 0.5,
            delay: hatDelay + 0.1,
          }}
        />

        {/* --- BACKGROUND WORDS ---
          Added `hidden lg:inline` to all background words.
          They will now be hidden on 'sm' and 'md' screens.
        */}
        {/* -------------------------------------
            --- Left Side Texts (Rotation classes removed) ---
            ------------------------------------- */}
        <motion.div
          className="text-white absolute mr-340 mb-80 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -9 }}
          animate={{ rotate: [-9, 19, -20, -9] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Queue
        </motion.div>

        <motion.div
          className="text-white absolute mr-320 mb-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 15 }}
          animate={{ rotate: [15, -25, 0, 15] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Recursion
        </motion.div>

        <motion.div
          className="text-white absolute mr-240 mb-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -17 }}
          animate={{ rotate: [-17, -5, 20, -17] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Strings
        </motion.div>

        <motion.div
          className="text-white absolute mr-280 mb-0 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -18 }}
          animate={{ rotate: [-18, 10, 0, -18] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Bit <br /> Manipulation
        </motion.div>

        <motion.div
          className="text-white absolute mr-340 mt-80 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -18 }}
          animate={{ rotate: [-18, 18, 0, -18] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Heap
        </motion.div>

        <motion.div
          className="text-white absolute mr-280 mt-120 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 12 }}
          animate={{ rotate: [12, -15, 20, 12] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Arrays
        </motion.div>

        <motion.div
          className="text-white absolute mr-320 mt-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -7 }}
          animate={{ rotate: [-7, 25, -20, -7] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Stack
        </motion.div>

        <motion.div
          className="text-white absolute mr-200 mt-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 14 }}
          animate={{ rotate: [14, -24, 5, 14] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Hashing
        </motion.div>

        {/* -------------------------------------
            --- Right Side Texts (Rotation classes removed) ---
            ------------------------------------- */}
        <motion.div
          className="text-white absolute ml-330 mb-60 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 8 }}
          animate={{ rotate: [8, -15, 20, 8] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          LinkedList
        </motion.div>

        <motion.div
          className="text-white absolute ml-350 mb-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -5 }}
          animate={{ rotate: [-5, 20, -10, -5] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Trees
        </motion.div>

        <motion.div
          className="text-white absolute ml-240 mb-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -14 }}
          animate={{ rotate: [-14, -5, -20, -14] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Graph
        </motion.div>

        <motion.div
          className="text-white absolute ml-280 mb-0 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -14 }}
          animate={{ rotate: [-14, -5, -20, -14] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Dynamic <br /> Programming
        </motion.div>

        <motion.div
          className="text-white absolute ml-340 mt-80 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 18 }}
          animate={{ rotate: [18, 28, -10, 18] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Tries
        </motion.div>

        <motion.div
          className="text-white absolute ml-280 mt-120 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -18 }}
          animate={{ rotate: [-18, -28, -5, -18] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Heap
        </motion.div>

        <motion.div
          className="text-white absolute ml-350 mt-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: -14 }}
          animate={{ rotate: [-14, -5, -20, -14] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Search
        </motion.div>

        <motion.div
          className="text-white absolute ml-200 mt-160 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
          initial={{ rotate: 12 }}
          animate={{ rotate: [12, 20, -10, 12] }}
          transition={{
            delay: baseDelay,
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Sort
        </motion.div>
      </div>
    </>
  );
}
