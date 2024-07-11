var a = 10;
console.log(a); //a = 10

var b = 20;
console.log(b); //b = 20

var c = a + b;
console.log(c); // 10+20 = 30

var d = "Hello";
var e = true;
console.log(d); //Hello
console.log(e); // true
a = "Hello JS";
console.log(a); //Hello JS


var person = {
    "firstName" : "Ankita",
    "lastName" : "Sangodkar",
    "getFullName" : function () {
        return person.firstName + " " + person.lastName;
    }
}

var fullName = person.getFullName();
console.log(fullName);


