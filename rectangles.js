function rectangles(rect1, rect2) {
  let ab=Object.values(rect1), pq=Object.values(rect2), result = 0;
  let a = Math.max(...ab), b = Math.min(...ab),
  p = Math.max(...pq), q = Math.min(...pq);
  if((p<=a && q<=b) || (calculate(a, b, p, q))) result = '2nd envelope fits in 1st';
  if((a<=p && b<=q) || calculate(p, q, a, b)) result = '1st envelope fits in 2nd';
  return result;
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

obj1={c: 0.1, d:21,};
obj2={a: 20, b:8,};

console.log(rectangles(obj1, obj2));