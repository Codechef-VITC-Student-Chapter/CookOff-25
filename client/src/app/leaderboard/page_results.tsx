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
          { id: "1", name: "Alice John", score: 950, round: "Round 1" },
          { id: "2", name: "Bob Smith", score: 920, round: "Round 1" },
          { id: "3", name: "Charlie Brown", score: 890, round: "Round 1" },
          { id: "4", name: "Diana Prince", score: 870, round: "Round 1" },
          { id: "5", name: "Eve Adams", score: 850, round: "Round 1" },

          // Round 2
          { id: "6", name: "John Doe", score: 980, round: "Round 2" },
          { id: "7", name: "Mary Jane", score: 940, round: "Round 2" },
          { id: "8", name: "Steve Rogers", score: 910, round: "Round 2" },
          { id: "9", name: "Bruce Wayne", score: 870, round: "Round 2" },
          { id: "10", name: "Tony Stark", score: 860, round: "Round 2" },

          // Round 3
          { id: "11", name: "Clark Kent", score: 995, round: "Round 3" },
          { id: "12", name: "Barry Allen", score: 960, round: "Round 3" },
          { id: "13", name: "Natasha Romanoff", score: 940, round: "Round 3" },
          { id: "14", name: "Peter Parker", score: 900, round: "Round 3" },
          { id: "15", name: "Wanda Maximoff", score: 880, round: "Round 3" },
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
           {/* 🏆 Full-Width Podium Section */}
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

                {/* 🥇 1st Place */}
                {topThree[0] && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] sm:top-[-7%] md:top-[-5%] flex flex-col items-center">
                    <img
                      src={hatImages[0]}
                      alt="1st Place Hat"
                      className="object-contain w-[110px] sm:w-[140px] md:w-[170px]"
                    />
                    <p className="text-center font-cerapro font-extrabold text-lg sm:text-2xl md:text-3xl mt-2 whitespace-nowrap max-w-[120px] sm:max-w-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {topThree[0].name}
                    </p>
                  </div>
                )}

                {/* 🥈 2nd Place */}
                {topThree[1] && (
                  <div className="absolute left-[2%] sm:left-[6%] md:left-[8%] top-[5%] flex flex-col items-center">
                    <img
                      src={hatImages[1]}
                      alt="2nd Place Hat"
                      className="object-contain w-[95px] sm:w-[120px] md:w-[150px]"
                    />
                    <p className="text-center font-cerapro font-extrabold text-lg sm:text-2xl md:text-3xl mt-2 whitespace-nowrap max-w-[110px] sm:max-w-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {topThree[1].name}
                    </p>
                  </div>
                )}

                {/* 🥉 3rd Place */}
                {topThree[2] && (
                  <div className="absolute right-[2%] sm:right-[6%] md:right-[0%] top-[10%] flex flex-col items-center">
                    <img
                      src={hatImages[2]}
                      alt="3rd Place Hat"
                      className="object-contain w-[90px] sm:w-[115px] md:w-[145px]"
                    />
                    <p className="text-center font-cerapro font-extrabold text-lg sm:text-2xl md:text-3xl mt-2 whitespace-nowrap max-w-[110px] sm:max-w-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {topThree[2].name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>


            {/* Leaderboard List */}
            <div className="max-w-4xl mx-auto bg-[#2a2a2a] rounded-3xl p-8">
              {/* Tabs */}
              <div className="mb-8">
                {/* Desktop Tabs */}
                <div className="hidden md:flex gap-4 justify-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-8 py-3 rounded-xl font-cerapro font-semibold text-lg transition-all ${
                        activeTab === tab
                          ? "bg-white text-black"
                          : "bg-[#1a1a1a] text-white hover:bg-[#3a3a3a]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Mobile Dropdown */}
                <div className="block md:hidden">
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    className="w-full rounded-xl bg-[#1a1a1a] text-white font-cerapro font-semibold text-lg py-3 px-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    {tabs.map((tab) => (
                      <option key={tab} value={tab}>
                        {tab}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Entries */}
              <div className="space-y-3">
                {/* Top 3 entries with hats */}
                {topThree.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-[#c4c4c4] rounded-2xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-cerapro font-bold">
                        {entry.rank}
                      </div>
                      <img
                        src={hatImages[(entry.rank || 1) - 1]}
                        alt={`${entry.rank} place hat`}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-black font-cerapro font-semibold text-lg">
                        {entry.name}
                      </span>
                    </div>
                    <span className="text-black font-cerapro font-bold text-xl">
                      {entry.score}
                    </span>
                  </div>
                ))}

                {/* Remaining entries */}
                {remainingEntries.length > 0 ? (
                  remainingEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="bg-[#c4c4c4] rounded-2xl p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-cerapro font-bold">
                          {entry.rank}
                        </div>
                        <span className="text-black font-cerapro font-semibold text-lg">
                          {entry.name}
                        </span>
                      </div>
                      <span className="text-black font-cerapro font-bold text-xl">
                        {entry.score}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-400 font-cerapro">
                    No more entries for this round
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;