const end = () => {
  let result = true;
  let number = 1;
  for (let i = 0; i < gameAreaMatrix.length; i++) {
    for (let j = 0; j < gameAreaMatrix.length; j++) {
      if (gameAreaMatrix[i][j] !== number) {
        result = false;
      }
      if (i === gameAreaMatrix.length - 1 && j === gameAreaMatrix.length - 1 && gameAreaMatrix[i][j] === ' ') {
        result = true;
      }
      number++;
    }
  } return result;
 };
 
 const writeIfEnd = () => {
  if (end()) {
    console.log('You win!');
  } else {
    console.log('Buzgerátor');
  }
 };

module.exports = end;
module.exports = writeIfEnd;