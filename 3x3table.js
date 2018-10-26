const tablePackage = require('table');
let help = require('./help');
let menu = require('./menu');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

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
    console.log('For HELP press H');
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
    console.log('For HELP press H');
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
    console.log('For HELP press H');
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
    console.log('For HELP press H');
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const findNull = () => {
  for (row = 0; row < gameAreaMatrix.length; row++) {
    for (coll = 0; coll < gameAreaMatrix[row].length; coll++) {
      let actualElement = gameAreaMatrix[row][coll];
      if (actualElement === ' ') {
        return;
      }
    }
  }
};

const stepping = () => {
  process.stdin.on('keypress', function (c, key) {
    if (key.name === 'left') {
      findNull();
      moveLeft();
      writeifend();
    } else if (key.name === 'right') {
      findNull();
      moveRight();
      writeifend();
    } else if (key.name === 'down') {
      findNull();
      moveDown();
      writeifend();
    } else if (key.name === 'up') {
      findNull();
      moveUp();
      writeifend();
    } else if (key.name === 'h') {
      help();
    } else if (key.name === 'end') {
      menu.start();
    }
  });
};

const end = () => {
  let result = true;
  let number = 1;
  for (let i = 0; i < gameAreaMatrix.length; i++) {
    for (let j = 0; j < gameAreaMatrix.length; j++) {
      if (gameAreaMatrix[i][j] !== number && gameAreaMatrix[i][j] !== ' ') {
        result = false;
      }
      number++;
    }
  } if (result) {
    if (gameAreaMatrix[gameAreaMatrix.length - 1][gameAreaMatrix.length - 1] === ' ') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

const writeifend = (gameAreaMatrix) => {
  if (end()) {
    console.clear(gameAreaMatrix);
    console.log('You win!');
  }
};

module.exports = {
  stepping,
  gameArea
};
