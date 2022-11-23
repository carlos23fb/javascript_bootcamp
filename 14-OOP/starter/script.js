'use strict';


// TODO: Contstructor functions and the "new" opetator

const Person = function (firstName, birthYear) {

    // Instance properties
    this.firstName = firstName,
        this.birthYear = birthYear

}

const jonas = new Person('Jonas', 1991)


jonas.nickname = 'javascript redentor'

// console.log(jonas)

const matilda = new Person('Matilda', 1994)

matilda.nickname = 'psyco'

// console.log(matilda)

// console.log(jonas instanceof Person)

// console.log(matilda.calcAge())

// TODO: Prototypes


// console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear)
}

// console.log(matilda.calcAge())

// jonas.calcAge()
// matilda.calcAge()

// console.log(jonas.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(jonas))
// console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
// console.log(jonas)
// console.log(matilda)


// console.log(jonas.hasOwnProperty('firstName'))

// console.log(jonas.hasOwnProperty('species'))

// TODO: Prototypal Inheritance on Built-In Objects

// console.log(jonas.__proto__)

// console.log(Person.prototype)

// console.log(jonas.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

const arr = [3, 6, 7, 8]

// console.log(arr.__proto__)

// TODO: ES6 Classes


// * Class expression

// const PersonCl = class{

// }

// * Class declaration

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2022 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2022 - this.birthYear
    }

    set fullName(name) {
        console.log(name)
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName
    }

    // * Instance method
    
    static hey(){
        console.log('Hey there!!')
    }

}

// const juan = new PersonCl('Juan Becerra', 1994)


// const walter = new PersonCl('Walter', 1965)

// console.log(juan.birthYear)


// console.log(juan.age)


// ? 1. Classes are NOT hoisted
// ? 2. Classes are first-class citizens
// ? 3. Classes are executed in strict mode 

// TODO: Setters and Getters

//? Assesor properties

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

// console.log(account.latest)

// account.latest = 23

// console.log(account.movements)

// console.log(juan.fullName)

// TODO: Static Methods

//  * Add static method to a class expression

Person.hey = function(){
    console.log('Hey')
}

Person.hey()

// matilda.hey() // ! hey method doesnt exist in the matilda instance of Person

PersonCl.hey()