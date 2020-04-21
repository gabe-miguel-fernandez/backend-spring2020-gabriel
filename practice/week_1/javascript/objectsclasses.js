// formatting for an objectd with multiple properties
let myObject = {
    "name": "Eduardo", 
    "address": "123 Some City, CA 90814", 
    "salary": 170000
};

let myOtherObject = {"isTrue": true};

let employee1 = {
    "address": "some place",
    "salary": 80000
};

let employee2 = {
    "name": "Angie",
    address: {
        "street": "124 Some Street",
        "state": "CA",
        "zip": "99999"
    },
    "salary": 90000
};
// classes, "fancy" objects
// need to have at least one function
// need constructor function 
// class names begin with capital letter

class Car {
    // homework: look at static behavior 
    // bonus: figure out what non-this variables go to
    static version = "100";
    constructor(valueOfAge, valueOfMileage, valueOfColor, valueOfHP) {
        this.age = valueOfAge;
        this.mileage = valueOfMileage;
        this.hp = valueOfHP;
        this.color = valueOfColor;   
    }
    // if a function belongs to a class it's called a method
    isWorking() {
        console.log("The car is working and currently is " + this.age + " years old.");
    }
}

let myFirstCar = new Car(50, 60000, "brown", 25);


let mySecondCar = new Car(3);
let soldCar = new Car(12);





let myOldCar = {};




console.log(myFirstCar);
console.log(mySecondCar);
console.log(soldCar);

// version is a static property that is part of class itself
console.log(Car.version);

myFirstCar.isWorking();

// list an object's properties
console.log(Object.getOwnPropertyNames(myFirstCar));


// homework

/*
    TO DO: Lynda online material to study -
    JavaScript Essential Training - Make sense of objects
    JavaScript Classes

    TO DO:
    what happens when object's constructor doesn't use "this" 
    in constructor for a property?
 */