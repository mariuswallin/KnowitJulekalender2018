const interface = require('./interface.js');
const helpers = require('./helpers.js');

const slopes = {};

const calculateSlope = (coordinates) => {
    let removedParentheses = coordinates.replace(/[()]/g, "");
    let [coordinatePairOne, coordinatePairTwo] = removedParentheses.split(";");
    let [x1, y1] = coordinatePairOne.split(",").map(str => parseInt(str));
    let [x2, y2] = coordinatePairTwo.split(",").map(str => parseInt(str));
    let slope = (y2 - y1) / (x2 - x1);
    return slope;
}

const countSlopes = (slope) => {
    slopes[slope] ? slopes[slope] += 1 : slopes[slope] = 1;
}

const data = interface.readFile('./input/luke2.txt');
const coordinates = helpers.splitOnLinebreak(data);

coordinates.forEach((coordinate) => {
    countSlopes(calculateSlope(coordinate));
})

const highest = Object.values(slopes).reduce((currentMax, current) => {
    if (currentMax < current) {
        currentMax = current;
    }
    return currentMax;
}, 0);

console.log(highest);