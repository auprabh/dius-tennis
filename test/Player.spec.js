// Tests for Player class

import { assert } from 'chai';

import Player from '../Player.js';

describe('Player', () => {

    const playerName = "player name";
    const player = new Player(playerName);

    it('should have a score that is a number', () => {
        assert.isDefined(player.score, 'score is not defined');
        assert.isNumber(player.score, 'score is not a number');
    });

    describe('Constructor', () => {

        it('should set score to 0', () => {
            assert.isDefined(player.score, 'score is not defined');
            assert.equal(player.score, 0, 'score is not set to zero');
        });

        it('should set player name to argument', () => {
            assert.isDefined(player.score, 'score is not defined');
            assert.equal(player.score, 0, 'score is not set to zero');
        });

    });

    describe('addPoint', () => {

        it('should increment the player points by 1', () => {
            let incrementedPoints = player.score + 1;
            player.addPoint();
            assert.equal(player.score, incrementedPoints, 'does not increment points');
        });

    });
});