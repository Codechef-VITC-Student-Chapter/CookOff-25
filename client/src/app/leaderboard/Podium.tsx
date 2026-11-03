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
  topTeamsByRound: RoundResults|null;
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
      <div className="relative flex justify-center px-2 sm:px-6 md:px-10">
        <div className="relative w-full max-w-[500px] md:max-w-[650px] aspect-[1.6/1] mx-auto">
          <img
            src="/podium_leaderboard.png"
            alt="Podium"
            className="w-full h-full object-contain"
          />

          {/* 🥇 1st Place */}
          {roundTopThree[0] && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[-10%]  md:top-[-15%] flex flex-col items-center 
            text-center">
              <img
                src={hatImages[0]}
                alt="1st Place Hat"
                className="object-contain w-[110px] sm:w-[140px] md:w-[170px]"
              />
              <p className="text-yellow-300 text-sm sm:text-base md:text-lg font-semibold mt-2 drop-shadow-md">
                🥇 {roundTopThree[0].teamName} 
              </p>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                {roundTopThree[0].college}
              </p>
            </div>
          )}

          {/* 🥈 2nd Place */}
          {roundTopThree[1] && (
            <div className="absolute left-[2%] sm:left-[6%] md:left-[5%] top-[10%] flex flex-col items-center text-center">
              <img
                src={hatImages[1]}
                alt="2nd Place Hat"
                className="object-contain w-[95px] sm:w-[120px] md:w-[150px]"
              />
              <p className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold mt-1 drop-shadow-md">
                🥈 {roundTopThree[1].teamName}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {roundTopThree[1].college}
              </p>
            </div>
          )}

          {/* 🥉 3rd Place */}
          {roundTopThree[2] && (
            <div className="absolute right-[2%] sm:right-[6%] md:right-[6%] top-[5%] flex flex-col items-center text-center">
              <img
                src={hatImages[2]}
                alt="3rd Place Hat"
                className="object-contain w-[90px] sm:w-[115px] md:w-[145px]"
              />
              <p className="text-amber-400 text-sm sm:text-base md:text-lg font-semibold mt-1 drop-shadow-md">
                🥉 {roundTopThree[2].teamName}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {roundTopThree[2].college}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
