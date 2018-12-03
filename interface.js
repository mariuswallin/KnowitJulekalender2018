const readFile = (file) => {
    return require("fs").readFileSync(file, "utf-8")
}

module.exports = {
    readFile
};