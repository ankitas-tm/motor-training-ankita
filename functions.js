
//Access function within the object
var persons = {
    "firstName" : "Ankita",
    "lastName" : "Sangodkar",
    "address" : {
        "street" : "main street",
        "city" : "panjim",
        "state" : "Goa"
    },
    "isFromState" : function (state) {
        return (this.address.state === state);
    }
};

person.isFromState("Goa");

//Default funtion arguments
var add = function() {
    var i; sum=0;
    for (i=0; i< arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log((add(10,30,2, 3, 4, 5)));


//for each

var myArray = [10, 20, "Hello", {}];
var myFunction =  function(arr) {
    console.log(arr + " For an element");
}
myArray.forEach(myFunction())

//Deteling a property
var student = {
    name: "David Ray",
    class: "VI",
    rollNo: 12
}
console.log(student); // {"name" : "David Ray", "class": "VI", "rollNo": 12} 
delete student.rollNo;
console.log(student);  // {"name" : "David Ray", "class": "VI"}


//Get the length of the object
var objectLength = function(obj) {
    var size = 0, index;
    for (index in obj) {
        if (obj.hasOwnProperty(index)) {
            size++;
        }                              
    }
    return size;
};

var objectSize = objectLength(student);
console.log('Size of the current object : '+objectSize);
