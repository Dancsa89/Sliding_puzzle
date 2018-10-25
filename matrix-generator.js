const tablePackage = require('table');

let gameAreaMatrix = [];
let pickedNumber;
let possibleNumbers = [];

const matrix = () => {
  for (let i = 0; i < 4; i++) {
    possibleNumbers[i] = i;
    if (possibleNumbers[i] === 0) {
      possibleNumbers[i] = ' ';
    }
  }
};

const generator = () => {
  matrix();
  for (let y = 0; y <= 1; y++) {
    gameAreaMatrix[y] = [];
    for (let x = 0; x <= 1; x++) {
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

module.exports = {
  gameArea
};
