const table = require('table');
//let tableThree = require('./3x3table');
//let tableFour = require('./4x4table');
//let tableFive = require('./5x5table');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

const start = () => {
	let startTabledata = [
		['Sliding Puzzle'],
		['Netti Rencsó Dancsa Entertainment'],
		['@2018'],
		['Press S to start'],
		['For HELP in game press H']
	];
	let startTableconfig = {
		columns: {
			0: {
				alignment: 'center',
			}
		}
	}

	let startTableView = table.table(startTabledata, startTableconfig);
	console.log(startTableView);
	process.stdin.on('keypress', function (c, key) {
		if (key.name == 's') {
			choose();
		}
	});
	return;
}

const choose = () => {
	let chooseTable = [
		['For table 3x3', 'Press a '],
		['For table 4x4', 'Press b '],
		['For table 5x5', 'Press c ']
	];

	let chooseTableconfig = {
		columns: {
			0: {
				alignment: 'center',
			}
		}
	};

	let chooseTableViev = table.table(chooseTable, chooseTableconfig);
	console.log(chooseTableViev);
	process.stdin.on('keypress', function (c, key) {
		if (key.name == 'a') {
			tableThree(true);
		}
		else if (key.name == 'b') {
			tableFour(true);
		}
		else if (key.name == 'c') {
			tableFive(true);
		}
	});
};

module.exports = start;
