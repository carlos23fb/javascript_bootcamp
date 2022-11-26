'use strict'

class CarCl {

    constructor(make, speed) {
        this.make = make
        this.speed = speed
        this.speedUs = speed
    }

    accelerate() {
        this.speed += 10
        console.log(this.speed)
    }

    brake() {
        this.speed -= 5
        console.log(this.speed)
        return this
    }

    get speedUs() {
        return this.speed / 1.6
    }

    set speedUs(speed) {
        this._speed = speed * 1.6
    }

}

// Coding Challenge #4
// Your tasks:





// TODO: 1. Re - create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class


class EvCl extends CarCl {

    #charge

    constructor(make, speed, charge){
        super(make, speed)

        // TODO: 2. Make the 'charge' property private

        this.#charge = charge
    }

    // TODO 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
    // TODO methods of this class, and also update the 'brake' method in the 'CarCl'
    // TODO class. Then experiment with chaining!

    chargeBattery(chargeTo){
        this.#charge = chargeTo
        console.log(`${this.make} charged to ${this.#charge} %`)
        return this
    }

    accelerate() {
        this.speed += 20
        this.#charge -= 1
        console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.#charge} %`)
        return this
    }

}

const tesla = new EvCl('Tesla', 120, 22)



// * Test data:
// * Data car 1: 'Rivian' going at 120 km / h, with a charge of 23 %

tesla.brake().chargeBattery(99).accelerate()