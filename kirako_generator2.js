let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let gameAreaMatrix = [[]];
	
for(let y = 0; y <= 2; y++) {
	for(let x = 0; x <= 2; x++) {
		let pickedIndex = Math.floor(Math.random(numbers.length));
		gameAreaMatrix[y][x] = numbers[pickedIndex];
		numbers.pop(pickedIndex);
	}
}
console.log(gameAreaMatrix);