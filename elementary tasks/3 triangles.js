function triangleArea(trianglesArr) {
  const inputError = {
    status: 'Failed',
    reason: 'Incorrect input',
  }

  let copyArr = [...trianglesArr],
      result = [];

  if (!checkInput(trianglesArr)) {
    return inputError;
  }
  
  for (let i = 0; i < copyArr.length; i++) {
    let curr = copyArr[i],  sides = [];
    
    for (let prop in curr) {
      if (!isNaN(curr[prop])) {
         sides.push(curr[prop]);
        }
    }
    let [a, b, c] = sides;
    curr.p = (a + b + c) / 2;
    curr.area = Math.sqrt(curr.p * (curr.p - a) * (curr.p - b) * (curr.p - c));
  }

  copyArr.sort(function(a, b) {
    return b.area - a.area;
  });

  for (let i = 0; i < copyArr.length; i++) {
    result.push(copyArr[i].vertices);
  }

  return result;
}

function checkInput(arr) {
  let isArr = Array.isArray(arr) && arr.length>0,
      hasObjects = true,
      enoughKeyValues = true, 
      numericValues = true, 
      positiveVals = true;

  for (let i = 0; i<arr.length; i++) {
    let currVal = Object.values(arr[i]);

    if (Object.prototype.toString.call(arr[i]) !== "[object Object]"){
      hasObjects = false;
      break;
    }
    
    if (!(Object.keys(arr[i]).length == 4)){
      enoughKeyValues = false;
      break;
    }

    if (!(typeof currVal[1] == 'number' && typeof currVal[2] == 'number' 
    && typeof currVal[3] == 'number')) {
      numericValues = false; 
      break;
    }

    if (currVal[1] == 0 ||currVal[2] == 0 || currVal[3] == 0 ) {
      positiveVals = false; 
      break;
    }
  }

  return hasObjects && isArr && enoughKeyValues && 
          numericValues && positiveVals;
}
