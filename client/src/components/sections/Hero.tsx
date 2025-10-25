import HeroAnimate from "./HeroAnimate";

export default function Hero() {
  return (
    <>
      {/* Added `relative` here to act as the positioning context 
        for all the `absolute` elements inside.
      */}
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
        <div className="flex flex-col items-center justify-center p-5 relative">
          {/* Responsive text size and tracking */}
          <h1
            className="text-xl md:text-3xl text-white text-center p-4 font-cerapro font-medium tracking-widest md:tracking-[0.5rem]"
            style={{ lineHeight: 1 }}
          >
            CodeChef VITC Presents
          </h1>
          {/* Responsive text size, padding, and tracking */}
          <h1
            className="text-5xl md:text-7xl lg:text-[6rem] 
            text-center 
            p-4 md:p-10 
            text-transparent
            bg-clip-text 
            bg-linear-to-b 
            from-white 
            to-[#999999]
            font-cerapro font-bold
            tracking-wider md:tracking-[1rem] lg:tracking-[1.8rem]"
            style={{ lineHeight: 0.8 }} // slightly adjusted line-height
          >
            COOK OFF
          </h1>

          {/* Replaced non-standard `mr-160` with responsive absolute positioning.
            This positions it relative to the center of the screen.
          */}
          <h1
            className="text-3xl md:text-5xl text-white text-center p-4 absolute font-cerapro font-medium
            mt-44 sm:mt-44 md:mt-64 lg:mt-80 right-[calc(50%+7rem)]
            sm:right-[calc(50%+9rem)] md:right-[calc(50%+14rem)] lg:right-[calc(50%+17rem)] xl:right-[calc(50%+20rem)]"
            style={{ lineHeight: 1 }}
          >
            20
          </h1>
          {/* Replaced non-standard `ml-160` with responsive absolute positioning.
          */}
          <h1
            className="text-3xl md:text-5xl text-white text-center p-4 absolute font-cerapro font-medium
            mt-44 sm:mt-44 md:mt-64 lg:mt-80 left-[calc(50%+7rem)]
            sm:left-[calc(50%+8rem)] md:left-[calc(50%+14rem)] lg:left-[calc(50%+17rem)] xl:left-[calc(50%+20rem)]"
            style={{ lineHeight: 1 }}
          >
            25
          </h1>
        </div>

        {/* Responsive scaling for the ASCII art */}
        <div className="absolute z-1 opacity-60 scale-50 md:scale-75 lg:scale-90">
          <HeroAnimate />
        </div>

        {/* Replaced non-standard `ml-172 mb-12` with responsive size and positioning. 
        */}
        <img
          src="/images/image 2.png"
          alt="Chef's Cap"
          className="w-16 md:w-24 lg:w-32 absolute z-1
           top-[46%] md:top-[42%]  lg:top-[40%] left-[calc(50%+6.5rem)] md:left-[calc(50%+12rem)] lg:left-[calc(50%+18rem)]"
        />
        {/* Replaced non-standard `mr-184 mb-20` with responsive size and positioning. 
        */}
        <img
          src="/images/image 1.png"
          alt="Chef's Cap"
          className="w-12 md:w-24 lg:w-32 absolute z-1
          top-[46%] md:top-[40%]  lg:top-[36%] right-[calc(50%+7rem)] md:right-[calc(50%+12.5rem)] lg:right-[calc(50%+18.5rem)]"
        />

        {/* --- BACKGROUND WORDS ---
          Added `hidden lg:inline` to all background words.
          They will now be hidden on 'sm' and 'md' screens.
        */}
        <text
          className="text-white absolute 
        mr-340 mb-80 rotate-[-9deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Queue
        </text>
        <text
          className="text-white absolute 
        mr-320 mb-160 rotate-15 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Recursion
        </text>
        <text
          className="text-white absolute 
        mr-240 mb-160 rotate-[-17deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Strings
        </text>
        <text
          className="text-white absolute 
        mr-280 mb-0 rotate-[-18deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Bit <br /> Manipulation
        </text>
        <text
          className="text-white absolute 
        mr-340 mt-80 rotate-[-18deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Heap
        </text>
        <text
          className="text-white absolute 
        mr-280 mt-120 rotate-12 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Arrays
        </text>
        <text
          className="text-white absolute 
        mr-320 mt-160 rotate-[-7deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Stack
        </text>
        <text
          className="text-white absolute 
        mr-200 mt-160 rotate-14 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Hashing
        </text>
        <text
          className="text-white absolute 
        ml-330 mb-60 rotate-18 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          LinkedList
        </text>
        <text
          className="text-white absolute 
        ml-350 mb-160 rotate-[-5deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Trees
        </text>
        <text
          className="text-white absolute 
        ml-240 mb-160 rotate-[-14deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Graph
        </text>
        <text
          className="text-white absolute 
        ml-280 mb-0 rotate-[-14deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Dynamic <br /> Programming
        </text>
        <text
          className="text-white absolute 
        ml-340 mt-80 rotate-18 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Tries
        </text>
        <text
          className="text-white absolute 
        ml-280 mt-120 rotate-[-18deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Heap
        </text>
        <text
          className="text-white absolute 
        ml-350 mt-160 rotate-[-14deg] text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Search
        </text>
        <text
          className="text-white absolute 
        ml-200 mt-160 rotate-12 text-center opacity-40 text-[2rem] font-cerapro font-black hidden lg:inline"
          style={{ lineHeight: 1 }}
        >
          Sort
        </text>
      </div>
    </>
  );
}