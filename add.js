let moment = require('moment');

function add(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}

exports.add = add;
exports.subtraction = (a, b) => a - b;

//moment
console.log(`Hello the time is", ${moment().format("MM/DD/YYYY")}`);