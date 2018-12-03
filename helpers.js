const splitOnLinebreak = (data) => {
    return data.split("\n");
}

const parseIntListitem = (data) => {
    return data.map(str => parseInt(str))
}

module.exports = {
    parseIntListitem,
    splitOnLinebreak
};