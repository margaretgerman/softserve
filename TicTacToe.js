function tictactoe(input) {
  let winner = false;
  let firstDiagonal = [input[0][0], input[1][1], input[2][2]];
  let secondDiagonal = [input[0][2], input[1][1], input[2][0]];

  winner = diagonalCheck(firstDiagonal);
  if (!winner) winner = diagonalCheck(secondDiagonal);
  if (!winner) winner = verHorCheck(input);
  if (!winner) {
    for (let i = 0; i < 3; i++) {
      if (input[i].includes(0)) {
        winner = -1;
      } else winner = 0;
    }
  }

  return winner;
}

function verHorCheck(input) {
  let winner;
  for (let i = 0; i < 3; i++) {
    let accV = 1,
      accH = 1;
    for (let j = 0; j < 3; j++) {
      accV = accV * input[j][i];
      accH = accH * input[i][j];
    }
    if (accV == 1 || accV == 8) {
      winner = input[0][i];
      break;
    }
    if (accH == 1 || accH == 8) {
      winner = input[i][0];
      break;
    }
  }
  return winner;
}
function diagonalCheck(diagonal) {
  let winner = false;
  if (diagonal.every(v => v === diagonal[0] && diagonal[0] !== 0)) {
    winner = diagonal[0];
  }
  return winner;
}
