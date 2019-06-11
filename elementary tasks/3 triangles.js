const inputError = {
  status: 'Failed',
  reason: 'Incorrect input',
}

function triangleArea(trianglesArr) {
  if (!checkInput(trianglesArr)) {
    return inputError;
  }
  let copy = [...trianglesArr];
  let result = [];
  
  for (let i = 0; i < copy.length; i++) {
    let curr = copy[i];
    let sides = [];
    for (let prop in curr) {
      if (!isNaN(curr[prop])) sides.push(curr[prop]);
    }
    let [a, b, c] = sides;
    curr.p = (a + b + c) / 2;
    curr.area = Math.sqrt(curr.p * (curr.p - a) * (curr.p - b) * (curr.p - c));
  }

  copy.sort(function(a, b) {
    return b.area - a.area;
  });

  for (let i = 0; i < copy.length; i++) {
    result.push(copy[i].vertices);
  }
  return result;
}

function checkInput(arr) {
  let isArr = Array.isArray(arr) && arr.length>0;
  let hasObjects = true, enoughKeyValues = true, numericValues = true, positiveVals = true;;
  for (let i = 0; i<arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) !== "[object Object]"){
      hasObjects = false;
      break;
    }
    
    if (!(Object.keys(arr[i]).length == 4)){
      enoughKeyValues = false;
      break;
    }

    let currVal = Object.values(arr[i]);
    if (!(typeof currVal[1] == 'number' && typeof currVal[2] == 'number' && typeof currVal[3] == 'number')) {
      numericValues = false; 
      break;
    }

    if (currVal[1] == 0 ||currVal[2] == 0 || currVal[3] == 0 ) {
      positiveVals = false; 
      break;
    }

    
  }
  return hasObjects && isArr && enoughKeyValues && numericValues && positiveVals;
}

let obj = [
  {
    vertices: "ABC",
    a: 10,
    b: 20,
    c: 22.36
  },
  {
    vertices: "DEF",
    d: 5,
    e: 6,
    f: 7
  },
  {
    vertices: "GHK",
    g: 7,
    h: 9,
    k: 12
  },
  {
    vertices: "QWR",
    q: 30,
    w: 40,
    r: 50,
  }
];
//triangleArea(obj);
console.log(triangleArea(obj));
//проверка аргументов
// a+b > c