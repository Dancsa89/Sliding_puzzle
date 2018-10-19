let table = [1, 2, 3, 4];

for (let i = 0; i < table.length; i++) {
  if (table[i] < table[i + 1]) {
    console.log('win');
  } else {
    console.log('fail');
  }
}

/*
let table = [
  [1, 2, 3],
  [4, 5, 6]
];

for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table.length; j++) {
    if (table[i][j] < table[i + 1][j + 1]) {
      console.log('win');
    } else {
      console.log('fail');
    }
  }
}
*/
