const tablePackage = require('table');
const readlineSync = require('readline-sync');

let possibleNumbers = [];

const matrix = () => {
  for (let i = 0; i < 9; i++) {
    possibleNumbers[i] = i;
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
  for (let j = 0; j < gameAreaMatrix.length; j++) {
    for (let k = 0; k < gameAreaMatrix[j].length; k++) {
      let actualElement = gameAreaMatrix[j][k];
      if (actualElement === 0) {
        let order = readlineSync.question('What is the order Master?');
        switch (order) {
          case 'right':
            let tempRight = gameAreaMatrix[j][k + 1];
            gameAreaMatrix[j][k + 1] = gameAreaMatrix[j][k];
            gameAreaMatrix[j][k] = tempRight;
            let gameAreaMatrixRight = gameAreaMatrix;
            let trackRight = tablePackage.table(gameAreaMatrixRight);
            console.log(trackRight);
            break;
          case 'left':
            let tempLeft = gameAreaMatrix[j][k - 1];
            gameAreaMatrix[j][k - 1] = gameAreaMatrix[j][k];
            gameAreaMatrix[j][k] = tempLeft;
            let gameAreaMatrixLeft = gameAreaMatrix;
            let trackLeft = tablePackage.table(gameAreaMatrixLeft);
            console.log(trackLeft);
            break;
          case 'down':
            let tempDown = gameAreaMatrix[j + 1][k];
            gameAreaMatrix[j + 1][k] = gameAreaMatrix[j][k];
            gameAreaMatrix[j][k] = tempDown;
            let gameAreaMatrixDown = gameAreaMatrix;
            let trackDown = tablePackage.table(gameAreaMatrixDown);
            console.log(trackDown);
            break;
          case 'up':
            let tempUp = gameAreaMatrix[j - 1][k];
            gameAreaMatrix[j - 1][k] = gameAreaMatrix[j][k];
            gameAreaMatrix[j][k] = tempUp;
            let gameAreaMatrixUp = gameAreaMatrix;
            let trackUp = tablePackage.table(gameAreaMatrixUp);
            console.log(trackUp);
        }
      }
    }
  }
}

stepping();