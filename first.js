const operatorsObj = require('./add.js');

function greet(name) {
    console.log("Hello  my name is " + name)
}

operatorsObj.add(10, 21);
operatorsObj.subtraction(21, 5);
greet("Ankita");

console.log(operatorsObj.add(10, 21))
console.log(operatorsObj.subtraction(21, 5))