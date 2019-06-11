const errorObject = {
  status: 'failed',
  reason: 'Incorrect input',
}

function rectangles(rect1, rect2) {
  let ab=Object.values(rect1), pq=Object.values(rect2), result = 0;
  if (!inputIsValid(ab, pq)) {
    return errorObject;
  }
  let a = Math.max(...ab), b = Math.min(...ab),
  p = Math.max(...pq), q = Math.min(...pq);
  console.log(a, b, p, q);
  
  if((p<=a && q<=b) || (calculate(a, b, p, q))) result = '2';
  if((a<=p && b<=q) || calculate(p, q, a, b)) result = '1';
  return result;
}

function inputIsValid(ab, pq) {
  let [a,b] = ab, [p,q] = pq;;
  let isPositive = (a>0 && b>0 && p>0 && q>0);
  let isNum = (typeof(a) === 'number' && typeof(b) === 'number'&&
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

// obj1={a: 20, b:8,};
// obj2={c: 0.1, d:21,};

// obj1={a: 20, b:8,};
// obj2={c: 19, d:7,};

//obj1={c: 12, d:1,};
//obj2={a: 2, b:4,};

obj1={c: true, d:4,};
obj2={a: 70, b:40,};

console.log(rectangles(obj1, obj2));
//вывести меньший конверт
//2 объекта по 2 свойства со значениями typeof number, 