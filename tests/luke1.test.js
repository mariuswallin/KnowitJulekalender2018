const luke1 = require('../luke1.js');

const dummydata = [5, 4, 3, 6, 7, 5, 2, 7, 5, 1, 1, 10];
let sortedList = [];

test('keep the next number which is larger than currentMax', () => {
    sortedList = luke1.vekksort(dummydata);
    expect(sortedList.length).toBe(5);
});

test('calculate new sum after removing numbers', () => {
    const sum = luke1.calculateSum(sortedList);
    expect(sum).toBe(35);
});