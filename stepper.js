const tablePackage = require('table');
const readlineSync = require('readline-sync');

let possibleNumbers = [];

const matrix = () => {
  for (let i = 0; i < 9; i++) {
    possibleNumbers[i] = i;
    if (possibleNumbers[i] === 0) {
      let zero = possibleNumbers[i];
      

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

const stepping = () => {
  for (let row = 0; row < gameAreaMatrix.length; row++) {
    for (let coll = 0; coll < gameAreaMatrix[row].length; coll++) {
      let actualElement = gameAreaMatrix[row][coll];
      if (actualElement === 0) {

        let order = readlineSync.question('What is the order Master? ');
        switch (order) {
          case 'left':
            if (coll <= 1) {
              let tempRight = gameAreaMatrix[row][coll + 1];
              gameAreaMatrix[row][coll + 1] = gameAreaMatrix[row][coll];
              gameAreaMatrix[row][coll] = tempRight;
              let gameAreaMatrixRight = gameAreaMatrix;
              let trackRight = tablePackage.table(gameAreaMatrixRight);
              console.log(trackRight);
            } else {
              console.log('Wrong Way! Need new order. ');
            }
            break;
          case 'right':
            if (coll >= 1) {
              let tempLeft = gameAreaMatrix[row][coll - 1];
              gameAreaMatrix[row][coll - 1] = gameAreaMatrix[row][coll];
              gameAreaMatrix[row][coll] = tempLeft;
              let gameAreaMatrixLeft = gameAreaMatrix;
              let trackLeft = tablePackage.table(gameAreaMatrixLeft);
              console.log(trackLeft);
            } else {
              console.log('Wrong Way! Need new order. ');
            }
            break;
          case 'up':
            if (row <= 1) {
              let tempDown = gameAreaMatrix[row + 1][coll];
              gameAreaMatrix[row + 1][coll] = gameAreaMatrix[row][coll];
              gameAreaMatrix[row][coll] = tempDown;
              let gameAreaMatrixDown = gameAreaMatrix;
              let trackDown = tablePackage.table(gameAreaMatrixDown);
              console.log(trackDown);
            } else {
              console.log('Wrong Way! Need new order. ');
            }
            break;
          case 'down':
            if (row >= 1) {
              let tempUp = gameAreaMatrix[row - 1][coll];
              gameAreaMatrix[row - 1][coll] = gameAreaMatrix[row][coll];
              gameAreaMatrix[row][coll] = tempUp;
              let gameAreaMatrixUp = gameAreaMatrix;
              let trackUp = tablePackage.table(gameAreaMatrixUp);
              console.log(trackUp);
            } else {
              console.log('Wrong Way! Need new order. ');
            }
            break;
        }
      }
    }
  }
}

while (true) {
  stepping();
}

  /*if (gameAreaMatrix[j][k] = gameAreaMatrix[j].length) {
              console.log('Fail, need new order!');
            }*/