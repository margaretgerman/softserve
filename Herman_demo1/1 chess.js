function chess(height, width, sym) {
  const inputError = {
      status: "Failed",
      reason: "Incorrect input"
    },
    argsError = {
      status: "Failed",
      reason: "Insufficient amount of arguments"
    };
  let res = "\n";

  if (arguments.length < 3) {
    return argsError;
  }

  if (!checkInput(height, width, sym)) {
    return inputError;
  }

  height = Math.floor(height / 2);
  width = Math.floor(width / 2);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i % 2 == 0) {
        res = res + sym + " ";
      } else if (i % 2 !== 0) {
        res = res + " " + sym;
      }

      if (j == width - 1) {
        res = res + "\n";
      }
    }
  }
  return res;
}

function checkInput(h, w, symb) {
  let isSymb = symb.length !== 1 || symb == " " ? false : true;
  let symbIsString = typeof symb === "string";
  let height = h / 1 === h && h > 0 ? true : false;
  let width = w / 1 === w && w > 0 ? true : false;

  return isSymb && height && width && symbIsString;
}
