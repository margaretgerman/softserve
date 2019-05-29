function nextVersion(input) {
  let versionArr = input.split(".");

  for (let i = versionArr.length - 1; i >= 0; i--) {
    console.log(i);
    if (i > 0 && versionArr[i] === "9") {
      versionArr[i] = 0;
    } else {
      ++versionArr[i];
      break;
    }
  }
  return versionArr.join(".");
}
