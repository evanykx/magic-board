const expect = require('chai').expect;

function addNum(a, b) {
    return a + b;
}

describe('Test addNum', () => {
    it('Test a plus b', () => {
        expect(addNum(1,2)).to.be.equal(3);
    })
})