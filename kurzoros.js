const tablePackage = require('table');
const readlineSync = require('readline-sync');
const keypress = require('keypress');
keypress(process.stdin);

let possibleNumbers = [];

const matrix = () => {
  for (let i = 0; i < 9; i++) {
    possibleNumbers[i] = i;
    if (possibleNumbers[i] === 0) {
      possibleNumbers[i] = ' ';
    }
  }
};

matrix();

let gameAreaMatrix = [];
let pickedNumber;

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

let row = 0;
let coll = 0;

const moveLeft = () => {
  if (coll <= 1) {
    let tempRight = gameAreaMatrix[row][coll + 1];
    gameAreaMatrix[row][coll + 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempRight;
    let gameAreaMatrixRight = gameAreaMatrix;
    let trackRight = tablePackage.table(gameAreaMatrixRight);
    console.clear(gameAreaMatrix);
    console.log(trackRight);
  } else {
    let gameAreaMatrixRight = gameAreaMatrix;
    let trackRight = tablePackage.table(gameAreaMatrixRight);
    console.clear(gameAreaMatrix);
    console.log(trackRight);
    console.log('Wrong Way! Need new order. ');
  }
};
const moveRight = () => {
  if (coll >= 1) {
    let tempLeft = gameAreaMatrix[row][coll - 1];
    gameAreaMatrix[row][coll - 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempLeft;
    let gameAreaMatrixLeft = gameAreaMatrix;
    let trackLeft = tablePackage.table(gameAreaMatrixLeft);
    console.clear(gameAreaMatrix);
    console.log(trackLeft);
  } else {
    let gameAreaMatrixLeft = gameAreaMatrix;
    let trackLeft = tablePackage.table(gameAreaMatrixLeft);
    console.clear(gameAreaMatrix);
    console.log(trackLeft);
    console.log('Wrong Way! Need new order. ');
  }
};
const moveUp = () => {
  if (row <= 1) {
    let tempDown = gameAreaMatrix[row + 1][coll];
    gameAreaMatrix[row + 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempDown;
    let gameAreaMatrixDown = gameAreaMatrix;
    let trackDown = tablePackage.table(gameAreaMatrixDown);
    console.clear(gameAreaMatrix);
    console.log(trackDown);
  } else {
    let gameAreaMatrixDown = gameAreaMatrix;
    let trackDown = tablePackage.table(gameAreaMatrixDown);
    console.clear(gameAreaMatrix);
    console.log(trackDown);
    console.log('Wrong Way! Need new order. ');
  }
};
const moveDown = () => {
  if (row >= 1) {
    let tempUp = gameAreaMatrix[row - 1][coll];
    gameAreaMatrix[row - 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempUp;
    let gameAreaMatrixUp = gameAreaMatrix;
    let trackUp = tablePackage.table(gameAreaMatrixUp);
    console.clear(gameAreaMatrix);
    console.log(trackUp);
  } else {
    let gameAreaMatrixUp = gameAreaMatrix;
    let trackUp = tablePackage.table(gameAreaMatrixUp);
    console.clear(gameAreaMatrix);
    console.log(trackUp);
    console.log('Wrong Way! Need new order. ');
  }
}

}
const stepping = () => {
  for (row = 0; row < gameAreaMatrix.length; row++) {
    for (coll = 0; coll < gameAreaMatrix[row].length; coll++) {
      let actualElement = gameAreaMatrix[row][coll];
      if (actualElement === ' ') {
        let order = readlineSync.question('Use the arrow keys to move the numbers! ');
        switch (order) {
          case ('[D'):
            moveLeft();
            break;
          case ('[C'):
            moveRight();
            break;
          case ('[A'):
            moveUp();
            break;
          case ('[B'):
            moveDown();
            break;
        }
      }
    }
  }
};

while (true) {
  stepping();
}
