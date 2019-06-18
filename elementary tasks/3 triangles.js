function triangleArea(trianglesArr) {
  const inputError = {
    status: "Failed",
    reason: "Incorrect input"
  };

  let copyArr = [...trianglesArr],
    result = [];

  if (!checkInput(trianglesArr)) {
    return inputError;
  }

  for (let i = 0; i < copyArr.length; i++) {
    let curr = copyArr[i],
      sides = [];

    for (let prop in curr) {
      if (!isNaN(curr[prop])) {
        sides.push(curr[prop]);
      }
    }

    let [a, b, c] = sides;

    curr.p = (a + b + c) / 2;
    curr.area = Math.sqrt(curr.p * (curr.p - a) * (curr.p - b) * (curr.p - c));
  }

  copyArr.sort(function(a, b) {
    return b.area - a.area;
  });

  for (let i = 0; i < copyArr.length; i++) {
    result.push(copyArr[i].vertices);
  }

  return result;
}

function checkInput(arr) {
  let enoughKeyValues = true,
    numericValues = true;

  for (let i = 0; i < arr.length; i++) {
    let currVal = Object.values(arr[i]);

    if (!(Object.keys(arr[i]).length == 4)) {
      enoughKeyValues = false;
      break;
    }

    if (
      !(
        typeof currVal[1] == "number" &&
        typeof currVal[2] == "number" &&
        typeof currVal[3] == "number"
      )
    ) {
      numericValues = false;
      break;
    }
  }

  return enoughKeyValues && numericValues;
}
