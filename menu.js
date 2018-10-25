const table = require('table');
let gameThree = require('./3x3table');
let gameFour = require('./4x4table');
let gameFive = require('./5x5table');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

const choose = () => {
  let chooseTable = [
    ['For table 3x3', 'Press a '],
    ['For table 4x4', 'Press b '],
    ['For table 5x5', 'Press c ']
  ];

  let chooseTableconfig = {
    columns: {
      0: {
        alignment: 'center'
      }
    }
  };

  let chooseTableView = table.table(chooseTable, chooseTableconfig);
  console.log(chooseTableView);
  process.stdin.on('keypress', function (c, key) {
    if (key.name == 'a') {
			gameThree.gameArea();
			gameThree.stepping();
    } else if (key.name == 'b') {
			gameFour.gameArea();
			gameFour.stepping();
    } else if (key.name == 'c') {
			gameFive.gameArea();
			gameFive.stepping();
    } else if (key.name == 'x') {
      process.exit(true);
    }
  });
};

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
				alignment: 'center'
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
};

/*const choose = () => {
  let chooseTable = [
    ['For table 3x3', 'Press a '],
    ['For table 4x4', 'Press b '],
    ['For table 5x5', 'Press c ']
  ];

  let chooseTableconfig = {
    columns: {
      0: {
        alignment: 'center'
      }
    }
  };

  let chooseTableView = table.table(chooseTable, chooseTableconfig);
  console.log(chooseTableView);
  process.stdin.on('keypress', function (c, key) {
    if (key.name == 'a') {
			gameThree.gameArea();
			gameThree.stepping();
    } else if (key.name == 'b') {
			gameFour.gameArea();
			gameFour.stepping();
    } else if (key.name == 'c') {
			gameFive.gameArea();
			gameFive.stepping();
    } else if (key.name == 'x') {
      process.exit(true);
    }
  });
};*/

module.exports = {
  start,
  choose
};

start();
