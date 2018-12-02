const fs = require("fs");

const readFile = (file) => {
    return fs.readFileSync(file, "utf-8")
}

const numberListFromFile = (data) => {
    return data.split("\n").map(str => parseInt(str))
}
const vekksort = (numbers) => {
    let currentMax = numbers.slice(0, 1);
    let startValue = currentMax;
    return numbers.slice(1).reduce((sorted, value) => {
        if (value >= currentMax) {
            currentMax = value;
            sorted.push(value);
        }
        return sorted;
    }, startValue);
}

const calculateSum = (numbers) => {
    return numbers.reduce((sum, number) => {
        return sum + number;
    });
}

const data = readFile('./input/luke1.txt');
const numbers = numberListFromFile(data);
const sum = calculateSum(vekksort(numbers));
console.log(sum);


module.exports = {
    vekksort,
    calculateSum
};