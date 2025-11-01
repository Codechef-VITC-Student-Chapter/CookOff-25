type RankedTeam = {
  rank: number;
  teamName: string;
  college: string;
  score: number;
};

type RoundResults = {
  [round: string]: RankedTeam[] | null;
};

interface PodiumProps {
  topTeamsByRound: RoundResults | null;
  selectedRound: keyof RoundResults; // e.g. "Round1" | "Round2" | "Round3"
}
const hatImages = [
  "/goldHat_leaderboard.png",
  "/silver_leaderboard.png",
  "/bronzeHat_leaderboard.png",
];
export default function Podium({ topTeamsByRound, selectedRound }: PodiumProps) {
  if (!topTeamsByRound) return null;
  const roundTopThree = topTeamsByRound[selectedRound] || [];



  return (
    <div
      className="relative w-screen left-1/2 -translate-x-1/2 bg-cover bg-center bg-no-repeat py-10 sm:py-16 md:py-20"
      style={{
        backgroundImage: "url('/podium_background.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative flex justify-center px-1 sm:px-6 md:px-10">
        <div className="relative w-full max-w-[500px] md:max-w-[650px] aspect-[1.6/1] mx-auto">
          <img
            src="/podium_leaderboard.png"
            alt="Podium"
            className="w-full h-full relative max-[355px]:top-5 max-sm:mt-2 object-contain"
          />

          {/* 🥇 1st Place */}
          {roundTopThree[0] && (
            <div className="absolute mb-1 left-1/2 -translate-x-1/2 top-[-10%]  md:top-[-15%] flex flex-col gap-2 items-center 
            text-center">
              <img
                src={hatImages[0]}
                alt="1st Place Hat"
                className="object-contain w-[110px] sm:w-[140px] relative bottom-4   sm:bottom-5 md:w-[170px]"
              />
              <div className="relative max-[463px]:bottom-10 bottom-5  sm:bottom-12 md:bottom-8">

                <p className="text-yellow-300 text-sm relative  sm:text-base md:text-lg font-semibold mt-2 drop-shadow-md">
                  🥇 {roundTopThree[0].teamName}
                </p>
                <p className="text-gray-200 text-xs relative  sm:text-sm md:text-base">
                  {roundTopThree[0].college}
                </p>
              </div>
            </div>
          )}

          {/* 🥈 2nd Place */}
          {roundTopThree[1] && (
            <div className="absolute  left-[2%] sm:left-[6%] md:left-[5%] top-[10%] flex flex-col items-center text-center">
              <img
                src={hatImages[1]}
                alt="2nd Place Hat"
                className="object-contain w-[95px]  relative max-[353px]:right-6 max-[353px]:left-0 left-3 sm:left-0 bottom-5 sm:bottom-0   sm:w-[120px] md:w-[150px]"
              />
              <div className="relative max-[353px]:right-6 max-[353px]:left-0 left-3 max-[463px]:bottom-4 bottom-2 sm:left-0 sm:bottom-1">

                <p className="text-gray-300 text-sm relative bottom-3 sm:text-base md:text-lg font-semibold mt-1 drop-shadow-md">
                  🥈 {roundTopThree[1].teamName}
                </p>
                <p className="text-gray-400 text-xs relative bottom-3 sm:text-sm md:text-base">
                  {roundTopThree[1].college}
                </p>
              </div>
            </div>
          )}

          {/* 🥉 3rd Place */}
          {roundTopThree[2] && (
            <div className="absolute right-[2%] sm:right-[6%] md:right-[6%] top-[5%] flex flex-col items-center text-center">
              <img
                src={hatImages[2]}
                alt="3rd Place Hat"
                className="object-contain w-[90px] max-[327px]:left-1 relative bottom-3 sm:bottom-0  right-4  sm:right-0 sm:w-[115px] md:w-[145px]"
              />
              <div className="relative right-4 max-[327px]:left-1 max-[463px]:bottom-7 bottom-3 sm:bottom-6 sm:right-0">

                <p className="text-amber-400 text-sm relative  sm:text-base md:text-lg mt-3 font-semibold drop-shadow-md">
                  🥉 {roundTopThree[2].teamName}
                </p>
                <p className="text-gray-400 relative text-xs sm:text-sm md:text-base">
                  {roundTopThree[2].college}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
