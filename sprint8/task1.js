//Дано натуральне число n
//Скольцо цифр оно осдержит

const numsDigit = function (num) {
    const step=10;
    let digits= num==0 ? 1 : 0;
    while ( Math.abs(num) >= 1)
    {
        num /= step;
        digits++;
    }
    return digits;
}

module.exports = {numsDigit};

 