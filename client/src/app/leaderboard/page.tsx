"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // import the Navbar

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  round: string;
  rank?: number;
}

const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Round 1");
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const tabs = ["Round 1", "Round 2", "Round 3"];

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);

        const mockData: LeaderboardEntry[] = [
          // Round 1
          { id: "1", name: "CodeChef", score: 950, round: "Round 1" },
          { id: "2", name: "CodeChef", score: 920, round: "Round 1" },
          { id: "3", name: "CodeChef", score: 890, round: "Round 1" },
          { id: "4", name: "CodeChef", score: 870, round: "Round 1" },
          { id: "5", name: "CodeChef", score: 850, round: "Round 1" },

          // Round 2
          { id: "6", name: "CodeChef", score: 980, round: "Round 2" },
          { id: "7", name: "CodeChef", score: 940, round: "Round 2" },
          { id: "8", name: "CodeChef", score: 910, round: "Round 2" },
          { id: "9", name: "CodeChef", score: 870, round: "Round 2" },
          { id: "10", name: "CodeChef", score: 860, round: "Round 2" },

          // Round 3
          { id: "11", name: "CodeChef", score: 995, round: "Round 3" },
          { id: "12", name: "CodeChef", score: 960, round: "Round 3" },
          { id: "13", name: "CodeChef", score: 940, round: "Round 3" },
          { id: "14", name: "CodeChef", score: 900, round: "Round 3" },
          { id: "15", name: "CodeChef", score: 880, round: "Round 3" },
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-cerapro font-bold mb-4 tracking-wider">
            LEADERBOARD
          </h1>
          <h2 className="text-3xl md:text-4xl font-cerapro font-semibold tracking-wide">
            TOP CODERS DETECTED
          </h2>
        </div>

        {/* Podium Section */}
        {loading ? (
          <div className="text-center text-gray-400 py-20">Loading...</div>
        ) : (
          <>
            {/* Responsive Podium */}
            <div
              className="relative w-screen left-1/2 -translate-x-1/2 bg-cover bg-center bg-no-repeat py-10 sm:py-16 md:py-20"
              style={{
                backgroundImage: "url('/podium_background.png')",
                backgroundSize: '100% 100%',
              }}
            >
              <div className="relative flex justify-center px-2 sm:px-6 md:px-10">
                <div className="relative w-full max-w-[500px] md:max-w-[650px] aspect-[1.6/1] mx-auto">
                  <img
                    src="/podium_leaderboard.png"
                    alt="Podium"
                    className="w-full h-full object-contain"
                  />

                  {/* 🥇 1st Place Hat */}
                  {topThree[0] && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] sm:top-[-6%] md:top-[-4%] flex flex-col items-center">
                      <img
                        src={hatImages[0]}
                        alt="1st Place Hat"
                        className="object-contain w-[110px] sm:w-[140px] md:w-[170px]"
                      />
                    </div>
                  )}

                  {/* 🥈 2nd Place Hat */}
                  {topThree[1] && (
                    <div className="absolute left-[2%] sm:left-[6%] md:left-[5%] top-[29%] flex flex-col items-center">
                      <img
                        src={hatImages[1]}
                        alt="2nd Place Hat"
                        className="object-contain w-[95px] sm:w-[120px] md:w-[150px]"
                      />
                    </div>
                  )}

                  {/* 🥉 3rd Place Hat */}
                  {topThree[2] && (
                    <div className="absolute right-[2%] sm:right-[6%] md:right-[6%] top-[22%] flex flex-col items-center">
                      <img
                        src={hatImages[2]}
                        alt="3rd Place Hat"
                        className="object-contain w-[90px] sm:w-[115px] md:w-[145px]"
                      />
                    </div>
                  )}

                  {/* Chef Titles on Podium */}
                  <div className="absolute inset-0 flex justify-between items-end text-white font-cerapro font-extrabold">
                    <p className="absolute left-[8%] bottom-[38%] text-base sm:text-xl md:text-2xl text-center">
                      Sous Chef
                    </p>
                    <p className="absolute left-1/2 -translate-x-1/2 bottom-[45%] text-lg sm:text-2xl md:text-3xl text-center">
                      Master Chef
                    </p>
                    <p className="absolute right-[8%] bottom-[35%] text-base sm:text-xl md:text-2xl text-center">
                      Line Chef
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div
              className="max-w-4xl mx-auto rounded-3xl p-8"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(2.8px)",
                WebkitBackdropFilter: "blur(2.8px)",
                border: "1px solid rgba(255, 255, 255, 0.36)",
              }}
            >
              {/* Tabs Section */}
              <div className="mb-10">
                <div className="relative flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-inner">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative flex-1 py-4 font-cerapro font-bold text-lg text-center transition-all duration-300 ${
                        activeTab === tab
                          ? "text-black"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}

                  {/* Sliding underline */}
                  <div
                    className="absolute bottom-1 h-2 bg-black rounded-full transition-all duration-300 ease-in-out"
                    style={{
                      width: `calc(100% / ${tabs.length})`,
                      left:
                        activeTab === "Round 1"
                          ? "0%"
                          : activeTab === "Round 2"
                          ? "33.3333%"
                          : "66.6666%",
                    }}
                  />
                </div>
              </div>

              {/* Leaderboard Rows */}
              <div className="space-y-4">
                {/* Top 3 entries */}
                {topThree.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-2xl p-4 flex items-center justify-between bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold text-base">
                        {entry.rank}
                      </div>
                      <img
                        src={hatImages[(entry.rank || 1) - 1]}
                        alt={`${entry.rank} place hat`}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-black font-medium text-base">{entry.name}</span>
                    </div>
                    <span className="text-black font text-lg">{entry.score}</span>
                  </div>
                ))}

                {/* Remaining entries */}
                {remainingEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-2xl p-4 flex items-center justify-between bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold text-base">
                        {entry.rank}
                      </div>
                      <span className="text-black font-medium text-base">{entry.name}</span>
                    </div>
                    <span className="text-black font-semibold text-lg">{entry.score}</span>
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
