const tablePackage = require('table');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

let row = 0;
let coll = 0;

let testArray = [
  [0, 2, 3],
  [1, 5, 6],
  [4, 7, 8]
];



const matrix = () => {
  for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray.length; j++) {
      if (testArray[i][j] === 0) {
        testArray[i][j] = ' ';
      }
    }
  }
};

const firsttable = () => {
  matrix();
  let track = tablePackage.table(testArray);
  console.log(track);
};

firsttable();

const gameArea = () => {
  matrix();
};

const clearArea = () => {
  let gameAreaMatrixLeft = testArray;
  let trackArea = tablePackage.table(gameAreaMatrixLeft);
  console.clear(testArray);
  console.log(trackArea);
};

const moveLeft = () => {
  if (coll <= 1) {
    let tempRight = testArray[row][coll + 1];
    testArray[row][coll + 1] = testArray[row][coll];
    testArray[row][coll] = tempRight;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveRight = () => {
  if (coll >= 1) {
    let tempLeft = testArray[row][coll - 1];
    testArray[row][coll - 1] = testArray[row][coll];
    testArray[row][coll] = tempLeft;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveUp = () => {
  if (row <= 1) {
    let tempDown = testArray[row + 1][coll];
    testArray[row + 1][coll] = testArray[row][coll];
    testArray[row][coll] = tempDown;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveDown = () => {
  if (row >= 1) {
    let tempUp = testArray[row - 1][coll];
    testArray[row - 1][coll] = testArray[row][coll];
    testArray[row][coll] = tempUp;
    clearArea();
  } else {
    clearArea();
    console.log('Wrong Way! Need new order. ');
  }
};

gameArea();

const stepping = () => {
  for (row = 0; row < testArray.length; row++) {
    for (coll = 0; coll < testArray[row].length; coll++) {
      let actualElement = testArray[row][coll];
      if (actualElement === ' ') {
        return;
      }
    }
  }
};

process.stdin.on('keypress', function (c, key) {
  if (key.name === 'a') {
    moveLeft();
    writeifend();
  } else if (key.name === 'd') {
    moveRight();
    writeifend();
  } else if (key.name === 's') {
    moveDown();
    writeifend();
  } else if (key.name === 'w') {
    moveUp();
    writeifend();
  } else {
    console.log('Wrong order, try again!');
  }
  stepping();
});

const end = () => {
  let result = true;
  let number = 1;
  for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray.length; j++) {
      if (testArray[i][j] !== number) {
        result = false;
      }
      if (i === testArray.length - 1 && j === testArray.length - 1 && testArray[i][j] === ' ') {
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
