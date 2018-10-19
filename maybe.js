let keypress = require('keypress');
keypress(process.stdin);

process.stdin.on('keypress', function (c, key) {
    console.log(0, c, key);
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();