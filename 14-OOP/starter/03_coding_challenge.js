// TODO: 1. Use a constructor function to implement a 'Car'.A car has a 'make' and a
// 'speed' property.The 'speed' property is the current speed of the car in
//     km / h


const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

// TODO: 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

Car.prototype.accelerate = function () {
    this.speed += 10
}

// TODO: 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed)
}


// Your tasks:
// 1. Use a constructor function to implement an Electric Car(called 'EV') as a child
// "class" of 'Car'.Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1 %.Then log a message like this: 'Tesla going at 140
// km / h, with a charge of 22 % '
// 4. Create an electric car object and experiment with calling 'accelerate',
//     'brake' and 'chargeBattery'(charge to 90 %).Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// §
// Data car 1: 'Tesla' going at 120 km / h, with a charge of 23 %

const Ev = function (make, speed, charge){

    Car.call(this, make, speed)

    this.charge = charge
}


Ev.prototype = Object.create(Car.prototype)

Ev.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
}

Ev.prototype.accelerate = function(){
    this.speed+=20
    this.charge-=1
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge} %`)
}


const tesla = new Ev('Tesla', 120, 23)

// console.log(tesla instanceof Car)
// console.log(tesla instanceof Ev)

tesla.accelerate()
tesla.chargeBattery(55)
console.log(tesla)