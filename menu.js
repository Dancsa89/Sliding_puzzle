const table = require('table');
const readlineSync = require('readline-sync');
let keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

const start = () => {
    let startTable = [
        ['Sliding Puzzle'],
        ['Netti Rencsó Dancsa Entertainment'],
        ['@2018'],
        ['Press a button to start!']
    ];

    let startTableView = table.table(startTable);
    console.log(startTableView);
    process.stdin.on('keypress', function (c, key) {
        if (key.name === 'x') {
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
    let chooseTableViev = table.table(chooseTable);
    console.log(chooseTableViev);
    process.stdin.on('keypress', function (c, key) {
        if (key.name == 'a') {
            process.stdin.setRawMode(false);
            console.log('3x3-as tábla');
        }
        else if (key.name == 'b') {
            process.stdin.setRawMode(false);
            console.log('4x4-es tábla');
        }
        else if (key.name == 'c') {
            process.stdin.setRawMode(false);
            console.log('5x5-ös tábla');
        }
    });
}

start();