// Test game, from challenge instructions

import Game from './Game.js';

let game = new Game("player 1", "player 2");

// this will return "0-0"
console.log(game.score());

game.pointWonBy("player 1");
game.pointWonBy("player 2");
// this will return "15-15"
console.log(game.score());

game.pointWonBy("player 1");
game.pointWonBy("player 1");
// this will return "40-15"
console.log(game.score());

game.pointWonBy("player 2");
game.pointWonBy("player 2");
// this will return "Deuce"
console.log(game.score());

game.pointWonBy("player 1");
// this will return "Advantage player 1"
console.log(game.score());

game.pointWonBy("player 1");
// this will return "Player 1 wins"
console.log(game.score());
