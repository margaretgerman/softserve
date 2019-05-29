function meeting(chairs, neededChairs) {
  let result = [],
    need = neededChairs;
  if (need == 0) return "Game on!";
  for (let i = 0; i < chairs.length; i++) {
    if (need == 0) break;
    if (
      chairs[i][0].length === chairs[i][1] ||
      chairs[i][0].length > chairs[i][1]
    ) {
      result.push(0);
    } else if (chairs[i][1] - chairs[i][0].length > need) {
      result.push(need);
    } else {
      let chairsAvailable = chairs[i][1] - chairs[i][0].length;
      if (chairs[i][1] - chairs[i][0].length <= need) {
        result.push(chairsAvailable);
        need = need - chairsAvailable;
      }
    }
  }
  return result;
}

meeting([["XXX", 3], ["XXXXX", 6], ["XXXXXX", 9]], 4);

// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5);

//meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0);
