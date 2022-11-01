'use strict';
// TODO Closures Example

//  FIXME: Example 1

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2)
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2)
    }
}

g()
f()

console.dir(f)
// Re-assigning f function

h()
f()
console.dir(f)

// FIXME: Example 2

const boardPassangers = function(n, wait){
    const perGroup = n/3;
    setTimeout(()=>{
        console.log(`We are now boarding all ${n} passangers`);
        console.log(`There are 3 groups, each with ${perGroup} passangers`)
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

const  perGroup = 1000;
boardPassangers(180, 3)

// TODO Closures

const secureBooking = function(){
    let passangerCount = 0;
    return function(){
        passangerCount++;
        console.log(`${passangerCount} passangers`)
    }
}

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker)

// TODO Immediately Invoked Functions Expressions

// ? IIFE

// (function(){
//     console.log('This will never run again!')
// })();

// (()=> console.log('Only run once'))()


// TODO The call and apply and methods


const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book : function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }

}

// lufthansa.book(123, 'Carlos')
// lufthansa.book(635, 'Jhon Smith')

// console.log(lufthansa.bookings)

const eurowings = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    
}

const book = lufthansa.book;

// ! the const book is not the same as lufthansa.book so airline is undefined

// book(23, 'Sara')

// FIXME: Using the call method to replace the object 

// book.call(eurowings, 23, 'Sara')
// console.log(eurowings)


// book.call(lufthansa, 239, 'Maria Lopez')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: []
}

// book.call(swiss, 123, 'Carlos Becerra')


// FIXME: apply method :

const flightData = [583, 'George Copper']

// book.apply(swiss, flightData)

// book.call(swiss, ...flightData)

// 

// TODO Bind method

// FIXME: Bind method

const bookEW = book.bind(eurowings)
const bookLX = book.bind(swiss)
// bookEW(1234, 'Carlitos')
// bookLX(321, 'Jaguar')


// ? Set Parameters beforehand its a common pattern called partial application
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Carlos Flores')
// bookEW23('Roberto')


// FIXME: Real world example: Using objects and event listeners


lufthansa.planes = 300;

lufthansa.buyPlane = function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
}

// lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// FIXME: Partial aplication

const addTax = (rate, value) => value + (value * rate)

// console.log(addTax(0.1, 200))

// ? When you are setting the arguments beforehand its important to know that order mathers

const addVAT = addTax.bind(null, 0.23)

// console.log(addVAT(100))

//FIXME: Challenge

const addIVA = rate => value => value + (value * rate)

// console.log(addIVA(0.21)(100))

// ? With default rate

const addVAT2 = addIVA(0.16)
// console.log(addVAT2(100))


// TODO Functions returning functions

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hi')
// greeterHey('Jonas')
// greeterHey('Juan')

// greet('Hello')('Julian')



// TODO Functions Accepting Callback functions

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// FIXME: High Order Function

const transformer = function(str, fn){
    console.log(`Orginal: ${str}`)
    console.log(`Transform string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}


// transformer('JavaScript is the best!!', oneWord)

// * Example

const high5 = function(){
    console.log('high 5!!')
}

// document.body.addEventListener('click', high5)

// TODO First-Class functions

// ? Store functions in variables or properties

const add = (a, b) => a + b;


// const counter = {
//     value: 23,
//     inc: function(){ this.value++}
// }

// ? Pass functions as arguments to OTHER functions (call back)

// const greet = () => console.log('Hey Juan');

document.querySelector('button').addEventListener('click', greet)


// TODO High-Order functions

// ? A function that receives another function as an argument, that returns a new function, or both. This is possible because of first class functions.


// ? function that returns new function

function count(){
    let counter = 0;

    return function(){
        counter++;
    }
}


// TODO Passing arguments : Value vs Reference

// const flight = 'LH234'
// const juan = {
//     name: 'Carlos Becerra',
//     passport: 123456789
// }

// const checkIn = function(flightNum, passanger){
//     flightNum = 'LH999';
//     passanger.name = 'Mr.' + passanger.name;

//     if(passanger.passport === 123456789){
//         alert('check In!')
//     }else{
//         alert('Wrong passport!')
//     }
    
// }

// checkIn(flight, juan)
// console.log(flight)
// console.log(juan)

// //  FIXME:  Real world Example

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(juan);
// console.log(juan)
// checkIn(flight, juan);


// TODO Default Parameters in functions

// const bookings = []

// const createBooking = function(flightNum=1, numPassangers=1, price=300){
//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking(12)

// console.log(bookings)