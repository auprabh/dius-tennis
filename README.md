# dius-tennis
Tennis code challenge by DIUS

## Setup
1. `npm install` to install dependencies
2. `npm start` to run a sample game
3. `npm test` to run tests

## Structure
- `index.js` creates an instance of game, to test game functionality.
- `Game.js` is a class that controls a tennis game.
- `Player.js` is a simple class that controls a player's score.
- `Score.js` is an enum that stores "tennis scores" corresponding to player points.

## Dependency management
- `package.json` controls dependencies and maintains npm scripts to run.
- `.babelrc` sets up babel to compile ES6 to ES5 and make it runable.
