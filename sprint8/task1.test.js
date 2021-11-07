const {numsDigit} = require('./task1');

describe('Get numbers',()=>{
    test(' of digits:',()=>{
        expect(numsDigit(-2)).toBe(1);
        expect(numsDigit(0)).toBe(1);
        expect(numsDigit(5)).toBe(1);
        expect(numsDigit(305)).toBe(3);
        expect(numsDigit(12441)).toBe(5);
    });
 
});