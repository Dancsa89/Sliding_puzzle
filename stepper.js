const tablePackage = require('table');
const readlineSync = require('readline-sync');

let gameAreaMatrix = [];
let pickedNumber;
let possibleNumbers = [];
let row = 0;
let coll = 0;

const matrix = () => {
  for (let i = 0; i < 9; i++) {
    possibleNumbers[i] = i;
    if (possibleNumbers[i] === 0) {
      possibleNumbers[i] = ' ';
    }
  }
};

const generator = () => {
  matrix();
  for (let y = 0; y <= 2; y++) {
    gameAreaMatrix[y] = [];
    for (let x = 0; x <= 2; x++) {
      pickedNumber = Math.floor(Math.random() * (possibleNumbers.length));
      gameAreaMatrix[y][x] = possibleNumbers[pickedNumber];
      possibleNumbers.splice(pickedNumber, 1);
    }
  }
  let track = tablePackage.table(gameAreaMatrix);
  console.log(track);
};

const gameArea = () => {
  matrix();
  generator();
};

const clearArea = () => {
  let gameAreaMatrixLeft = gameAreaMatrix;
  let trackArea = tablePackage.table(gameAreaMatrixLeft);
  console.clear(gameAreaMatrix);
  console.log(trackArea);
};

const moveLeft = () => {
  if (coll <= 1) {
    let tempRight = gameAreaMatrix[row][coll + 1];
    gameAreaMatrix[row][coll + 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempRight;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveRight = () => {
  if (coll >= 1) {
    let tempLeft = gameAreaMatrix[row][coll - 1];
    gameAreaMatrix[row][coll - 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempLeft;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveUp = () => {
  if (row <= 1) {
    let tempDown = gameAreaMatrix[row + 1][coll];
    gameAreaMatrix[row + 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempDown;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveDown = () => {
  if (row >= 1) {
    let tempUp = gameAreaMatrix[row - 1][coll];
    gameAreaMatrix[row - 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempUp;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

gameArea();

const stepping = () => {
  for (row = 0; row < gameAreaMatrix.length; row++) {
    for (coll = 0; coll < gameAreaMatrix[row].length; coll++) {
      let actualElement = gameAreaMatrix[row][coll];
      if (actualElement === ' ') {
        let order = readlineSync.question('What is the order Master? ');
        switch (order) {
          case 'a':
            moveLeft();
            break;
          case 'd':
            moveRight();
            break;
          case 'w':
            moveUp();
            break;
          case 's':
            moveDown();
            break;
          default:
            console.log('Wrong order, try again! ');
            break;
        }
      }
    }
  }
};

while (true) {
  stepping();
}
