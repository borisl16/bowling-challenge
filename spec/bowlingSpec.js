'use strict';

describe('BowlingGame', () => {

    let bowling;

    beforeEach(() => {
        bowling = new BowlingGame();
    });

    const rollPlay = (pins, rolls) => {
        for (let i = 0; i < rolls; i++) {
            bowling.roll(pins);
        }
    }

    it('can roll a gutter game', () => {
            rollPlay(0, 20);
        
        expect(bowling.score()).toBe(0);
    });

    it('80 points score for a game', () =>  {
        rollPlay(4, 20);
        expect(bowling.score()).toBe(20); 
    })




});