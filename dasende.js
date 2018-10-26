let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

const end = () => {
  let result = true;
  let number = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== number && matrix[i][j] !== 0) {
        result = false;
      }
      number++;
    }
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

const writeifend = () => {
  if (end()) {
    console.log('You win!');
  }
};

writeifend();
