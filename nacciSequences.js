function nacci(pattern, length) {
  let result = [], i = 0;
  if (length == 0 || pattern == '' || pattern ==[] || pattern == undefined)
  return [];
  
  while ( result.length<length){
    for (let j=0; j<pattern.length; j++){
      if(pattern[j] == 'fib') {
        result.push(fibonacci(i));
        continue}
      if(pattern[j] == 'pad') {
        result.push(padovan(i));
        continue}
      if(pattern[j] == 'jac') {
        result.push(jacobsthal(i));
         continue}
      if(pattern[j] == 'pel') {
        result.push(pell(i));
        continue}
      if(pattern[j] == 'tri') {
        result.push(tribonacci(i));
        continue}
      if(pattern[j] == 'tet') {
        result.push(tetranacci(i));
        continue}
    }
    i++;
  }
  return result;
}

function fibonacci(n){
  let result = [], a = 0, b = 1;
  if(n==0) return 0;
  if(n==1) return 1;
  result=[a,b];
  for ( let i = 2; i<=n; i++) {
    c = a + b; 
    a = b;
    b = c;
    result.push(c);
  }
return result[result.length-1];
}

function padovan(n) {
  let a0 = 1, a1 = 0, a2 = 0, result = [];
  if (n==0) return a0;
  if (n==1) return a1;
  if (n==2) return a2;
  result.push(a0, a1, a2);
  for ( let i = 3; i<=n; i++) {
    let current = result[i-2] + result[i-3];
    result.push(current)
  }
  return result[n];
}

function jacobsthal(n){
  let a0 = 0, a1 = 1, result = [];
  if (n==0) return a0;
  if (n==1) return a1;
  result=[a0,a1];
  for ( let i = 2; i<=n; i++) {
    let current = result[i-1] + 2*result[i-2];
    result.push(current)
  }
  return result[n];
}

function pell(n) {
  let a0 = 0, a1 = 1, result = [];
  if (n==0) return a0;
  if (n==1) return a1;
  result.push(a0, a1);
  for ( let i = 2; i<=n; i++) {
    let current = 2*result[i-1] + result[i-2];
    result.push(current)
  }
  return result[n];
}

function tribonacci(n) {
  let a0 = 0, a1 = 0, a2 = 1, result = [];
  if (n==0) return a0;
  if (n==1) return a1;
  if (n==2) return a2;
  result.push(a0, a1, a2);
  for ( let i = 3; i<=n; i++) {
    let current = result[i-1] + result[i-2] + result[i-3];
    result.push(current)
  }
  return result[n];
}

function tetranacci(n) {
  let a0 = 0, a1 = 0, a2 = 0, a3 = 1, result = [];
  if (n==0) return a0;
  if (n==1) return a1;
  if (n==2) return a2;
  if (n==3) return a3;
  result.push(a0, a1, a2, a3);
  for ( let i = 4; i<=n; i++) {
    let current = result[i-1] + result[i-2] + result[i-3] + result[i-4];
    result.push(current)
  }
  return result[n];
}

console.log(nacci(['jac', 'jac', 'pel'], 10));
