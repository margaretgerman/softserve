const errorObject = { 
  status: 'failed',
  reason: 'Incorrect input',
 };
 
 function sqrtSecuence(m, length) {
  let inputCorrect = inputIsCorrect(m, length);
  if (inputCorrect == false) 
    return errorObject;
  let current, result = [];
  while ( result.length !== length) {
    if (m==0) break;
    current = Math.pow(m, 1/2);
    if (current % 1 == 0) {
    result.push(current)
    }
    m--;
  }
  return result;
}

function inputIsCorrect(m, length) { 
  let number, positive, notDecimal;
  number =  (typeof m == 'number' && typeof length == 'number');
  positive = (length>0 && m>0);
  notDecimal = (length%1 == 0) && (m%1 == 0);
  return number && positive &&  notDecimal;
}

//выдавать ли ошибку при длинне большей, чем это возможно
