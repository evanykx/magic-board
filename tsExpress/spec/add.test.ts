const {
    describe,
    it
} = require('mocha');

const {
    expect
} = require('chai');

const add: Function = (x: number, y: number): number => {
    return x + y;
};

describe('Test add', () => {
    it('It should be 5 when 2 + 3!', () => {
        expect(add(2, 3)).to.equal(5);
    })
});
