let soundplayer = require('sound-player');

let stepVoice = {
 filename: "step.mp3",
 gain: 100,
 debug: false,
 player: "mpg123"
};

let errorVoice = {
 filename: "error.mp3",
 gain: 100,
 debug: false,
 player: "mpg123"
};

let winVoice = {
 filename: "win.mp3",
 gain: 100,
 debug: false,
 player: "mpg123"
};

let win = new soundplayer(winVoice);
let step = new soundplayer(stepVoice);
let error = new soundplayer(errorVoice);

module.exports = {
 win,
 step,
 error
};