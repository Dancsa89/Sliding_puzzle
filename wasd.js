const tablePackage = require('table');
const readlineSync = require('readline-sync');
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
    console.log('Wrong way! Need new order! ');
  }
};

gameArea();

const help = () => {
  let helpTableContent = [
    ['W', 'Move up'],
    ['A', 'Move left'],
    ['S', 'Move Right'],
    ['D', 'Move Down'],
    ['H', 'Help'],
    ['End', 'Back to the Main Menu']
  ];
  let helpTable = tablePackage.table(helpTableContent);
  console.log(helpTable);
  return;
}

const findNull = () => {
  for (row = 0; row < gameAreaMatrix.length; row++) {
    for (coll = 0; coll < gameAreaMatrix[row].length; coll++) {
      let actualElement = gameAreaMatrix[row][coll];
      if (actualElement === ' ') {
        return;
      }
    }
  }
}

const stepping = () => {
  process.stdin.on('keypress', function (c, key) {
    if (key.name == 'a') {
      findNull();
      moveLeft();
    }
    else if (key.name == 'd') {
      findNull();
      moveRight();
    }
    else if (key.name == 's') {
      findNull();
      moveDown();
    }
    else if (key.name == 'w') {
      findNull();
      moveUp();
    }
    else if (key.name == 'h') {
      help();
    }
    else if (key.name == 'end') {
      console.log('Vissza a főmenübe')
      process.exit(true);
    }
  });
}

stepping();

const end = () => {
  let result = false;
  let number = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== number) {
        result = false;
      } if (matrix[i][j] === 0) {
        result = true;
      }
      number++;
    }
  } return result;
};

const writeifend = () => {
  if (end()) {
    console.log('You win!');
  }
};

writeifend();
