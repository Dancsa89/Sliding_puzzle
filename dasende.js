const tablePackage = require('table');
let gameAreaMatrix = [];

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
