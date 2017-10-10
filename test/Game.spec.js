// Tests for Game class

import { assert } from 'chai';

import Game from '../Game.js';

describe('Game', () => {

    const p1Name = "p1";
    const p2Name = "p2";
    const game = new Game(p1Name, p2Name);
    const tennisScores = ['0-0', '0-15', '0-30', '15-0', '15-15', '15-30', '15-40', '30-0', '30-15', '30-30', '30-40', '40-15', '40-30', 'Deuce', 'Advantage ' + p1Name, 'Advantage ' + p2Name, p1Name + ' wins', p2Name + ' wins'];

    describe('Constructor', () => {

        it('should create both players', () => {
            assert.isDefined(game.p1, 'p1 is not defined');
            assert.isDefined(game.p1, 'p2 is not defined');
        });

        it('should set the name of p1 to first argument', () => {
            assert.equal(game.p1.name, p1Name, 'correct name for p1 not set');
        });

        it('should set the name of p2 to second argument', () => {
            assert.equal(game.p2.name, p2Name, 'correct name for p2 not set');
        });

        it('should set the score to 0-0', () => {
            assert.equal(game.score(), '0-0', 'score not set to 0');
        });

        it('should not have a winner', () => {
            assert.isUndefined(game.winner, 'winner is defined before game is won');
        });

    });

    describe('Score', () => {

        it('should return a value', () => {
            assert.isDefined(game.score(), 'score is not defined');
        });

        it('should return a valid tennis score', () => {
            assert.oneOf(game.score(), tennisScores, 'score is not a valid tennis score');
        });

        it('should return 0-0 before any points are added', () => {
            assert.equal(game.score(), '0-0', 'score is not 0-0');
        });

        // Only a few game cases are included:

        it('should return (player1Score)-(player2Score) when both scores are below 40 or only one score is 40', () => {
            game.pointWonBy(p1Name);
            assert.equal(game.score(), '15-0', 'score is not 15-0');
            game.pointWonBy(p2Name);
            game.pointWonBy(p2Name);
            assert.equal(game.score(), '15-30', 'score is not 15-30');
            game.pointWonBy(p1Name);
            game.pointWonBy(p1Name);
            assert.equal(game.score(), '40-30', 'score is not 40-30');
        });

        it('should return Deuce when players are tied at or above 40', () => {
            let game = new Game(p1Name, p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            assert.equal(game.score(), 'Deuce', 'score is not Deuce at 3-3');
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            assert.equal(game.score(), 'Deuce', 'score is not Deuce at 4-4');
        });

        it('should return Advantage when player has a 1-point lead at or above 40', () => {
            let game = new Game(p1Name, p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            assert.equal(game.score(), 'Advantage ' + p1Name, 'score is not Advantage at 4-3');
            game.pointWonBy(p2Name);
            game.pointWonBy(p1Name);
            assert.equal(game.score(), 'Advantage ' + p1Name, 'score is not Advantage at 5-4');
        });

    });

    describe('pointWonBy', () => {

        it('should add a point to p1 when p1 name is passed', () => {
            let p1Before = game.p1.score;
            game.pointWonBy(p1Name);
            assert.equal(game.p1.score, p1Before + 1, 'point was not added to p1');
        });

        it('should add a point to p2 when p2 name is passed', () => {
            let p2Before = game.p2.score;
            game.pointWonBy(p2Name);
            assert.equal(game.p2.score, p2Before + 1, 'point was not added to p2');
        });

        it('should not change score if wrong name passed', () => {
            let p1Before = game.p1.score;
            let p2Before = game.p2.score;
            game.pointWonBy("wrong name");
            assert.equal(game.p1.score, p1Before, 'p1 scored was changed');
            assert.equal(game.p2.score, p2Before, 'p2 scored was changed');
        });

    });
});