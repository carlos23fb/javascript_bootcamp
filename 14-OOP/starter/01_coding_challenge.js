'use strict';

// Coding Challenge #1
// Your tasks:






// TODO: 1. Use a constructor function to implement a 'Car'.A car has a 'make' and a
// 'speed' property.The 'speed' property is the current speed of the car in
//     km / h


const Car = function(make, speed){
    this.make = make
    this.speed = speed
}

// TODO: 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

Car.prototype.accelerate = function(){
    this.speed += 10
}

// TODO: 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

Car.prototype.brake = function(){
    this.speed -= 5
    console.log(this.speed)
}


// TODO: 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// §
// §
// Data car 1: 'BMW' going at 120 km / h
// Data car 2: 'Mercedes' going at 95 km / h
// GOOD LUCK 😀

const car1 = new Car('BMW', 120)

console.log(car1)

car1.brake()

car1.accelerate()

console.log(car1)