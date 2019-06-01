function damagedOrSunk(board, attacks) {
    let reversedBoard = [], shipsArr = [];
    
    reversedBoard = reverseBoard(board);
    shipsArr = doAttack(reversedBoard, attacks);
    countPoints(shipsArr);
    return countPoints(shipsArr);
}

function countShips(board){
    let ships = [], height = board.length, width = board[0].length ;
    for (let i=0; i<height; i++){
     for (let j=0; j<width; j++){
        if (board[i][j]) ships.push(board[i][j]);
      }
    }
    return ships;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function createShipsArray (board) {
    let ships, uniqueShips, shipsArray = [];
    ships = countShips(board);
    uniqueShips = ships.filter( onlyUnique );
    for (let i=0; i<uniqueShips.length; i++) {
        let currentShip = {};
        currentShip.name = uniqueShips[i].toString();
        currentShip.decks = ships.filter(x => x == uniqueShips[i]).length;
        currentShip.sunk = false;
        currentShip.damaged = false;
        currentShip.notTouched = true;
        shipsArray.push(currentShip);
    }
    return shipsArray;
}

function reverseBoard(board) {
    let reversedBoard = [];
    for(let i=0; i<board.length; i++) {
     reversedBoard.unshift(board[i]);
    }
   return reversedBoard;
}

function doAttack(reversedBoard, attacks) {
    let shipsArr = createShipsArray(reversedBoard);
    for (let i=0; i<attacks.length; i++) {
        [x,y] = attacks[i];
        let currentHit = reversedBoard[y-1][x-1];
        if(currentHit!==0) changeShipsArr(currentHit, shipsArr);
    }
    return shipsArr;
}

function changeShipsArr(currentHit, shipsArr) {
    for (let i=0; i<shipsArr.length; i++) {
        if (shipsArr[i].name == currentHit) {
            shipsArr[i].damaged = true;
            shipsArr[i].decks = shipsArr[i].decks - 1;
            shipsArr[i].notTouched = false;
        }
        if (shipsArr[i].decks == 0) {
            shipsArr[i].sunk = true;
            shipsArr[i].damaged = false;
        }
    }
    return (shipsArr);
}

function countPoints(shipsArr) {
    let resultObj = {
        sunk: 0, 
        damaged: 0,
        notTouched: 0,
        points: 0,
    }

    for (let i=0; i<shipsArr.length;i++){
        if (shipsArr[i].sunk == true) {
            resultObj.sunk = resultObj.sunk + 1; 
            resultObj.points = resultObj.points + 1;
        }
        if (shipsArr[i].damaged == true) {
            resultObj.damaged = resultObj.damaged + 1;
            resultObj.points = resultObj.points + 0.5;
        }
        if (shipsArr[i].notTouched == true) {
            resultObj.notTouched = resultObj.notTouched + 1;
            resultObj.points = resultObj.points - 1;
        }
    }
    return resultObj;
}

// board =     [[0,0,0,2,2,0],
//              [0,3,0,0,0,0],
//              [0,3,0,1,0,0],
//              [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2], [4,1], [4,4]];

var board = [ [0, 0, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 1, 0] ];
          
var attacks = [[3, 1], [3, 2], [3, 3]];
console.log(damagedOrSunk(board, attacks));