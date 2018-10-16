let possibleNumbers = [];

for(let i = 0; i < 9; i++) {
	possibleNumbers[i] = i;
}

let pickedNumber;
let gameArea = [];

for(let y = 0; y < 3; y++) {
	gameArea[y] = [];
	for(let x = 0; x <= 2; x++){
		pickedNumber = Math.floor(Math.random() * possibleNumbers.length)
		gameArea[y][x] = possibleNumbers[pickedNumber];
		possibleNumbers.splice(pickedNumber, 1)
	}
}
console.log(gameArea);