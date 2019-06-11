const errorObject = {
  status: 'failed',
  reason: 'Incorrect input',
}

function rectangles(rect1, rect2) {
  let ab=Object.values(rect1), 
      pq=Object.values(rect2), 
      result = 0;

  if (!inputIsValid(ab, pq)) {
    return errorObject;
  }

  let a = Math.max(...ab), 
      b = Math.min(...ab),
      p = Math.max(...pq), 
      q = Math.min(...pq),
      firstInSecond = calculate(a, b, p, q),
      secondInFirst = calculate(p, q, a, b);
  
  if((p<=a && q<=b) || firstInSecond) {
    result = '2';
  }

  if((a<=p && b<=q) || secondInFirst) {
    result = '1';
  }

  return result;
}

function inputIsValid(ab, pq) {
  let [a,b] = ab,
      [p,q] = pq,
      isPositive = false,
      isNum = false;
  
  isPositive = (a>0 && b>0 && p>0 && q>0);
  isNum = (typeof(a) === 'number' && typeof(b) === 'number'&&
            typeof(p) === 'number' && typeof(q) === 'number');
  return isPositive && isNum;
}

function calculate(a, b, p, q) {
  let firstCondition = false, secondCondition = false, formula;

  if (p>a) firstCondition = true;

  formula = (2*p*q*a + (p*p - q*q)*Math.sqrt(p*p + q*q - a*a))/(p*p + q*q);

  if (b>=formula) secondCondition = true;

  return (firstCondition && secondCondition);
}
