const errorObject = {
  status: "failed",
  reason: "Incorrect input"
};

function isLucky(context) {
  let min, max, result, easy, diff;
  min = context.min.toString();
  max = context.max.toString();

  if (isNumber(min, max)) {
    let range = max - min + 1;
    easy = easyMethod(min, range);
    diff = diffMethod(min, range);
    result = defineWinner(easy, diff);
  } else {
    result = errorObject;
  }
  return result;
}

function isNumber(min, max) {
  let isNum = min / min == 1 && max / max == 1;
  let isInRange = max >= min;

  if (isInRange && isNum) {
    return true;
  } else return false;
}

function easyMethod(min, range) {
  let lucky = 0;
  for (let i = 0; i < range; i++) {
    let current, firstSubstr, secondSubstr, firstSum, secondSum;
    current = Number(min) + i + "";

    firstSubstr = current.substr(0, 3).split("");
    secondSubstr = current.substr(3, 6).split("");
    firstSum = firstSubstr.reduce((a, b) => Number(a) + Number(b), 0);
    secondSum = secondSubstr.reduce((a, b) => Number(a) + Number(b), 0);

    if (firstSum == secondSum) {
      lucky++;
    }
  }
  return lucky;
}

function diffMethod(min, range) {
  let lucky = 0;
  for (let i = 0; i < range; i++) {
    let odd = [],
      even = [],
      current,
      oddSum,
      evenSum;
    current = Number(min) + i + "";
    current.split("").map(x => {
      x % 2 == 0 ? even.push(x) : odd.push(x);
    });

    oddSum = odd.reduce((a, b) => Number(a) + Number(b), 0);
    evenSum = even.reduce((a, b) => Number(a) + Number(b), 0);
    if (oddSum == evenSum) {
      lucky++;
    }
  }
  return lucky;
}

function defineWinner(easy, diff) {
  let obj = {
    easy: easy,
    diff: diff,
    winner: 0
  };

  if (easy > diff) {
    obj.winner = "easy";
  } else if (easy == diff) {
    obj.winner = "no winner";
  } else {
    obj.winner = "difficult";
  }
  return obj;
}
