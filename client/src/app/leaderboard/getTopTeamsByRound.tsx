type Team = {
  _id: string;
  teamName: string;
  College: string;
  teamType: string;
  Round1: number | string | null;
  Round2: number | string | null;
  Round3: number | string | null;
  totalPoints: number | string | null;
};

type RankedTeam = {
  rank: number;
  teamName: string;
  college: string;
  score: number;
};

type RoundResults = {
  [round: string]: RankedTeam[] | null;
};

export function getTopTeamsByRound(data: Team[]): RoundResults {
  const rounds: (keyof Pick<Team, "Round1" | "Round2" | "Round3">)[] = [
    "Round1",
    "Round2",
    "Round3",
  ];
  const result: RoundResults = {};

  rounds.forEach((round) => {
    // Convert values safely to number
    const validTeams = data
      .map((team) => ({
        ...team,
        score:
          team[round] !== null && team[round] !== undefined
            ? Number(team[round])
            : 0,
      }))
      .filter((team) => !isNaN(team.score) && team.score > 0);

    if (validTeams.length === 0) {
      result[round] = null;
    } else {
      const sorted = [...validTeams].sort((a, b) => b.score - a.score);

      result[round] = sorted.slice(0, 3).map((team, index) => ({
        rank: index + 1,
        teamName: team.teamName,
        college: team.College,
        score: team.score,
      }));
    }
  });

  return result;
}