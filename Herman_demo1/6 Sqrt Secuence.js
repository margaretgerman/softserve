function sqrtSecuence(length, m) {
  const errorObject = {
    status: "failed",
    reason: "Incorrect input"
  };

  let inputIsCorrect,
    result = [],
    current;

  inputIsCorrect = validateInput(m, length);

  if (inputIsCorrect == false) {
    return errorObject;
  }

  while (result.length !== length) {
    if (m == 0) break;
    current = Math.pow(m, 1 / 2);

    if (current % 1 == 0) {
      result.push(current);
    }

    m--;
  }
  return result;
}

function validateInput(m, length) {
  let isNumber = typeof m == "number" && typeof length == "number",
    isPositive = length > 0 && m > 0;

  return isNumber && isPositive;
}
