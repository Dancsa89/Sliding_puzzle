const tablePackage = require('table');
const music = require('./sound.js');
const help = require('./help');
let keypress = require('keypress');
keypress(process.stdin);

let gameAreaMatrix1 = [];
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
  for (let y = 0; y <= 2; y++) {
    gameAreaMatrix1[y] = [];
    for (let x = 0; x <= 2; x++) {
      pickedNumber = Math.floor(Math.random() * (possibleNumbers.length));
      gameAreaMatrix1[y][x] = possibleNumbers[pickedNumber];
      possibleNumbers.splice(pickedNumber, 1);
    }
  }
  let track = tablePackage.table(gameAreaMatrix1);
  console.log(track);
};

const gameArea = () => {
  matrix();
  generator();
};

const clearArea = () => {
  let gameAreaMatrixLeft = gameAreaMatrix1;
  let trackArea = tablePackage.table(gameAreaMatrixLeft);
  console.clear(gameAreaMatrix1);
  console.log(trackArea);
};

const moveLeft = () => {
  if (coll <= 1) {
    let tempRight = gameAreaMatrix1[row][coll + 1];
    gameAreaMatrix1[row][coll + 1] = gameAreaMatrix1[row][coll];
    gameAreaMatrix1[row][coll] = tempRight;
    clearArea();
    music.step.play();
    console.log('For HELP press H');
  } else {
    clearArea();
    music.error.play();
  }
};

const moveRight = () => {
  if (coll >= 1) {
    let tempLeft = gameAreaMatrix1[row][coll - 1];
    gameAreaMatrix1[row][coll - 1] = gameAreaMatrix1[row][coll];
    gameAreaMatrix1[row][coll] = tempLeft;
    clearArea();
    music.step.play();
    console.log('For HELP press H');
  } else {
    clearArea();
    music.error.play();
  }
};

const moveUp = () => {
  if (row <= 1) {
    let tempDown = gameAreaMatrix1[row + 1][coll];
    gameAreaMatrix1[row + 1][coll] = gameAreaMatrix1[row][coll];
    gameAreaMatrix1[row][coll] = tempDown;
    clearArea();
    music.step.play();
    console.log('For HELP press H');
  } else {
    clearArea();
    music.error.play();
  }
};

const moveDown = () => {
  if (row >= 1) {
    let tempUp = gameAreaMatrix1[row - 1][coll];
    gameAreaMatrix1[row - 1][coll] = gameAreaMatrix1[row][coll];
    gameAreaMatrix1[row][coll] = tempUp;
    clearArea();
    music.step.play();
    console.log('For HELP press H');
  } else {
    clearArea();
    music.error.play();
  }
};

const findNull = () => {
  for (row = 0; row < gameAreaMatrix1.length; row++) {
    for (coll = 0; coll < gameAreaMatrix1[row].length; coll++) {
      let actualElement = gameAreaMatrix1[row][coll];
      if (actualElement === ' ') {
        return;
      }
    }
  }
};

const stepping = () => {
  console.log('For HELP press H');
  process.stdin.on('keypress', function (c, key) {
    if (key.name === 'left') {
      findNull();
      moveLeft();
      writeIfEnd();
    } else if (key.name === 'right') {
      findNull();
      moveRight();
      writeIfEnd();
    } else if (key.name === 'down') {
      findNull();
      moveDown();
      writeIfEnd();
    } else if (key.name === 'up') {
      findNull();
      moveUp();
      writeIfEnd();
    } else if (key.name === 'h') {
      help();
    }
  });
};

const end = () => {
  let result = true;
  let number = 1;
  for (let i = 0; i < gameAreaMatrix1.length; i++) {
    for (let j = 0; j < gameAreaMatrix1.length; j++) {
      if (gameAreaMatrix1[i][j] !== number && gameAreaMatrix1[i][j] !== ' ') {
        result = false;
      }
      number++;
    }
  } if (result) {
    if (gameAreaMatrix1[gameAreaMatrix1.length - 1][gameAreaMatrix1.length - 1] === ' ') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

const writeIfEnd = () => {
  if (end()) {
    console.clear(gameAreaMatrix1);
    music.win.play();
    let chooseTable = [
      ['You solved it!'],
      ['You are a HERO!'],
      ['Press X to EXIT']
    ];
    let chooseTableconfig = {
      columns: {
        0: {
          alignment: 'center'
        }
      }
    };
    let chooseTableView = tablePackage.table(chooseTable, chooseTableconfig);
    console.log(chooseTableView);
  }
};

module.exports = {
  gameArea,
  stepping
};
