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
  },

  // ? Multiple parameter function
  orderPizza: function(mainIngridient, ...otherIngridients){
    console.log(mainIngridient);
    console.log(otherIngridients);
  }
};


// * Destructuring Objects

let { name: name_res, openingHours, categories } = restaurant;

// console.log(name_res, openingHours, categories);

// * Default Values
const { menu = [], starterMenu: stater = [] } = restaurant;


// * Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

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


// * 01 Destructuring

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

// console.log(newRest.name);

// console.log(restaurant.name);

newRest.openingHours.thus = {
  open: 14,
  close: 16,
}

// console.log(newRest.openingHours.thus);

// console.log(restaurant.openingHours.thus);

//


//   FIXME:  Rest Pattern, because on LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];


// console.log(others);


// ! The REST element must be the last

const [pizza, , risoto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(pizza, risoto, otherfood);


// * REST pattern with Objects


const {sat, ...weekdays} = restaurant.openingHours

// console.log(sat, weekdays);

// TODO: Functions

// ? Rest Parameters

// FIXME: Write this function but in a recursive way.

const add = function(...numbers){
  const result = numbers.reduce((p, a) => p+a)
  console.log(result);
}


// add(2, 3)
// add(5, 3, 5)

const x = [ 2, 3, 4, 2]

// console.log(Array.isArray(x));

// const recursive_add = function(...numbers){
//   if(Array.isArray(numbers) === true){
//     console.log("Array");
//     recursive_add(...numbers)
//   }else{
//     console.log("Not Array");
//     console.log(numbers);
//   }
// }


restaurant.orderPizza('Pepperoni', 'Fetta Chesse', 'Pineapple')