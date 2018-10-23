let matrix = [
  [5, 2, 3],
  [4, 0, 6],
  [7, 8, 1]
];

const end = () => {
  let result = true;
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

end();

const writeifend = () => {
  if (end()) {
    console.log('You win!');
  }
};

writeifend();
