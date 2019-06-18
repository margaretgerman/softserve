function longestPalindrome(input) {
  let str = input.toString();
  let res = [];

  if (input.toString().length > 16 || input.toString().length < 2) {
    return {
      status: "Failed",
      reason: "Input should be more than 2 and less then 16 digits."
    };
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length + 1; j++) {
      let palindrome = isPalindrome(str.substring(i, j));
      if (palindrome !== false) res.push(palindrome);
    }
  }

  if (res.length == 0) return 0;
  return Math.max.apply(null, res);
}

function isPalindrome(temp) {
  let number,
    rem,
    final = 0;
  number = temp;
  temp = Number(temp);

  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp && final > 10) {
    return temp;
  } else {
    return false;
  }
}
