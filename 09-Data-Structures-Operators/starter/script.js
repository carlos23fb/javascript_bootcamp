'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  openingHours: {
    thus: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Address: ${address}, time: ${time}, main: ${this.mainMenu[mainIndex]} starter: ${this.starterMenu[starterIndex]}`);
  },

  orederPasta: function(ing1, ing2, ing3){
    console.log(`Here is the pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
};


// * Destructuring Objects

let { name: name_res, openingHours, categories } = restaurant;

// console.log(name_res, openingHours, categories);

// * Default Values
const { menu = [], starterMenu: stater = [] } = restaurant;


// * Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// * Nested Objects

// let {thus, fri, sat} = restaurant.openingHours

let { fri: { open: o, close: c } } = restaurant.openingHours

// * Using object destructuring for multiple argument fuctions

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })

// restaurant.orderDelivery({
//   address: "Mariano Escobedo #112"
// })


// * Spread Operator

const arr = [4, 5, 6];

const new_arr = [1, 2, 3, ...arr]


const newMenu = [...restaurant.mainMenu, 'Gnocci']


// TODO Destructuring Arrays

// let [first, ,second] = restaurant.categories;

// [first, second] = [second, first]

// let [starter, main] = restaurant.order(2, 0);

// const nested = [2, 4, [5, 6]];

// const [i, j, [k, l]] = nested;

// console.log(restaurant.openingHours);

// * Copy array

const mainMenuCopy = [...restaurant.mainMenu]



const the_menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(the_menu);


// Iterables: arrays, strings, maps , sets, NOT Objects


const my_name = 'Jonas';


const letters = [...my_name, ' ', 's.'];

// console.log(letters);

// console.log(letters.join(""));


// * Real World Example

const ingridients = [];

// for(let i = 1; i <= 3; i++){
//   let ingridient =  prompt("Select Ingridient");
//   ingridients.push(ingridient);
// }

// restaurant.orederPasta(...ingridients)

const newRest = {...restaurant}

newRest.name = 'Classico Romanian';

console.log(newRest.name);

console.log(restaurant.name);

newRest.openingHours.thus = {
  open: 14,
  close: 16,
}


console.log(newRest.openingHours.thus);

console.log(restaurant.openingHours.thus);
