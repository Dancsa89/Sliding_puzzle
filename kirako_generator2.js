const tablePackage = require('table');

let possibleNumbers = [];

const matrix = () => {
  for (let i = 0; i < 9; i++) {
    possibleNumbers[i] = i;
  }
};

const generator = () => {
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
};

generator();
