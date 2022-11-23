'use strict'

// Coding Challenge #2
// Your tasks:



// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// §
// Data car 1: 'Ford' going at 120 km / h
// GOOD LUCK 😀


// TODO 1. Re - create Challenge #1, but this time using an ES6 class (call it 'CarCl')

class Car {

    constructor(make, speed){
        this.make = make
        this.speed = speed
        this.speedUs = speed
    }

    accelearte(){
        this.speed += 10
        console.log(this.speed)
    }

    brake(){
        this.speed -= 5
        console.log(this.speed)
    }

    get speedUs(){
        return this.speed / 1.6
    }

    set speedUs(speed){
        this._speed = speed * 1.6
    }

}

const mustang = new Car('Ford', 120)

console.log(mustang)

// TODO 2. Add a getter called 'speedUS' which returns the current speed in mi / h(divide by 1.6)


// TODO 3. Add a setter called 'speedUS' which sets the current speed in mi / h(but
// TODO converts it to km / h before storing the value, by multiplying the input by 1.6)


console.log(mustang._speed)