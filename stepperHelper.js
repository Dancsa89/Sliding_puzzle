const tablePackage = require('table');

let row = 0;
let coll = 0;

const clearLeft = () => {
  let gameAreaMatrixRight = gameAreaMatrix;
  let trackRight = tablePackage.table(gameAreaMatrixRight);
  console.clear(gameAreaMatrix);
  console.log(trackRight);
};

const clearRight = () => {
  let gameAreaMatrixLeft = gameAreaMatrix;
  let trackLeft = tablePackage.table(gameAreaMatrixLeft);
  console.clear(gameAreaMatrix);
  console.log(trackLeft);
};

const clearUP = () => {
  let gameAreaMatrixDown = gameAreaMatrix;
  let trackDown = tablePackage.table(gameAreaMatrixDown);
  console.clear(gameAreaMatrix);
  console.log(trackDown);
};

const clearDown = () => {
  let gameAreaMatrixUp = gameAreaMatrix;
  let trackUp = tablePackage.table(gameAreaMatrixUp);
  console.clear(gameAreaMatrix);
  console.log(trackUp);
};

const moveLeft = () => {
  if (coll <= 1) {
    let tempRight = gameAreaMatrix[row][coll + 1];
    gameAreaMatrix[row][coll + 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempRight;
    clearLeft();
  } else {
    clearLeft();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveRight = () => {
  if (coll >= 1) {
    let tempLeft = gameAreaMatrix[row][coll - 1];
    gameAreaMatrix[row][coll - 1] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempLeft;
    clearRight();
  } else {
    clearRight();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveUp = () => {
  if (row <= 1) {
    let tempDown = gameAreaMatrix[row + 1][coll];
    gameAreaMatrix[row + 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempDown;
    clearUP();
  } else {
    clearUP();
    console.log('Wrong Way! Need new order. ');
  }
};

const moveDown = () => {
  if (row >= 1) {
    let tempUp = gameAreaMatrix[row - 1][coll];
    gameAreaMatrix[row - 1][coll] = gameAreaMatrix[row][coll];
    gameAreaMatrix[row][coll] = tempUp;
    clearDown();
  } else {
    clearDown();
    console.log('Wrong Way! Need new order. ');
  }
};

module.exports = {
  moveDown,
  moveLeft,
  moveRight,
  moveUp
};
