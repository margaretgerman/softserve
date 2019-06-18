function fibonacciInRange(context) {
  const errorObject = {
    status: "failed",
    reason: "Incorrect input"
  };

  let result = [];

  Object.prototype.toString.call(context) == "[object Object]"
    ? (result = fibContext(context))
    : (result = fibLength(context));

  return result;
}

function fibContext(context) {
  let min = context.min,
    max = context.max,
    n,
    i = 0,
    result = [];

  n = fibonacci(0, "range");

  if (!(inputIsValid(min) && inputIsValid(max))) {
    return {
      status: "Failed",
      reason: "Input shoulg consist of positive numbers."
    };
  }

  if (min > max) {
    return {
      status: "Failed",
      reason: "Min is greater than max"
    };
  }

  while (n < min) {
    n = fibonacci(i, "range");
    if (n >= min) {
      break;
    }
    i++;
  }

  while (n <= max) {
    n = fibonacci(i, "range");
    if (n > max) {
      break;
    }
    result.push(n);
    i++;
  }
  return result;
}

function fibLength(context) {
  if (typeof context !== "number") {
    return {
      status: "Failed",
      reason: "Input shoulg consist of positive numbers."
    };
  }

  return fibonacci(context, "len");
}

function fibonacci(n, type) {
  let result = [],
    a = 0,
    b = 1;
  if (n == 0) return 0;
  if (n == 1) return 1;
  result = [a, b];
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    result.push(c);
  }
  if (type == "range") {
    return result[result.length - 1];
  } else if (type == "len") {
    result.pop();
    return result;
  }
}

function inputIsValid(num) {
  return typeof num == "number" && num > 0;
}
