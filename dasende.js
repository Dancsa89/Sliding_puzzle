<<<<<<< HEAD
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];
=======
const tablePackage = require('table');
let gameAreaMatrix = [];
>>>>>>> fae8eff32f6343e92e51330cbd81cf0db5fcd11e

const end = () => {
  let result = true;
  let number = 1;
<<<<<<< HEAD
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== number && matrix[i][j] !== 0) {
=======
  for (let i = 0; i < gameAreaMatrix.length; i++) {
    for (let j = 0; j < gameAreaMatrix.length; j++) {
      if (gameAreaMatrix[i][j] !== number && gameAreaMatrix[i][j] !== ' ') {
>>>>>>> fae8eff32f6343e92e51330cbd81cf0db5fcd11e
        result = false;
      }
      number++;
    }
<<<<<<< HEAD
  }

  if (result) {
    if (matrix[matrix.length - 1][matrix.length - 1] === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

=======
  } if (result) {
    if (gameAreaMatrix[gameAreaMatrix.length - 1][gameAreaMatrix.length - 1] === ' ') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

>>>>>>> fae8eff32f6343e92e51330cbd81cf0db5fcd11e
const writeifend = () => {
  if (end()) {
    console.clear(gameAreaMatrix);
    let chooseTable = [
      ['You solved it!'],
      ['You are a HERO!'],
      ['Do you want to solve more difficulty Sliding Puzzle?' + ' Press X and choose']
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
  writeifend
};
