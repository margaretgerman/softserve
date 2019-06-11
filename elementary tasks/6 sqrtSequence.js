function sqrtSecuence(m, length) {
  const errorObject = { 
    status: 'failed',
    reason: 'Incorrect input',
   };

  let inputCorrect = inputIsCorrect(m, length), 
      result = [],
      current;

  if (inputCorrect == false) {
    return errorObject;
  }

  while ( result.length !== length) {
    if (m==0) 
      break;
    current = Math.pow(m, 1/2);

    if (current % 1 == 0) {
    result.push(current);
    }
    m--;
  }
  return result;
}

function inputIsCorrect(m, length) { 
  let isNumber, 
      isPositive, 
      notDecimal;

  isNumber =  (typeof m == 'number' && typeof length == 'number');
  isPositive = (length>0 && m>0);
  notDecimal = (length%1 == 0) && (m%1 == 0);

  return isNumber && isPositive &&  notDecimal;
}
