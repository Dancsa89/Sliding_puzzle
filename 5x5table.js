const tablePackage = require('table');
let help = require('./help');
let menu = require('./menu');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

let gameAreaMatrix = [];
let pickedNumber;
let possibleNumbers = [];
let row = 0;
let coll = 0;

const matrix = () => {
	for (let i = 0; i < 25; i++) {
		possibleNumbers[i] = i;
		if (possibleNumbers[i] === 0) {
			possibleNumbers[i] = ' ';
		}
	}
};

const generator = () => {
	matrix();
	for (let y = 0; y <= 4; y++) {
		gameAreaMatrix[y] = [];
		for (let x = 0; x <= 4; x++) {
			pickedNumber = Math.floor(Math.random() * (possibleNumbers.length));
			gameAreaMatrix[y][x] = possibleNumbers[pickedNumber];
			possibleNumbers.splice(pickedNumber, 1);
		}
	}
	let track = tablePackage.table(gameAreaMatrix);
	console.log(track);
};

const gameArea = () => {
	matrix();
	generator();
};

const clearArea = () => {
	let gameAreaMatrixLeft = gameAreaMatrix;
	let trackArea = tablePackage.table(gameAreaMatrixLeft);
	console.clear(gameAreaMatrix);
	console.log(trackArea);
};

const moveLeft = () => {
	if (coll <= 3) {
		let tempRight = gameAreaMatrix[row][coll + 1];
		gameAreaMatrix[row][coll + 1] = gameAreaMatrix[row][coll];
		gameAreaMatrix[row][coll] = tempRight;
		clearArea();
		console.log('For HELP press H');
	} else {
		clearArea();
		console.log('Wrong Way! Need new order. ');
	}
};

const moveRight = () => {
	if (coll >= 1) {
		let tempLeft = gameAreaMatrix[row][coll - 1];
		gameAreaMatrix[row][coll - 1] = gameAreaMatrix[row][coll];
		gameAreaMatrix[row][coll] = tempLeft;
		clearArea();
		console.log('For HELP press H');
	} else {
		clearArea();
		console.log('Wrong Way! Need new order. ');
	}
};

const moveUp = () => {
	if (row <= 3) {
		let tempDown = gameAreaMatrix[row + 1][coll];
		gameAreaMatrix[row + 1][coll] = gameAreaMatrix[row][coll];
		gameAreaMatrix[row][coll] = tempDown;
		clearArea();
		console.log('For HELP press H');
	} else {
		clearArea();
		console.log('Wrong Way! Need new order. ');
	}
};

const moveDown = () => {
	if (row >= 1) {
		let tempUp = gameAreaMatrix[row - 1][coll];
		gameAreaMatrix[row - 1][coll] = gameAreaMatrix[row][coll];
		gameAreaMatrix[row][coll] = tempUp;
		clearArea();
		console.log('For HELP press H');
	} else {
		clearArea();
		console.log('Wrong Way! Need new order. ');
	}
};

//gameArea();

const findNull = () => {
	for (row = 0; row < gameAreaMatrix.length; row++) {
		for (coll = 0; coll < gameAreaMatrix[row].length; coll++) {
			let actualElement = gameAreaMatrix[row][coll];
			if (actualElement === ' ') {
				return;
			}
		}
	}
}

const stepping = () => {
	console.log('For HELP press H');
	process.stdin.on('keypress', function (c, key) {
		if (key.name == 'left') {
			findNull();
			moveLeft();
		}
		else if (key.name == 'right') {
			findNull();
			moveRight();
		}
		else if (key.name == 'down') {
			findNull();
			moveDown();
		}
		else if (key.name == 'up') {
			findNull();
			moveUp();
		}
		else if (key.name == 'h') {
			help();
		}
		else if (key.name == 'end') {
			menu.start();
		}
	});
}

module.exports = {
  gameArea,
  stepping
};
