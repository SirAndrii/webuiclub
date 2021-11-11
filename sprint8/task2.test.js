//const { test } = require('jest-circus');
const {ideal,getIdealNums} = require('./task2');

describe('Check if number is ideal (the sum of dividers is equel to number)',()=>{
    test('Numbers 6 and 428 should be ideal ',()=>{
        expect (ideal(5)).toBeTruthy();
    }); 
    test('Test other numbers (3,8,9)',()=>{
        expect (ideal(3)).toBeFalsy();
        expect (ideal(8)).toBeFalsy();
        expect (ideal(9)).toBeFalsy();
    });  
});
 describe('Test finding of ideal numbers in range from 0 to 1000',()=>{
    test('Ideal should be Numbers [6, 28, 496] ',()=>{
        expect (getIdealNums(1000)).toEqual([6, 28, 496]);
    });
}); 
