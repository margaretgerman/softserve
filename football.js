function football(cards) {
  let teamA = 11;
  let teamB = 11;
  const playerMin = 7;
  let badPlayers = {};
  for (let i = 0; i < cards.length; i++) {
    let thisPlayer = cards[i].slice(0, -1);
    let thisCard = cards[i].slice(-1);
    let thisTeam = cards[i][0];
    if (badPlayers[thisPlayer] === "removed") continue;
    if (thisCard === "R") {
      badPlayers[thisPlayer] = -100;
      badPlayers[thisPlayer] = "removed";
      if (thisTeam === "A") {
        teamA = teamA - 1;
        if (teamA < playerMin) return [teamA, teamB];
      }
      if (thisTeam === "B") {
        teamB = teamB - 1;
        if (teamB < playerMin) return [teamA, teamB];
      }
    }
    if (thisCard === "Y") {
      if (badPlayers[thisPlayer] === undefined) {
        badPlayers[thisPlayer] = -50; // 1я желтая карта
      } else {
        badPlayers[thisPlayer] = -50 + badPlayers[thisPlayer]; // 2я желтая карта
        badPlayers[thisPlayer] = "removed";
        if (thisTeam === "A") {
          teamA = teamA - 1;
          if (teamA < playerMin) return [teamA, teamB];
        }
        if (thisTeam === "B") {
          teamB = teamB - 1;
          if (teamB < playerMin) return [teamA, teamB];
        }
      }
    }
  }
  return [teamA, teamB];
}

// football([
//   "A7Y",
//   "A7Y",
//   "A1R",
//   "A2R",
//   "A3R",
//   "A5R",
//   "A4R",
//   "B11R",
//   "B9R",
//   "B2R",
//   "A3Y",
//   "B4R",
//   "B1Y",
//   "B3Y"
// ]);

football(["A1R", "B2R", "B2Y"]);
