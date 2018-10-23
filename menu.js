const table = require('table');
const readlineSync = require('readline-sync');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

const start = () => {
	let startTabledata = [
		['Sliding Puzzle'],
		['Netti Rencsó Dancsa Entertainment'],
		['@2018'],
		['Press Home to start!']
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
		if (key.name == 'home') {
			choose();
		}
	});
	return;
}

const choose = () => {
	let chooseTable = [
		['For table 2x2', 'Press a '],
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
			console.log('3x3-as tábla');
			process.exit(true);
		}
		else if (key.name == 'b') {
			console.log('4x4-es tábla');
			process.exit(true);
		}
		else if (key.name == 'c') {
			console.log('5x5-ös tábla');
			process.exit(true);
		}
	});
};

start();