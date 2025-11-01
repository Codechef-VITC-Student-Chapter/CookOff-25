"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // import the Navbar
import { client } from "@/lib/sanityClient";
import { getTopTeamsByRound } from "./getTopTeamsByRound";
import Podium from "./Podium";

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  round: string;
  teamType: "solo" | "team";
  rank?: number;
}
type Club = {
  _id: string;
  teamName: string;
  College: string;
  Round1: number;
  Round2: number;
  Round3: number;
  totalPoints: number;
  teamType: "solo" | "team";
};
const query = `*[_type == "Clubs"]{
  _id,
  teamName,
  College,
  Round1,
  Round2,
  Round3,
  totalPoints,
  teamType
}`;
function isClub(doc: any): doc is Club {
  return (
    doc &&
    typeof doc._id === "string" &&
    typeof doc.teamName === "string" &&
    typeof doc.College === "string" &&
    typeof doc.Round1 === "number" &&
    typeof doc.Round2 === "number" &&
    typeof doc.Round3 === "number" &&
    typeof doc.totalPoints === "number"
  );
}


const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Round1");
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [clubs, setClubs] = useState<Club[]>([]);
  const tabs = ["Round1", "Round2", "Round3"];
  const [topsTeamsByRound, setTopTeamsByRound] = useState<ReturnType<typeof getTopTeamsByRound> | null>(null);

  useEffect(() => {
      let isMounted = true;
      
      // 🔧 Transform + Sort raw club data into leaderboard format
      const transformToLeaderboardEntries = (clubs: Club[]): LeaderboardEntry[] => {
        const rounds = ["Round1", "Round2", "Round3"] as const;

        // For each round, sort descending by score
        const sortedEntries = rounds.flatMap((round) => {
          const sortedClubs = [...clubs].sort(
            (a, b) => (b[round] ?? 0) - (a[round] ?? 0)
          );

          return sortedClubs.map((club) => ({
            id: `${club._id}-${round}`,
            name: club.teamName,
            score: club[round] ?? 0,
            teamType: club.teamType,
            round: round
          }));
        });

        return sortedEntries;
      };

      // 🟢 Initial fetch
      client.fetch<Club[]>(query).then((data) => {
        if (isMounted) {
          setClubs(data);
          setLeaderboardData(transformToLeaderboardEntries(data)); // sorted
          setTopTeamsByRound(getTopTeamsByRound(data));
          
        }
      });

      // 🔴 Live updates
      const subscription = client.listen(query).subscribe((update) => {
        const { result, transition, documentId } = update;

        setClubs((prev) => {
          let updatedClubs = [...prev];

          if (transition === "disappear") {
            updatedClubs = updatedClubs.filter((c) => c._id !== documentId);
          } else if (result && isClub(result)) {
            const updated = result;
            const exists = updatedClubs.some((c) => c._id === updated._id);

            if (exists) {
              updatedClubs = updatedClubs.map((c) =>
                c._id === updated._id ? updated : c
              );
            } else {
              updatedClubs.push(updated);
            }
          }

          // 🔁 Update frontend leaderboard with sorted data
          setLeaderboardData(transformToLeaderboardEntries(updatedClubs));
          
          return updatedClubs;
        });
      });

      // 🧹 Cleanup
      return () => {
        isMounted = false;
        subscription.unsubscribe();
        setLoading(false);
      };
    }, []);


  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);
        const mockData: LeaderboardEntry[] = [
          { id: "1", name: "CodeChef", score: 950, round: "Round 1", teamType: "solo" },
          { id: "2", name: "CodeChef", score: 920, round: "Round 1", teamType: "team" },
          { id: "3", name: "CodeChef", score: 890, round: "Round 1", teamType: "team" },
          { id: "4", name: "CodeChef", score: 870, round: "Round 1", teamType: "solo" },
          { id: "5", name: "CodeChef", score: 850, round: "Round 1", teamType: "team" },

          { id: "6", name: "CodeChef", score: 980, round: "Round 2", teamType: "solo" },
          { id: "7", name: "CodeChef", score: 940, round: "Round 2", teamType: "team" },
          { id: "8", name: "CodeChef", score: 910, round: "Round 2", teamType: "team" },
          { id: "9", name: "CodeChef", score: 870, round: "Round 2", teamType: "solo" },
          { id: "10", name: "CodeChef", score: 860, round: "Round 2", teamType: "team" },

          { id: "11", name: "CodeChef", score: 995, round: "Round 3", teamType: "solo" },
          { id: "12", name: "CodeChef", score: 960, round: "Round 3", teamType: "team" },
          { id: "13", name: "CodeChef", score: 940, round: "Round 3", teamType: "team" },
          { id: "14", name: "CodeChef", score: 900, round: "Round 3", teamType: "team" },
          { id: "15", name: "CodeChef", score: 880, round: "Round 3", teamType: "solo" },
        ];
        setLeaderboardData(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        setLoading(false);
      }
    };
    fetchLeaderboardData();
  }, []);

  const filteredData = leaderboardData
    .filter((entry) => entry.round === activeTab)
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));

  const topThree = filteredData.slice(0, 3);
  const remainingEntries = filteredData.slice(3);

  const hatImages = [
    "/goldHat_leaderboard.png",
    "/silver_leaderboard.png",
    "/bronzeHat_leaderboard.png",
  ];
console.log(topsTeamsByRound);
  return (
    <div className="min-h-screen bg-black overflow-hidden text-white pt-[6vh]">
      <Navbar />

      <div className="py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cerapro font-bold mb-2 tracking-wider">
            LEADERBOARD
          </h1>
          <h2 className="text-2xl sm:text-3xl font-cerapro font-semibold tracking-wide text-gray-300">
            TOP CODERS DETECTED
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20 text-lg">Loading...</div>
        ) : (
          <>
          <Podium topTeamsByRound={topsTeamsByRound} selectedRound={activeTab} />

            {/* Leaderboard Container */}
            <div
              className="max-w-4xl mx-auto rounded-3xl p-4 sm:p-8"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(2.8px)",
                WebkitBackdropFilter: "blur(2.8px)",
                border: "1px solid rgba(255, 255, 255, 0.36)",
              }}
            >
              {/* Tabs */}
              <div className="mb-6 sm:mb-10">
                <div className="relative flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-inner text-sm sm:text-base">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative flex-1 py-3 sm:py-4 font-cerapro font-bold text-center transition-all duration-300 ${
                        activeTab === tab
                          ? "text-black"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}

                  <div
                    className="absolute bottom-0 h-[5px] bg-black transition-all duration-300 ease-in-out"
                    style={{
                      width: `calc(100% / ${tabs.length})`,
                      left:
                        activeTab === "Round1"
                          ? "0%"
                          : activeTab === "Round2"
                          ? "33.3333%"
                          : "66.6666%",
                    }}
                  />
                </div>
              </div>

              {/* Leaderboard Entries */}
              <div className="space-y-3 sm:space-y-4">
                {[...topThree, ...remainingEntries].map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-200 hover:bg-gray-300 transition-all duration-200"
                  >
                    {/* Rank + Name */}
                    <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-1/2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white flex items-center justify-center rounded-full font-bold text-sm sm:text-base">
                        {entry.rank}
                      </div>
                      {entry.rank && entry.rank <= 3 && (
                        <img
                          src={hatImages[(entry.rank || 1) - 1]}
                          alt={`${entry.rank} place hat`}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                      )}
                      <span className="text-black font-medium text-base sm:text-lg truncate">
                        {entry.name}
                      </span>
                    </div>

                    {/*  team Type + Score */}
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-1/2 mt-2 sm:mt-0">
                      <div className="text-gray-700 font-semibold text-sm sm:text-base text-left sm:text-center w-1/2 sm:w-1/3">
                        {entry.teamType}
                      </div>
                      <div className="text-black font-bold text-base sm:text-lg text-right w-1/2 sm:w-1/3 flex items-center justify-end mt-0.5 sm:mt-0">
                        {entry.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
