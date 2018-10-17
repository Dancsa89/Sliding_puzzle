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

const findNulla = () => {
  for (let j = 0; j <= gameAreaMatrix.length; j++) {
    for (let k = 0; k <= gameAreaMatrix[j].length; k++) {
      let actualElement = gameAreaMatrix[j][k];
      if (actualElement === 0) {
        let order = readlineSync.question('Merre menjünk?');
        switch (order) {
          case 'jobbra':
            let temp = gameAreaMatrix[j][k + 1];
            gameAreaMatrix[j][k + 1] = gameAreaMatrix[j][k];
            gameAreaMatrix[j][k] = temp;
            let newGameAreaMatrix = gameAreaMatrix;
            let track2 = tablePackage.table(newGameAreaMatrix);
            console.log(track2);
        }
      }
    }
  }
}

findNulla();